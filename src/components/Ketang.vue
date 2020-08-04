<template>
	<div class="Ketang">
		<div class="text">
	<div class="text1">
		  <div class="card" v-for="message in messages" :key="message.id" v-bind:title="message.title" v-bind:desc="message.desc" v-bind:txt="message.txt">
      <div class="ii"><img class="img" :src="message.src" ><br></div>
      <div class="tt">
      <p class="font">{{message.desc}}</p>
      <p class="txt">{{message.txt}}</p></div>
    </div>
	</div>
</div>  
	</div>
</template>

<script>
	export default {
  name: 'Ketang',
	 data(){
    return {
        messages:[
          {
            id: '1',
            title: 'yiyiyi',
            desc: '最适合中国家庭的整理术',
            txt:'用规划整理，帮你把小家越住越大',
            src: require("../components/img/11.jpg")
          },
          {
            id: '2',
            title: 'ererer',
            desc: '精品咖啡的魅力',
            txt:'如果你是对精品咖啡一无所知小白， 那么这是一次认识咖啡的机会',
            src: require("../components/img/22.jpg")
          },
          {
            id: '3',
            title: 'sansansan',
            desc: '看懂艺术，从学习艺术史开始',
            txt:'104期的西方艺术史精到的讲解与梳理，名家、名画、艺术流派和艺术背后的故事。',
            src: require("../components/img/33.jpg")
          },
          {
            id: '4',
            title: 'sisisi',
            desc: '最适合中国家庭的整理术',
            txt:'用规划整理，帮你把小家越住越大',
            src: require("../components/img/11.jpg")
          },
          {
            id: '5',
            title: 'wu',
            desc: '精品咖啡的魅力',
            txt:'如果你是对精品咖啡一无所知小白， 那么这是一次认识咖啡的机会',
            src: require("../components/img/22.jpg")
          },
          {
            id: '6',
            title: 'liu',
            desc: '看懂艺术，从学习艺术史开始',
            txt:'104期的西方艺术史精到的讲解与梳理，名家、名画、艺术流派和艺术背后的故事。',
            src: require("../components/img/33.jpg")
          },
          {
            id: '7',
            title: 'qi',
            desc: '最适合中国家庭的整理术',
            txt:'用规划整理，帮你把小家越住越大',
            src: require("../components/img/11.jpg")
          },
          {
            id: '8',
            title: 'ba',
            desc: '看懂艺术，从学习艺术史开始',
            txt:'104期的西方艺术史精到的讲解与梳理，名家、名画、艺术流派和艺术背后的故事。',
            src: require("../components/img/22.jpg")
          },
        ]
      }
  },
}

</script>

<style scoped="scoped">
  .card{
  	display: flex;
  }
  .card .img{
    vertical-align: middle;
    max-width: 100%;
  }
  .text1{
  	width: 90%;
  	margin: 0 auto;
  }
  .font{
  	font-size: 1.5rem;
  	color: black;
  }
  .txt{
  	font-size: 1.2rem;
  	color: gray;
  }
  .router-link-active{
	color: red;
}
.tt{
	width: 60%;
	margin-top: 2rem;
	background-color: gainsboro;
}
.img{
	margin-top: 2rem;
	/*border: 1px solid gold;*/
}
</style>