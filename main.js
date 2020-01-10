const cac = require('cac')
const cli = cac()
const build = require('./src/build.js')
const update = require('./src/update.js')

cli
  .command('build', 'Build a JSON file from each files')
  .option('--n <filename>', 'Set output file name')
  .option('--o <outputVersion>', '(option)Set version for output file')
  .option('--r <requireVersion>', '(option)Set requireVersion for output file')
  .action(options => {
    new build(options).exec()
  }
)

cli
  .command('update', 'Update metadata in each JSON files')
  .option('--t <targetFile>', 'Set target file name(sp11/sp12/dp11/dp12)')
  .option('--m <editMode>', '(option)Set edit mode.(0:WR 1:Kaiden-Average)')
  .action(options => {
    new update(options).exec()
  }
)

cli.help()
cli.version("0.0.0.1")
cli.parse()
