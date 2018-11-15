var nav=(node)=>{
	var navContent = `<div>
	<a href="/list.html">显示所有记录</a>&nbsp;&nbsp;
	<a href="/lookup.html">查找</a>
	</div>`

	var content = baidu.template(navContent);
	node.html(content)
}

