module.exports = function(api) {
  module.exports = {
    plugins: ['nativewind/babel', { mode: 'transformOnly' }],
  }
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
