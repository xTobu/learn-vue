import Vue from 'vue';
import VueRouter from 'vue-router';

//slot
import slotIndex from '../pages/slot/Index'
import slotPost from '../pages/slot/Post';
import slotAbout from '../pages/slot/About';
import slotCount from '../pages/slot/Count';
//https://ithelp.ithome.com.tw/articles/10185164

import Index from '../pages/Index'
// init

Vue.use(VueRouter);
export default new VueRouter({
	//https://router.vuejs.org/zh-cn/api/options.html
	// 使用 HTML 5 模式
	//mode: 'history',
	// base: __dirname,
	// routre 表
	
	routes: [

		{
			path: '/',
			name: 'Index',
			component: Index,
		},

		//slot
		{
			path: '/slot/',
			name: 'slotIndex',
			component: slotIndex,
		},
		{
			path: '/slot/about/:id',
			name: 'slotAbout',
			component: slotAbout,
			children: [
				{
					// 当 /about/:id/post 匹配成功，
					// Post 会被渲染在 about 的 <router-view> 中
					path: 'post',
					component: slotPost,
				},
				
			],
		},
		// about router 轉址
		{ path: '/slot/about', redirect: '/slot/about/0' },
		{
			path: '/slot/post/',
			name: 'slotPost',
			component: slotPost,
			
		},
		{
			path: '/slot/count',
			name: 'slotCount',
			component: slotCount,
		},
	
		// router 轉址
		{ path: '/*', redirect: '/' },
	],
});
