const fs = require('fs').promises;
const constants = require('fs').constants;

const dirPath = './folder'

fs.access(dirPath, constants.F_OK | constants.R_OK | constants.W_OK)
  .then(() => console.log('can access'))
  .catch(() => console.log('cannot access'));

(async function(path) {
  try {
    await fs.access(path, constants.F_OK | constants.R_OK | constants.W_OK)
    console.log('can access');
  } catch (err) {
    console.log('cannot access');
  }
})(dirPath);
