import { cpSync, mkdirSync, rmSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public')
const creator = join(pub, 'creator')
const labDist = join(root, 'ball-lab', 'dist')
const gameHtml = join(root, 'game', 'index.html')

mkdirSync(pub, { recursive: true })
cpSync(gameHtml, join(pub, 'index.html'))

if (!existsSync(labDist)) {
  console.error('ball-lab/dist missing — run npm run build:lab first')
  process.exit(1)
}

rmSync(creator, { recursive: true, force: true })
mkdirSync(creator, { recursive: true })
cpSync(labDist, creator, { recursive: true })
console.log('synced public/ (game + /creator)')
