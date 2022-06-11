module.exports = {
  promptList: [{
    type: 'list',
    message: '请选择模版类型：',
    name: 'type',
    choices: [{
      name: 'uniapp2(基于uView2.x)',
      value: {
        url: 'git@github.com:Jessom/uniuView.git',
        gitName: 'uniuView',
        name: 'uniapp2(基于uView2.x)',
        val: '基于uView2.x创建的uniapp模版'
      }
    }, {
      name: 'gameBox(游戏盒模版)',
      value: {
        url: 'git@github.com:Jessom/gameBox.git',
        gitName: 'uniuView',
        name: 'gameBox(游戏盒模版)',
        val: '快速开发游戏盒'
      }
    }]
  }]
}
