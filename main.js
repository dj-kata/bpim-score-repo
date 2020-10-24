const cac = require('cac')
const cli = cac()
const build = require('./src/build.js')
const cbuild = require('./src/coef.js')
const update = require('./src/update.js')
const add = require('./src/add.js')

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

cli
  .command('add', 'Add metadata in each JSON files')
  .option('--t <targetFile>', 'Set target file name(sp11/sp12/dp11/dp12)')
  .action(options => {
    new add(options).exec()
  }
)

cli
  .command('updateCoef', 'Update coef in input files')
  .option('--t <targetFile>', 'Set target file name(sp11/sp12/dp11/dp12)')
  .action(options => {
    new cbuild(options).exec()
  }
)


cli.help()
cli.version("0.0.0.1")
cli.parse()
