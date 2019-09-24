// This is a template for a jsconfig.json file which will be
// generated when starting the dev server or a build.

module.exports = {
  "compilerOptions": {
    "baseUrl": '.',
    "target": "es2017",
    "module": "commonjs",
    "strict": true,
    "jsx": "preserve",
    "importHelpers": true,
    "strictNullChecks": true,
    "noImplicitThis": true,
    "strictFunctionTypes": true,
    "noEmit": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "sourceMap": true,
    "noImplicitAny": false,
    "typeRoots": [
      "./types/*",
      "./node_modules/@types"
    ],
    "types": [
      "node",
      "jest"
    ],
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost",
      "es6",
      "es2015"
    ],
    // ...
    // `paths` will be automatically generated using aliases.config.js
    // ...
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "tests/**/*.ts",
    "tests/**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ],
  "files": [
    "types/shims-vue.d.ts"
  ]
}
