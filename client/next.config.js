const path = require('path')

require('dotenv').config({
  path: path.join(__dirname, '..', '.env'),
})

module.exports = {
  webpack: (config) => {
    // aliases
    Object.assign(config.resolve.alias, {
      '@': path.join(__dirname, 'src/'),
    })
    return config
  },

  experimental: {
    scss: true,
  },
}
