const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  output: 'export',
})

module.exports = {
  ...withNextra(),
  basePath: '/meethackos.github.io',     // required for GitHub Pages!
  assetPrefix: '/meethackos.github.io',
  trailingSlash: true,             // super important!
}
