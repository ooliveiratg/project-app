const { withNativeWind } = require("nativewind/metro");
 
// ... existing Nx configuration
 
module.exports = withNxMetro(mergeConfig(defaultConfig, customConfig), {
  // ... existing Nx config
}).then((config) => withNativeWind(config, { input: "./global.css" }));