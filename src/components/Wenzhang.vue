<template>
	<div class="Wengzhang">
		<div class="text">
	<div class="text1">
		  <div class="card" v-for="message in messages" :key="message.id" v-bind:title="message.title" v-bind:desc="message.desc" v-bind:txt="message.txt">
      <img class="img" :src="message.src" ><br>
      <p class="font">{{message.desc}}</p>
      <p class="txt">{{message.txt}}</p>
    </div>
	</div>
</div>  
	</div>
</template>

<script>
	export default {
  name: 'Huodong',
	 data(){
    return {
        messages:[
          {
            id: '1',
            title: 'yiyiyi',
            desc: '招募|读剧本的下午茶，一起追念加缪逝世 ',
            txt:'60周年',
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
          {
            id: '7',
            title: 'qi',
            desc: '招募170组家庭|快来“科学时光趴”感受奇幻的动物世界吧!',
            src: require("../components/img/20200512_180309_007.png")
          },
          {
            id: '8',
            title: 'ba',
            desc: '妙会MIAO MARKET | 2019年的最后一场市集',
            src: require("../components/img/20200512_180309_008.png")
          },
        ]
      }
  },
}
</script>

<style scoped="scoped">
	.card{
    /*height: 300px;*/
   /*border: 1px solid goldenrod;*/
    /*background-color: #ffffff;*/
    /*padding: auto;
    margin: auto;*/
    
  }
  .card .img{
    /*height: 250px;*/
    /*height: auto;*/
    vertical-align: middle;
    max-width: 100%;
  }
  .font{
  	font-size: 1.8rem;
  }
  .txt{
  	font-size: 1.8rem;
  	color: brown;
  }
  .router-link-active{
	color: red;
}
 .text1{
  	width: 90%;
  	margin: 0 auto;
  }
</style>