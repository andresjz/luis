// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  }
})
