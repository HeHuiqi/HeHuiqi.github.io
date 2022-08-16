# git的一些操作
```
# 添加分支
# git branch  new_branch_name
git branch  dev
# 删除分支
git branch -d dev

#git 重命名分支
git branch -m old_name new_name

# 添加远程分支
git remote add origin https://github.com/HeHuiqi/HqLib.git
git remote -v

# 推送分支
git pull origin main
git add .
git commit -m "init"
git push --set-upstream origin main

# 添加tag
# git tag [tag_name]
git tag 0.0.1
# 推送tag
#git push origin  tag [tag_name]
git push origin tag 0.0.1

# 删除tag
git tag -d tag_name
git push origin --delete tag 0.0.1

```

