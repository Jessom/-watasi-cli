const chalk = require('chalk')

const colors = ['green', 'blue', 'yellow', 'red']

const utils = {}

colors.forEach(color => {
  utils[color] = function(text, isColor=true) {
    return isColor ? console.log(chalk[color](text)) : chalk[color](text)
  }
})

module.exports = utils
