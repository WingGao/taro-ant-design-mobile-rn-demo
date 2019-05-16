const path = require('path');
const blacklist = require("metro-config/src/defaults/blacklist");
let moduleBlacklist = [
  /ant-design-mobile-rn\/node_modules\/react-native\/.*/,
];

const antTaroPath = path.resolve(__dirname, '..', 'ant-design-mobile-rn/components/')
const extraNodeModules = {
  '@ant-mobile-taro': antTaroPath,
};
const watchFolders = [
  // antTaroPath
  path.resolve(__dirname,'ant-design-mobile-rn')
];
console.log('loaded')
module.exports = {
  resolver: {
    // extraNodeModules,
    blacklistRE: blacklist(moduleBlacklist)
  },
  transformer:{
    enableBabelRCLookup:false,
  },
  server: {
    // port: 8082,
  },

  watchFolders

};
