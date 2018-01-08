<template>
  <div class="homecontainer">
		<div class="main">
			<transition name="hide">
			 	<keep-alive>
			  	<router-view></router-view>
				</keep-alive>	
		</transition>
		</div>
  	<div class="tab">
  		<div class="tab-item">
  			  <router-link to="/homepage">
  			  	<span class="homepage"></span>
  			  	<p>首页</p>
  			  </router-link>
  		</div>
  		<div class="tab-item">
  			  <router-link to="/findgoods">
  			  	<span class="findgoods"></span>
  			  	<p>找货</p>
  			  </router-link>
  		</div>
  		<!--<div class="tab-item">
  			  <router-link to="/activity">
  			  	<span class="activity"></span>
  			  	<p>活动</p>	
  			  </router-link>
  		</div>-->
  		<div class="tab-item">
  			  <router-link to="/message">
  			  	<span class="message"></span>
  			  	<p>消息</p>	
  			  </router-link>
  		</div>
  		<div class="tab-item">
  			  <router-link to="/shoppingcart">
  			  	<span class="shoppingcart"></span>
  			  	<p>购物车</p>
  			  </router-link>
  		</div>
  		<div class="tab-item">
  			  <router-link to="/my">
  			  	<span class="my"></span>
  			  	<p>我的</p>
  			  </router-link>
  		</div>
  	</div>
  </div>
</template>

<script>
	
export default {
  data () {
    return {
    	
		}    
  },
  
  created() {
  	
  },
  
  methods: {

  },
  
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.homecontainer {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		
	}
	.main {
		position: fixed;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.tab {
		position: fixed;
		width: 100%;
		bottom: 0;
		right: 0;
		display: flex;
		background:#009BE4;
		
	}
	
	.tab-item {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 96px;
		text-align: center;
	}
	
	.tab-item p {
		font-size: 24px;
		color: rgba(255,255,255,0.6);
	}
	
	.tab-item > a {
		color: #FFFFFF;
	}
	
	.tab-item > a >span {
		display: block;
		margin: 0 auto;
		width: 50px;
		height: 50px;
		transition: 0.5s;
	}
	
	.homepage {
		background: url(../../assets/img/index/home01.png) no-repeat;
		background-size: cover;
	}
	
	.findgoods {
		background: url(../../assets/img/index/goods01.png) no-repeat;
		background-size: cover;
	}
	
	.activity {
		background: url(../../assets/img/index/activity01.png) no-repeat;
		background-size: cover;
	}
	
	.message {
		background: url(../../assets/img/index/message01.png) no-repeat;
		background-size: cover;
	}
	
	.shoppingcart {
		background: url(../../assets/img/index/shoppcart01.png) no-repeat;
		background-size: cover;
	}
	
	.my {
		background: url(../../assets/img/index/my01.png) no-repeat;
		background-size: cover;
	}
	
	.tab-item .active p{
		color: #FFFFFF;
	}
	
	.tab-item .active span{
		transform: translateY(-6px);
	}
	
	.active .homepage {
		background: url(../../assets/img/index/home.png) no-repeat;
		background-size: cover;
	}
	
	.active .findgoods {
		background: url(../../assets/img/index/goods.png) no-repeat;
		background-size: cover;
	}
	
	.active .activity {
		background: url(../../assets/img/index/activity.png) no-repeat;
		background-size: cover;
	}
	
	.active .message {
		background: url(../../assets/img/index/message.png) no-repeat;
		background-size: cover;
	}
	
	.active .shoppingcart {
		background: url(../../assets/img/index/shoppcart.png) no-repeat;
		background-size: cover;
	}
	
	.active .my {
		background: url(../../assets/img/index/my.png) no-repeat;
		background-size: cover;
	}
	
	.hide-enter-active, .hide-leave-active {
  	transition: .5s;
  	
	}
	.hide-enter, .hide-leave-to {
	  opacity: 0;
	  transform: translateY(-10%);
	}
	
</style>
