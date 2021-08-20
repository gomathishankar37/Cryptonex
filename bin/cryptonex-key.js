const program = require('commander');
const key = require('../commands/key');

program
  .command('set')
  .description('Set API Key Get from https://nomics.com')
  .action(key.set);

program
  .command('show')
  .description('Show API Key')
  .action(key.show);

program
  .command('del')
  .description('Delete your API Key')
  .action(key.remove);

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}