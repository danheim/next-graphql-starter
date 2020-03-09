const { exec } = require('child_process');
const path = require('path');

// const installFoldersPackages = () => {
//   const folderNames = ['./', './api', './client'];
//
//   folderNames.forEach((folder) => {
//     process.chdir(path.resolve(__dirname, folder));
//
//     try {
//       exec('npm i');
//     } catch (e) {
//       console.warn(`Cannot install dependencies in ${folder}`);
//     }
//
//     console.log(`Installed success in ${folder}`);
//
//     process.chdir('../');
//   })
// }
//
// installFoldersPackages();

(() => {
  const folderNames = ['./', './api', './client'];

  folderNames.forEach((folder) => {
    process.chdir(path.resolve(__dirname, folder));

    try {
      exec('npm i');
    } catch (e) {
      console.warn(`Cannot install dependencies in ${folder}`);
    }

    console.log(`Installed success in ${folder}`);

    process.chdir('../');
  })
})()
