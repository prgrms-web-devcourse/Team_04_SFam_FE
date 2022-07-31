const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const buildTypeCheckCommand = () => 'npx tsc --noEmit';

module.exports = {
  '*.{ts,tsx}': [buildTypeCheckCommand, buildEslintCommand],
  '*.{ts,tsx,css}': 'prettier --write',
};
