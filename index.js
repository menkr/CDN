seajs.use(['jquery','underscore'], function($, _) {
	var loadScripts = function(cb) {
		$.getJSON('http://menkr.com/cdn/list?callback=?',function(data){
			if (data.stat == 'ok') {
				cb(data);
			} else {
				cb('error');
			}
		})
	}
	var create = function(li) {
		var tpl = [
			'<div class="single clearfix">',
			'<h4 class="name">',
			li.name,
			'</h4>',
			'<div class="alias">',
			'Seajs 别名：' + li.alias,
			'</div>',
			'<div class="src">',
			'直接引用：' + '<a href="' + li.src + '" target="_blank">' + li.src + '</a>',
			'</div>'
		].join('');
		return tpl;
	}
	$(document).ready(function() {
		loadScripts(function(data){
			if (data != 'error') {
				var list = data.list;
				_.each(list,function(li){
					var listDom = create(li);
					$('.libs').append(listDom)
				})
			}
		})
	});
});