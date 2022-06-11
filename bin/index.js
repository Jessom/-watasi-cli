#!/usr/bin/env node
const program = require('commander')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ora = require('ora')
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
  green(`👏 👏 👏 欢迎使用@watasi/cli，轻松构建项目模版！`)
  // 检测是否存在同名文件夹
  await checkDir(path.join(process.cwd(), projectName), projectName)

  inquirer.prompt(promptList).then(result => {
    const { url, gitName, name, val } = result.type
    // green(`======开始构建${name}======`)
    const spinner = ora(`开始构建${name}`).start()
    if(!url) {
      red(`暂不支持${name}...`)
      process.exit(1)
    }

    exec('git clone ' + url, function(error, stdout, stderr) {
      if(error !== null) {
        spinner.stop()
        red(`clone fail, ${error}`)
        return;
      }

      fs.rename(gitName, projectName, err => {
        if(err) {
          exec(`rm -rf ` + gitName, function(err, out) {});
          spinner.stop()
          red(`${projectName}项目已存在`)
        } else {
          spinner.stop()
          green(`√ 项目模版创建成！🎉🎉🎉`)
        }
      })
    })
  })
})

program.parse(process.argv)
