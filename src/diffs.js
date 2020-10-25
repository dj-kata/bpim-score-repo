const fs = require('fs');

class DiffsBuild {

  constructor(options){
    this.target = options.t || "sp11"
    return this
  }

  getDate(){
    const d = new Date()
    return String(d.getFullYear()) + String("0" + d.getMonth() + 1).slice(-2) + String(d.getDate())
  }

  getFile(fileName){
    return fs.readFileSync(`./input/${this.target}.json`, 'utf-8')
  }

  getCoef(fileName){
    return fs.readFileSync(`./diffs/${this.target}.json`, 'utf-8')
  }

  writeFile(output){
    const outDir = `./input/${this.target}.json`
    fs.writeFileSync(outDir,JSON.stringify(output))
    console.log("Successfully finished! - " + outDir)
    return true;
  }

  hex(input){
    let res = "";
    for (var i = 0; i < input.length;i++){
      res += input.charCodeAt(i).toString(16);
    }
    return res;
  }

  async exec(){
    let body = []
    try{
      const diff = (diff)=>diff === "3" ? "H" : diff === "4" ? "A" : "L";
      const data = JSON.parse(await this.getFile(this.target)).reduce((groups,item)=>{
        groups[item.title + "[" + diff(item.difficulty) + "]"] = item;
        return groups;
      },{});
      const res = JSON.parse(await this.getCoef(this.target));
      let result = [];
      for(let i = 0;i < res.length; ++i){
        const diff = res[i];
        const song = data[diff["title"]];

        if(!song){
          console.log("Update Error:" + diff["title"]);
          continue;
        }
        data[diff["title"]]["coef"] = Math.round(diff["new"] * 100000) / 100000;
      }

      result = Object.keys(data).reduce((groups,item)=>{
        groups.push(data[item])
        return groups;
      },[]);

      return this.writeFile(result.sort((a,b)=>a.title.localeCompare(b.title, 'ja')))
    }catch(e){
      console.error(e)
      return false
    }
  }

}

module.exports = DiffsBuild
