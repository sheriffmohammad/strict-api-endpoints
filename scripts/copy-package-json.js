const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const packageJsonPath = path.join(rootDir, 'package.json');
const readmePath = path.join(rootDir, 'readme.md');
const buildDir = path.join(rootDir, 'build');

// Ensure the build directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
}

// Copy package.json to the build directory
fs.copyFileSync(packageJsonPath, path.join(buildDir, 'package.json'));
console.log('package.json copied to build folder');
fs.copyFileSync(readmePath, path.join(buildDir, 'readme.md'));
console.log('readme.md copied to build folder');
