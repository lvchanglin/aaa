import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/home.vue";
import Login from "./components/login.vue";
import Detail from "./components/detail.vue";
import Position from "./components/position.vue";
import Logina from "./components/loginaaa.vue";
import Loginb from "./components/loginbbb.vue";
import Regist from "./components/regist.vue";
import List from "./components/list.vue";
import LoginAfter from "./components/loginafter.vue";
import Cart from "./components/cart.vue";



Vue.use(VueRouter);

const routes = [
	{ path: '/', redirect: '/home' },
	{ path: '/login', redirect: '/login/aaa' },
	{ path:'/home',component:Home },
	{ path:'/login',component:Login,
		children:[
	  		{
	  			path:"aaa",
	  			component:Logina
	  		},
	  		{
	  			path:"bbb",
	  			component:Loginb
	  		}
  		]
	},
	{ path:'/detail/:lisaId',component:Detail },
	{ path:'/list/:ename',component:List },
	{ path:'/position',component:Position },
	{ path:'/regist',component:Regist },
	{ path:'/loginafter',component:LoginAfter },
	{ path:'/cart',component:Cart }
]

const router = new VueRouter({
	routes
})

export default router;