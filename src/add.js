const fs = require('fs');
const rl = require('readline')

class Build {

  constructor(options){
    this.target = options.t || "sp11"
    this.mode = options.m || 0
    return this
  }

  getFile(){
    return fs.readFileSync(`./input/${this.target}.json`, 'utf-8')
  }

  writeFile(output){
    const outDir = `./input/${this.target}.json`
    fs.writeFileSync(outDir,JSON.stringify(output))
    console.log("Successfully finished! - " + outDir)
    return true;
  }

  readInput(text) {
    const readline = rl.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve, reject) => {
      readline.question(text, (answer) => {
        resolve(answer);
        readline.close();
      });
    });
  }

  async exec(){
    let updated = []
    try{

    }catch(e){
      console.error(e)
      return false
    }
  }

}

module.exports = Build
