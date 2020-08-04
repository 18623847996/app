import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Wenzhang from '@/components/Wenzhang'
import Huodong from '@/components/Huodong'
import Lianxian from '@/components/Lianxian'
import Ketang from '@/components/Ketang'
import Tuijian from '@/components/Tuijian'
import Tone from '@/components/Tone'
Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'HelloWorld',
			component: HelloWorld,
			children: [{
					path: 'Wenzhang',
					component: Wenzhang,
				},
				{
					path: '/HelloWorld/Huodong',
					component: Huodong
				},
				{
					path: '/HelloWorld/Lianxian',
					component: Lianxian
				},
				{
					path: '/HelloWorld/Ketang',
					component: Ketang
				},
				{
					path: '/HelloWorld/Tuijian',
					component: Tuijian,
					children: [{
						path: '/HelloWorld/Tuijian/Tone',
						component: Tone,
					}]
				}
			],
			redirect: '/Wenzhang'
		}

	]
})