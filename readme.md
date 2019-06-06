React

ln -s /Users/ppd-03020144/Projs/listener-app/ant-design-mobile-rn node_modules/@ant-mobile-taro

http://127.0.0.1:8081/index.bundle?platform=android&dev=true
adb shell input keyevent 82

## 安装

* 更新taro
* 运行 `bash scripts/rn/dep.sh`

## 开发

* listener-app下`yarn run dev:rn`
* 将`.rn_temp`中的`package.json`替换为`scripts/rn/package.json`,这是为了使用最新的reactnative

