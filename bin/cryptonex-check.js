const program = require('commander');
const check = require('../commands/check');

program
  .command('price')
  .description('Check price of coins')
  .option(
    '--coin <type>',
    'Add a Token/Coin 🪙',
    'BTC,ETH,MATIC,ADA,XRP'
  )
    .option('--cur <currency>',
        'Change Your currency 💰',
        'INR')
  .action(cmd => check.price(cmd));

program.parse(process.argv);

// If no args, output help
if (!process.argv[2]) {
  program.outputHelp();
}