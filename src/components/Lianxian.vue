<template>
	<div class="Lianxian">
		<div class="text">
	<div class="text1">
		  <div class="card" v-for="message in messages" :key="message.id" v-bind:title="message.title" v-bind:desc="message.desc" v-bind:txt="message.txt">
      <img class="img" :src="message.src" ><br>
      <p class="font">{{message.desc}}</p>
      <p class="txt">{{message.txt}}</p>
      <p class="txt">{{message.txt1}}</p>
    </div>
	</div>
</div>  
	</div>
</template>

<script>
	export default {
  name: 'Lianxian',
	 data(){
    return {
        messages:[
          {
            id: '1',
            title: 'yiyiyi',
            desc: '招募|松果VIP级导览带你看“毕加索: -位天才的诞生”',
            txt:'◎7月18日14:00- 7月18日15:30',
            txt1:'◎北京尤伦斯当代艺术中心',
            src: require("../components/img/20200512_180309_013.png")
          },
          {
            id: '2',
            title: 'ererer',
            desc: '音乐|他用"听”得见的画纪念穆索尔斯基诞辰180周年',
            txt:'◎7月10日19:30- 7月10日21:00',
            txt1:'◎北京郎园Vintage.處社',
            src: require("../components/img/20200512_180309_014.png")
          },
          {
            id: '3',
            title: 'sansansan',
            desc: '上海招募| AI时代，如何培养孩子的创造力',
            txt:'◎6月16日15:00 - 6月16日17:00',
            txt1:'◎北京上海之禾空间(上海市闵川区合川路2570号，科技绿洲三期2号楼1~2F)',
            src: require("../components/img/20200512_180309_015.png")
          },
          {
            id: '4',
            title: 'sisisi',
            desc: '招募|因为创造力，人类才成为动物之王',
            txt:'◎4月20日14:00 - 4月20日16:00',
            txt1:'◎北京海淀区清华大学新水利馆',
            src: require("../components/img/20200512_180309_016.png")
          },
          {
            id: '5',
            title: 'wu',
            desc: '音乐|勿忘你，勿忘我-《深夜食堂》原声铃木常吉中国巡演',
            txt:'◎4月3日19:30- 4月3日21:00',
            txt1:'◎北京国图艺术中心',
            src: require("../components/img/20200512_180309_017.png")
          },
          {
            id: '6',
            title: 'liu',
            desc: '活动|云佛山全天滑雪， -起出发!',
            txt:'◎1月26日07:30- 1月26日18:30',
            txt1:'◎北京云佛山滑雪场',
            
            src: require("../components/img/20200512_180309_018.png")
          },
          {
            id: '7',
            title: 'qi',
            desc: '活动|周末畅滑两日，河北七山深度滑雪之旅',
            txt:'◎1月11日19:30- 1月13日17:00',
            txt1:'◎涞源七山滑雪场',
            
            src: require("../components/img/20200512_180309_019.png")
          },
          {
            id: '8',
            title: 'ba',
            desc: '课程|「荼也」2019-习茶课',
            txt:'◎6月1日10:00- 6月1日12:00',
            txt1:'◎北京市丰台区方庄芳星园三区20号楼1单元1303室',
            src: require("../components/img/20200512_180309_020.png")
          },
        ]
      }
  },
}

</script>

<style scoped="scoped">
  .card .img{
    vertical-align: middle;
    max-width: 100%;
  }
  .text1{
  	width: 90%;
  	margin: 0 auto;
  }
  .font{
  	font-size: 1.2rem;
  }
  .txt{
  	font-size: 1.2rem;
  	color: gray;
  }
  .txt1{
  	font-size: 1.2rem;
  	color: gray;
  }
  .router-link-active{
	color: red;
}
</style>