@echo off
cd /d D:\website
set HOME=D:\website

echo ===== 1. 设置 Git 用户信息 =====
D:\website\Git\bin\git.exe config user.email "henry.han@yslproducts.com"
D:\website\Git\bin\git.exe config user.name "Henry Han"

echo ===== 2. 添加文件 =====
D:\website\Git\bin\git.exe add .

echo ===== 3. 提交 =====
D:\website\Git\bin\git.exe commit -m "网站初版 - YSL Products"

echo ===== 4. 关联 GitHub 仓库 =====
echo 请输入你的 GitHub 用户名：
set /p GHUSER=
D:\website\Git\bin\git.exe remote add origin https://github.com/%GHUSER%/yslproducts.git
D:\website\Git\bin\git.exe branch -M main

echo ===== 5. 推送到 GitHub =====
echo 接下来会弹出 GitHub 登录窗口，请登录后推送
D:\website\Git\bin\git.exe push -u origin main

echo.
echo ===== 完成！ =====
pause
