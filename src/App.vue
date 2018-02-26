<template>
  <div id="app">
  	<keep-alive>
  		<transition name="show">	
    		<router-view/>
  		</transition>
    </keep-alive>	
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
	height: 100%;
	overflow: hidden;
}
	
.show-enter-active, .show-leave-active {
	transition: 0.5s;
}

.show-enter {
	opacity: 0;
	transform: scale(0.95,0.95);
}


</style>
