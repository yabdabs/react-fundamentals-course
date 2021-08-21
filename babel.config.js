// Support for the experimental syntax 'jsx' isn't currently enabled

module.exports = function (api) {
    api.cache(true);
  
    const presets = ["babel-preset-react-app"];
    const plugins = [];
  
    return {
      presets,
      plugins
    };
  }