const path = require('path')
const fs = require('fs')
const prettier = require('prettier')

const aliases = {
  '@': '.',
  '@src': 'src',
  '@api': 'src/api',
  '@components': 'src/components',
  '@models': 'src/models',
  '@views': 'src/router/views',
  '@layouts': 'src/router/layouts',
  '@assets': 'src/assets',
  '@utils': 'src/utils',
  '@types': 'types',
  '@design': 'src/design/index.sass'
}

module.exports = {
  webpack: {},
  jest: {},
  tsconfig: {}
}

for (const alias in aliases) {
  const aliasTo = aliases[alias]
  module.exports.jest[`^${alias}/(.*)$`] = `<rootDir>/${aliasTo}/$1`
  module.exports.webpack[alias] = resolveSrc(aliasTo)
  module.exports.tsconfig[alias + '/*'] = [aliasTo + '/*']
  module.exports.tsconfig[alias] = aliasTo.includes('/index.')
    ? [aliasTo]
    : [
      aliasTo + '/index.ts',
      aliasTo + '/index.json',
      aliasTo + '/index.vue',
      aliasTo + '/index.sass',
    ]
}

const jsconfigTemplate = require('./tsconfig.template') || {}
const jsconfigPath = path.resolve(__dirname, 'tsconfig.json')

fs.writeFileSync(
  jsconfigPath,
  prettier.format(
    JSON.stringify({
      ...jsconfigTemplate,
      compilerOptions: {
        ...(jsconfigTemplate.compilerOptions || {}),
        paths: module.exports.tsconfig,
      },
    }),
    {
      parser: 'json',
    }
  ),
  (error) => {
    console.log('Error')
    console.log(error)
    if (error) {
      console.error(
        'Error while creating tsconfig.json from aliases.config.js.'
      )
      throw error
    }
  }
)

function resolveSrc(_path) {
  return path.resolve(__dirname, _path)
}
