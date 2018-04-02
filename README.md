# vue2

> the vue2.0

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


#index.html head 配置
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="yes" name="apple-touch-fullscreen">
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script> 
# taobao移动端适配方案，原理是根据不同的屏幕比例动态给html设置字体大小，设置属性dpr,以及
# scale,根据不同屏幕尺寸动态创建不同的适口标签和缩放比例，达到适配效果

#px2rem
#自动将px转成rem,样式直接设置成px
npm install px2rem-loader --save-dev
#build/utils.js中添加如下配置：
#  const px2remLoder = {
#    loader: 'px2rem-loader',
#   options: {
#      remUnit: 75
#    }
#  }

#generateLoaders中const loaders改为：
const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoder] : [cssLoader, px2remLoder]
