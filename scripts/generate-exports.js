import { readdirSync, readFileSync, writeFileSync } from "fs"

const folders = readdirSync("./package/components", { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)

const exportsObj = {
  ".": {
    import: "./dist/index.js",
    types: "./dist/index.d.ts"
  }
}

folders.forEach(name => {
  exportsObj[`./${name}`] = {
    import: `./dist/components/${name}/index.js`,
    types: `./dist/components/${name}/index.d.ts`
  }
})

const pkg = JSON.parse(readFileSync("package.json", "utf-8"))
pkg.exports = exportsObj

writeFileSync("package.json", JSON.stringify(pkg, null, 2))
console.log("✅ Exports atualizados!")
