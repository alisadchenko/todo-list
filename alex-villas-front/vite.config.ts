import react from '@vitejs/plugin-react-swc'
import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'

const rootPath = __dirname

const basePath = path.resolve(rootPath, '.')
const dirs = fs
  .readdirSync(basePath)
  .filter((name) => fs.lstatSync(path.join(basePath, name)).isDirectory())

const aliasses = dirs.reduce(
  (acc, name) => ({
    ...acc,
    [`@/${name}`]: `${path.resolve(rootPath, '.')}/${name}`,
  }),
  {},
)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliasses,
  },
})
