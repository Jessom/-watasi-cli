#!/usr/bin/env node
const program = require('commander')
const inquirer = require('inquirer')
const { version } = require('../package.json')
const utils = require('../utils/index')
const { promptList } = require('../config/index')
const { exec } = require('child_process')

const { green, yellow, blue, red, checkDir } = utils

program.version(version)

/**
 * create a project
 */
program
.command('create <projectName>')
.description('create a project')
.action(async (projectName, cmd) => {
  green(`👽👽👽 欢迎使用@watasi/cli，轻松构建项目模版！🎉🎉🎉`)
  // 检测是否存在同名文件夹
  await checkDir(path.join(process.pwd(), projectName), projectName)

  inquirer.prompt(promptList).then(result => {
    const { url, gitName, name, val } = result.type
    green(`======开始构建${name}======`)
    if(!url) {
      red(`暂不支持${name}...`)
      process.exit(1)
    }

    exec('git clone ' + url, function(error, stdout, stderr) {
      if(error !== null) {
        red(`clone fail, ${error}`)
        return;
      }

      fs.rename(gitName, projectName, err => {
        if(err) {
          exec(`rm -rf ` + gitName, function(err, out) {});
          red(`${projectName}项目已存在`)
        } else {
          green(`项目模版创建成！🎉🎉🎉`)
        }
      })
    })
  })
})

commander.parse(process.argv)
