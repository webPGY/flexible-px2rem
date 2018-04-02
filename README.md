# vue2

# index.html head 添加如下配置
name="apple-mobile-web-app-capable"，content="yes"的meta标签
name="apple-touch-fullscreen"，content="yes"的meta标签
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script> 
# 说明：
taobao移动端适配方案，原理是根据不同的屏幕比例动态给html设置字体大小，设置属性dpr,以及
scale,根据不同屏幕尺寸动态创建不同的适口标签和缩放比例，达到适配效果

#px2rem
自动将px转成rem,样式直接设置成px
npm install px2rem-loader --save-dev
build/utils.js中添加如下配置：
const px2remLoder = {
  loader: 'px2rem-loader',
  options: {
  remUnit: 75
   }
}

generateLoaders中const loaders改为：
const loaders = options.usePostCSS ? [cssLoader, postcssLoader, px2remLoder] : [cssLoader, px2remLoder]
