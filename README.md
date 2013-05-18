[Menkr CDN](http://cdn.menkr.com/index.html)
================

## 可信赖的 Seajs CDN

> Menkr 采用 shim 插件加载所有CDN脚本，因此无论你是否使用Seajs，都可以从中受益。模块化加载与又拍云CDN的完美组合，现在开始迅即加载体验。

HOW TO
================

## 如果你使用 Seajs 作为组件加载方式：

```html

<!-- 引入menkr cdn 提供的seajs源 和 配置文件 -->
<script src="http://cdn.menkr.com/sea.js" data-config="config/config.js" charset="utf-8"></script>
<script>
  // 使用别名(alias)加载组件
  seajs.use(['jquery', 'moment'], function($, moment) {
    $(document).ready(function() {
  	console.log('Menkr CDN 上线时间距离现在：')
  	console.log(moment("20130329", "YYYYMMDD").fromNow())
    });
  });
</script>
```

如果你还没有开始使用 Seajs 加载脚本，访问Menkr CDN的网站以获取单个组件的原始url，直接引入页面即可。

TO DO
================

## 成为任何人都能上传的js CDN

> 我们正在建立一套基于Github repo的同步系统，这套系统服务可以将这个repo 所收到的合法 pull request 组件，在merge后同步到menkr在又拍云搭建的cdn当中，给所有人使用。