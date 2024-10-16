const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/kikk-derive-vue/' // Remplace "nom-du-projet" par le nom exact de ton dépôt GitHub
    : '/',
    css: { sourceMap: true },

})
