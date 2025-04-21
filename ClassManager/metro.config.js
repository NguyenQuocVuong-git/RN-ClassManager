const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')
const { mergeConfig } = require('@react-native/metro-config')

const config = getDefaultConfig(__dirname)
module.exports = mergeConfig(
  withNativeWind(config, { input: './src/styles/global.css' })
)
