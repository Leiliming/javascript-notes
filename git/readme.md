| **命令名称**                         | **作用**     |
| ------------------------------------ | ------------ |
| git config --global user.name 用户名 | 设置用户签名 |
| git config --global user.email 邮箱  | 设置用户签名 |
| git init                             | 初始化本地库 |
| git add 文件名                       | 添加到暂存区 |
| git commit -m "日志信息" 文件名      | 提交到本地库 |
| git reflog                           | 查看历史记录 |
| git log                              | 查看详细日志 |
| git reset --hard 版本号              | 版本穿梭     |

## 一、设置用户名

git config --global user.name 用户名

git config --global user.email 邮箱

- 这个名字只是自己本地的用户签名，git也不会去检查，跟github的登录用户没有半毛钱关系
- 只是为了看到代码是谁提交的



## 二、初始化本地库

git init

git status

$ git status
On branch master 在 master分支

No commits yet  还没提交，目前还没有东西需要提交，当前还没有提交过任何东西

nothing to commit (create/copy files and use "git add" to track)  无需提交（创建/复制文件并使用“git add”跟踪）

## 三、提交本地库

git add 文件名

**git** **commit** -m “日志信息" 文件名

## 四、版本穿梭

- 查看版本号 git reflog

版本传说

git reset --hard 版本号

## 五、分支的操作

| **命令名称**        | **作用**                     |
| ------------------- | ---------------------------- |
| git branch          | 创建分支                     |
| git branch -v       | 查看分支                     |
| git checkout 分支名 | 切换分支                     |
| git merge 分支名    | 把指定的分支合并到当前分支上 |

