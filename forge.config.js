module.exports = {
  packagerConfig: {
    icon: 'view/favicon.ico' // no file extension required
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-pkg',
      config: {
        install: `%USERPROFILE%/AppData/Local/DabloonClicker`
      }
    },
    {
      name: '@electron-forge/maker-zip'
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        authors: 'Dabloon Clicker',
        description: 'A small game'
      }
    },
  ],
};
