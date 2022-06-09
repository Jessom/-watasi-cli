const chalk = require('chalk')
const fs = require('fs')

const colors = ['green', 'blue', 'yellow', 'red']

const utils = {}

colors.forEach(color => {
  utils[color] = function(text, isColor=true) {
    return isColor ? console.log(chalk[color](text)) : chalk[color](text)
  }
})

utils.checkDir = (dir, name) => {
  let isExists = fs.existsSync(dir)
  if(isExists) {
    utils.red(`目录中已存在 ${name} 项目，请尝试使用其他名称。`)
    process.exit(1)
  }
}

module.exports = utils
