# 开发指南

### 介绍

感谢你使用 ngx-vant。

以下是关于向 ngx-vant 提交反馈或代码的指南。在向 ngx-vant 提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

### Issue 规范

- 遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复
- 提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤

## 参与开发

### 本地开发

按照下面的步骤操作，即可在本地开发 Vant 组件。

```bash
# 克隆仓库
git clone git@github.com:IfFaith/ngx-vant-revive.git

# 安装依赖
cd ngx-vant && npm run bootstrap

# 进入开发模式，浏览器访问 http://localhost:4201
npm run doc
```

### 目录结构

- 仓库的组件代码位于 library/ngx-vant 下，每个组件一个文件夹
- src/app/page/basic 目录下是文档网站的代码，本地开发时可以在目录下运行 npm run doc 开启文档网站
- src/app/page/mobile 目录下是示例代码


## 提交 PR

### Pull Request 规范

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决一个问题或只添加一个功能
- 当新增组件或者修改原有组件时，记得增加或者修改测试代码，保证代码的稳定
- 在 PR 中请添加合适的描述，并关联相关的 Issue

### Pull Request 流程

1. fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码
2. 基于 fork 后仓库的 dev 分支新建一个分支，比如`feature/button_color`
3. 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 dev 分支
4. Pull Request 会在 Review 通过后被合并到主仓库
5. 等待 ngx-vant 发布版本，一般是每周一次

### 同步最新代码

提 Pull Request 前，请依照下面的流程同步主仓库的最新代码：

```bash
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
git remote add upstream https://github.com/IfFaith/ngx-vant-revive.git


# 拉取主仓库最新代码
git fetch upstream

# 切换至 dev 分支
git checkout dev

# 合并主仓库代码
git merge upstream/dev
```
