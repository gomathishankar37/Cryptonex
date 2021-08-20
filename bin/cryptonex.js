#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .command('key', 'Manage Your API Key at https://nomics.com')
  .command('check', 'Check Current Coin Info')
  .parse(process.argv);