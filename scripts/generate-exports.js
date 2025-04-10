import { readdirSync, readFileSync, writeFileSync } from "fs"

const basePath = "./dist/package"
const componentBase = `${basePath}/components`

const folders = readdirSync("package/components", { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

const exportsObj = {
  ".": {
    import: `${basePath}/index.js`,
    types: `${basePath}/index.d.ts`
  }
}

folders.forEach(name => {
  exportsObj[`./${name}`] = {
    import: `${componentBase}/${name}/index.js`,
    types: `${componentBase}/${name}/index.d.ts`
  }
})

const pkg = JSON.parse(readFileSync("package.json", "utf-8"))
pkg.exports = exportsObj

writeFileSync("package.json", JSON.stringify(pkg, null, 2))
console.log("✅ Exports atualizados!")
