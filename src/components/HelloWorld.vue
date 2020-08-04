<template>
	<div class="hello">

		<!--<div>-->
		<div class="header-img">
			<img src="../components/img/2020-05-14_161502.png" />
			<div class="con">
				<div class="con1">
					<ul>
						<li>
							<p>|壹|</p>
							<p>路内x戴锦华x梁</p>
							<p>文道: 21世纪走过</p>
							<p>五分之一，如何回</p>
							<p>看那段千年之末的</p>
							<p>现实与时间?</p>
						</li>
						<li>
							<p>|贰|</p>
							<p>活动预告|宇宙巡</p>
							<p>游2020- UCCA</p>
							<p>Kids艺术嘉年华</p>
						</li>
						<li>
							<p>|叁|</p>
							<p>国博新展|喜欢</p>
							<p>《红楼梦》的你，</p>
							<p>要不要来看国博这</p>
							<p>个展?</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!--</div>-->

		<div id="fixedMenu" class="hdr">
			<div class="header">
				<div class="header-left">
					<img src="../components/img/20200514170635.png" />
				</div>
				<div class="header-right">
					<ul>
						<router-link to="/Wenzhang">
							<li>文章</li>
						</router-link>
						<router-link to="/HelloWorld/Huodong">
							<li>活动</li>
						</router-link>
						<router-link to="/HelloWorld/Lianxian">
							<li>连线</li>
						</router-link>
						<router-link to="/HelloWorld/Ketang">
							<li>课堂</li>
						</router-link>
						<router-link to="/HelloWorld/Tuijian">
							<li>推荐</li>
						</router-link>
					</ul>
				</div>
			</div>

		</div>
		<router-view></router-view>
		<!--<div class="text">
			<div class="text1">
				<div class="card" v-for="message in messages" :key="message.id" v-bind:title="message.title" v-bind:desc="message.desc" v-bind:txt="message.txt">
					<img class="img" :src="message.src"><br>
					<p class="font">{{message.desc}}</p>
					<p class="txt">{{message.txt}}</p>
				</div>
			</div>
		</div>-->

	</div>

</template>
<script type="text/javascript" src="http://www.coding123.net/js/jquery.js"></script>
<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				messages: [{
						id: '1',
						title: 'yiyiyi',
						desc: '招募|读剧本的下午茶，一起追念加缪逝世 ',
						txt: '60周年',
						src: require("../components/img/20200512_180309_000 (2).png")
					},
					{
						id: '2',
						title: 'ererer',
						desc: '感怀新旧交织，且听四季更替| LUMIERE SINGERS A CAPPELL A CONCERT',
						src: require("../components/img/20200512_180309_000 (3).png")
					},
					{
						id: '3',
						title: 'sansansan',
						desc: '路内x戴锦华x梁文道:。21世纪走过五分之如何回看那段千年之末的现实与时间?',
						src: require("../components/img/20200512_180309_003.png")
					},
					{
						id: '4',
						title: 'sisisi',
						desc: '艺术工坊|木刻年画',
						src: require("../components/img/20200512_180309_000 (4).png")
					},
					{
						id: '5',
						title: 'wu',
						desc: '活动预告|宇审巡游20201小UCCA Kids艺术嘉年华心',
						src: require("../components/img/20200512_180309_000 (5).png")
					},
					{
						id: '6',
						title: 'liu',
						desc: 'OCAT研究中心|展览“星星1979"',
						src: require("../components/img/20200512_180309_000 (6).png")
					},
					
				]
			}
		},
	}
	$(function() {
		var ie6 = /msie 6/i.test(navigator.userAgent),
			dv = $('#fixedMenu'),
			st;
		dv.attr('otop', dv.offset().top); //存储原来的距离顶部的距离  
		$(window).scroll(function() {
			st = Math.max(document.body.scrollTop || document.documentElement.scrollTop);
			if(st >= parseInt(dv.attr('otop'))) {
				if(ie6) { //IE6不支持fixed属性，所以只能靠设置position为absolute和top实现此效果  
					dv.css({
						position: 'absolute',
						top: st
					});
				} else if(dv.css('position') != 'fixed') dv.css({
					'position': 'fixed',
					top: 0
				});
			} else if(dv.css('position') != 'static') dv.css({
				'position': 'static'
			});
		});
	});
</script>
<style scoped>
	* {
		margin: 0;
		padding: 0;
		list-style-type: none;
		text-decoration: none;
	}
	
	a {
		color: orangered;
	}
	
	.header-img {
		width: 100%;
		position: relative;
	}
	
	.header-img>img {
		width: 100%;
	}
	
	.hdr {
		width: 100%;
		height: 4.6rem;
		/*border: 1px solid olivedrab;*/
		background-color: white;
	}
	
	.header {
		display: flex;
		justify-content: space-between;
		width: 80%;
		margin: 0 auto;
		height: 4rem;
		/*border: 1px solid red;*/
	}
	
	.header-left {
		width: 20%;
	}
	
	.header-right {
		width: 50%;
		line-height: 4.6rem;
	}
	
	.header-right>ul {
		display: flex;
		justify-content: space-between;
	}
	
	.con {
		position: absolute;
		top: 13rem;
	}
	
	.con1>ul {
		display: flex;
	}
	
	.con1>ul>li {
		color: gray;
		font-size: 0.5rem;
		text-align: center;
		padding-left: 3rem;
	}
	
	.card .img {
		vertical-align: middle;
		max-width: 100%;
	}
	
	.font {
		font-size: 1.8rem;
	}
	
	.txt {
		font-size: 1.8rem;
		color: brown;
	}
	
	.router-link-active {
		color: gray;
	}
	 .text1{
  	width: 90%;
  	margin: 0 auto;
  }
</style>