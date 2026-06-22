#!/usr/bin/env bun
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

// Parse manual docs from docs/
const manualDocs = new Map()

function parseManualDocsFile(filePath: string) {
  if (!existsSync(filePath)) return
  const content = readFileSync(filePath, 'utf-8')
  const blocks = content.split(/(?=^##\s+)/m)
  for (const block of blocks) {
    if (!block.startsWith('## ')) continue
    const lines = block.split('\n')
    const header = lines[0].replace(/^##\s+/, '').trim() // e.g. "Func.curry"

    const descLine = lines.find((l) => l.trim().startsWith('> '))
    const description = descLine ? descLine.trim().replace(/^>\s*/, '') : ''

    const codeMatch = block.match(/```javascript([\s\S]*?)```/)
    const example = codeMatch ? codeMatch[1].trim() : ''

    manualDocs.set(header.toLowerCase(), { description, example })
  }
}

// Load manual docs
parseManualDocsFile('./docs/FUNC.md')
parseManualDocsFile('./docs/GENERAL.md')
parseManualDocsFile('./docs/LIST.md')

// Parse types.d.ts module interfaces
function parseModuleLines(lines: string[]): Map<string, string> {
  const sigs = new Map<string, string>()
  let currentFn: string | null = null
  let currentSig: string[] = []

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue

    if (trimmed.startsWith('[key:')) {
      if (currentFn) {
        sigs.set(currentFn, currentSig.join('\n').trim())
        currentFn = null
        currentSig = []
      }
      continue
    }

    const match = line.match(/^ {2}([a-zA-Z0-9_]+)\s*:\s*(.*)/)
    if (match) {
      if (currentFn) {
        sigs.set(currentFn, currentSig.join('\n').trim())
      }
      currentFn = match[1]
      currentSig = [match[2]]
    } else if (currentFn) {
      const cleanedLine = line.startsWith('  ') ? line.slice(2) : line
      currentSig.push(cleanedLine)
    }
  }

  if (currentFn) {
    sigs.set(currentFn, currentSig.join('\n').trim())
  }

  return sigs
}

function parseModuleInterfaces(content: string): Map<string, Map<string, string>> {
  const modules = new Map<string, Map<string, string>>()
  const lines = content.split('\n')
  let currentModule: string | null = null
  let moduleLines: string[] = []
  let braceCount = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (currentModule === null) {
      const match = line.match(/^export\s+interface\s+(\w+)Module\s*\{/)
      if (match) {
        currentModule = match[1]
        moduleLines = []
        braceCount = 1
      }
    } else {
      for (const char of line) {
        if (char === '{') braceCount++
        else if (char === '}') braceCount--
      }

      if (braceCount === 0) {
        const sigs = parseModuleLines(moduleLines)
        modules.set(currentModule, sigs)
        currentModule = null
      } else {
        moduleLines.push(line)
      }
    }
  }

  return modules
}

const typesContent = readFileSync('./src/types.d.ts', 'utf-8')
const moduleTypes = parseModuleInterfaces(typesContent)

function parseDtsFile(filePath: string): string | null {
  if (!existsSync(filePath)) return null
  const content = readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')
  const filteredLines = lines
    .map((line) => line.trim())
    .filter((line) => {
      if (!line) return false
      if (line.startsWith('import ')) return false
      if (line.startsWith('export {')) return false
      if (line.match(/^export\s+default\s+[a-zA-Z0-9_$]+;?$/)) return false
      return true
    })
    .map((line) => {
      return line
        .replace(/^export\s+default\s+/, '')
        .replace(/^export\s+declare\s+/, '')
        .replace(/^export\s+/, '')
    })
  return filteredLines.join('\n').trim()
}

function formatSignature(name: string, rawSig: string): string {
  if (rawSig.startsWith('{')) {
    return `const ${name}: ${rawSig}`
  }
  if (
    rawSig.startsWith('function ') ||
    rawSig.startsWith('export ') ||
    rawSig.startsWith('declare ')
  ) {
    return rawSig
  }
  return `const ${name}: ${rawSig}`
}

const modules = ['Func', 'General', 'List', 'Num', 'Obj', 'Str']

mkdirSync('./apps/docs/content/docs/api', { recursive: true })

for (const mod of modules) {
  const modDir = join('./src', mod)
  if (!existsSync(modDir)) continue

  const files = readdirSync(modDir)
    .filter((f) => f.endsWith('.js') && f !== 'index.js')
    .sort((a, b) => a.localeCompare(b))

  const parsedFunctions = []

  for (const file of files) {
    const funcName = file.replace(/\.js$/, '')
    const filePath = join(modDir, file)

    const content = readFileSync(filePath, 'utf-8')
    const docMatch = content.match(/\/\*\*([\s\S]*?)\*\//)
    if (!docMatch) continue

    const docText = docMatch[1]
    const lines = docText.split('\n').map((l) => l.replace(/^\s*\*\s?/, '').trim())

    const signatureLine = lines.find((l) => l.includes('::'))
    const signature = signatureLine ? signatureLine.trim() : ''

    const params = []
    let returns = ''

    for (const line of lines) {
      if (line.startsWith('@param')) {
        const paramMatch = line.match(/@param\s+(\w+)\s*-\s*`(.+?)`/)
        if (paramMatch) {
          params.push({ name: paramMatch[1], type: paramMatch[2] })
        } else {
          const simpleMatch = line.match(/@param\s+(\w+)/)
          if (simpleMatch) {
            params.push({ name: simpleMatch[1], type: 'unknown' })
          }
        }
      } else if (line.startsWith('@returns')) {
        const returnsMatch = line.match(/@returns\s+`(.+?)`/)
        if (returnsMatch) {
          returns = returnsMatch[1]
        }
      }
    }

    const manualKey = `${mod}.${funcName}`.toLowerCase()
    const manual = manualDocs.get(manualKey)

    let tsSignature = ''
    const dtsPath = join(modDir, `${funcName}.d.ts`)
    if (existsSync(dtsPath)) {
      tsSignature = parseDtsFile(dtsPath) || ''
    } else {
      const fallbackSig = moduleTypes.get(mod)?.get(funcName)
      if (fallbackSig) {
        tsSignature = formatSignature(funcName, fallbackSig)
      }
    }

    parsedFunctions.push({
      name: funcName,
      signature,
      tsSignature,
      params,
      returns,
      description: manual?.description || '',
      example: manual?.example || '',
    })
  }

  // Format MDX
  let mdx = `---
title: "${mod} API"
description: "Complete API reference for preludejs/${mod}"
---

# ${mod} API Reference

`

  for (let i = 0; i < parsedFunctions.length; i++) {
    const fn = parsedFunctions[i]

    mdx += `## ${fn.name} <span className="inline-flex items-center rounded-full border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold px-2.5 py-0.5 font-medium ml-2 align-middle">ƒ</span>\n\n`

    if (fn.description) {
      mdx += `${fn.description}\n\n`
    }

    if (fn.signature) {
      mdx += `\`\`\`haskell\n${fn.signature}\n\`\`\`\n\n`
    }

    if (fn.tsSignature) {
      mdx += `#### TypeScript Signature\n\n\`\`\`typescript\n${fn.tsSignature}\n\`\`\`\n\n`
    }

    if (fn.params.length > 0) {
      mdx += '#### Parameters\n\n| Parameter | Type |\n|---|---|\n'
      for (const p of fn.params) {
        mdx += `| \`${p.name}\` | \`${p.type}\` |\n`
      }
      mdx += '\n'
    }

    if (fn.returns) {
      mdx += `#### Returns\n\n\`${fn.returns}\`\n\n`
    }

    if (fn.example) {
      mdx += `#### Example\n\n\`\`\`javascript\n${fn.example}\n\`\`\`\n\n`
    }

    if (i < parsedFunctions.length - 1) {
      mdx += `<hr className="my-8 border-neutral-200 dark:border-neutral-800" />\n\n`
    }
  }

  const outPath = `./apps/docs/content/docs/api/${mod.toLowerCase()}.mdx`
  writeFileSync(outPath, mdx, 'utf-8')
  console.log(`Generated ${outPath}`)
}

// Generate meta.json
const meta = {
  title: 'prelude-js',
  pages: [
    'index',
    'getting-started',
    '---api---',
    ...modules.map((mod) => `api/${mod.toLowerCase()}`),
  ],
}

writeFileSync('./apps/docs/content/docs/meta.json', `${JSON.stringify(meta, null, 2)}\n`, 'utf-8')
console.log('Generated ./apps/docs/content/docs/meta.json')
