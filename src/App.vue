<template>
  <div id="app">
    
    <router-view></router-view>
    <div id="foot">
    	<router-link to="/home" tag="a"></router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Foot from "./components/footer.vue";
import lisahead from "./components/lisa-head.vue";
Vue.component("foot",Foot);
Vue.component("Lisahead",lisahead);
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
*{
	padding:0;
	margin:0;
}

html,body{
	width:100%;
	height:100%;
	background:#eee;
}

#app{
	width:100%;
	height:100%;
}

#foot{

	position: fixed;
    bottom: 0;
    width: 100%;
    padding-top: 14%;
    
	a{
		position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
		background-image: url(http://m.1c10.cn/templates/default/images/app_down.jpg?v=1);
		background-repeat: no-repeat;
		background-position: 0 0;
		background-size: 100% 100%;
	}
}
</style>
