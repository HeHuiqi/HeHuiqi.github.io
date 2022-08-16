# git 稀疏检出

从 1.7.0 开始，Git 引入 sparse checkout（稀疏检出） 机制，稀疏检出机制允许只检出指定目录或者文件，这在大型 Git 仓库中，将大幅度缩短 Git 执行命令的时间。要想只检出指定的目录或文件，需要在 .git/info/sparse-checkout 文件中指定出目录或文件的路径，下面将以一个具体例子介绍 如何使用 Git 的 sparse checkout 


# 配置稀疏检出
`git config core.sparseCheckout true`

# 查看配置

`git config --list`

# 指定检出规则
这里指的是仓库下document目录下的所有文件，相当于检出document目录，规则可以指定多条和.gitigore的匹配模式相同

`echo "document/*" >> .git/info/sparse-checkout`

# 添加远程仓库地址
```
git add git remote add origin https://github.com/..../myproject.git
```
# 根据稀疏检出规则拉取远程仓库的指定文件或目录

`git pull origin master`

# 关闭稀疏检出,删除规则配置文件
```
git config core.sparseCheckout true
rm git/info/sparse-checkout
```

# 所有操作，注意替换为你的远程仓库地址和规则目录或文件
```
mkdir myrepo
cd myrepo
git init
git config core.sparseCheckout true
echo "document/*" >> .git/info/sparse-checkout
git add git remote add origin https://github.com/..../myproject.git
git pull origin master

```

 参考：https://segmentfault.com/a/1190000006703926








