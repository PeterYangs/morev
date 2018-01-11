import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import homepage from '@/components/homepage/homepage'
import morebrand from '@/components/homepage/morebrand'
import brand from '@/components/homepage/brand'
import productdateils from '@/components/homepage/productdateils'


import activity from '@/components/activity/activity'
import shoppingcart from '@/components/shoppingcart/shoppingcart'

import my from '@/components/my/my'
import collect from '@/components/my/collect'
import attention from '@/components/my/attention'
import enquiry from '@/components/my/enquiry'
import indent from '@/components/my/indent' 
import info from '@/components/my/info'
import myenquiry from '@/components/my/myenquiry'
import lineItem from '@/components/my/lineItem'


import findgoods from '@/components/findgoods/findgoods'
import goodsDetail from '@/components/findgoods/goodsDetail'

import message from '@/components/message/message'
import dialogue from '@/components/message/dialogue'
import sampling from '@/components/message/sampling'



import signin from '@/components/login/signin'
import register from '@/components/login/register'
import sellereg from '@/components/login/sellereg'
import phonelogin from '@/components/login/phonelogin'
import forget from '@/components/login/forget'
import sellerend from '@/components/login/sellerend'




Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: home,
      children: [
      	{
      		path: '/', 
      		redirect: '/homepage'
      	},
		{
			path: '/my',
			component: my
		},
      	{
      		path: '/homepage',
      		component: homepage,
      	},
      	{
      		path: '/findgoods',
      		component: findgoods 
      	},
      	{
      		path: '/activity',
      		component: activity
      	},
      	{
      		path: '/shoppingcart',
      		component: shoppingcart
      	},
      	{
      		path: '/message',
      		component: message
      	},
      ]
    },
    {
    	path: '/signin',
    	component: signin
    },
    {
    	path: '/register',
    	component: register
    },
    {
    	path: '/seller',
    	component: sellereg
    },
    {
    	path: '/phonelogin',
    	component: phonelogin
    },
     {
    	path: '/forget',
    	component: forget
    },
    {
    	path: '/sellerend',
    	component: sellerend
    },
    {
    	path: '/collect',
    	component: collect
    },
    {
    	path: '/attention',
    	component: attention
    },
    {
    	path: '/enquiry',
    	component: enquiry
    },
    {
    	path: '/morebrand',
    	component: morebrand
    },
    {
    	path: '/brand',
    	component: brand
    },
    {
    	path: '/productdateils',
    	component: productdateils
    },
    {
    	path: '/indent/:tab',
    	component: indent
    },
    {
    	path: '/info',
    	component: info
    },
    {
    	path: '/myenquiry',
    	component: myenquiry
    },
    {
    	path: '/goodsDetail',
    	component: goodsDetail
    },
    {
    	path:'/dialogue',
    	component: dialogue
    },
    {
    	path:'/sampling',
    	component: sampling
    },
	  {
		  path:'/lineItem/:type',
		  component: lineItem
	  },
  ]
})
