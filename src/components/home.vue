<template>
	<div id="home">		
		<Lisahead>
			<span slot="left" @click="handleaa">桐乡<i class="iconfont icon-paixu" ></i></span>
			<h3 slot="h3">开心网</h3>
			<span slot="right">
				<router-link to="/login" tag="div"><i class="iconfont icon-home1"></i>我的</router-link>
			</span>
		</Lisahead>
		<section class="search">
			<div class="box-search"><router-link to="home" tag="a">
			<i class="iconfont icon-sousuo"></i>输入商家名字/商品名称获取优惠</router-link></div>
		</section>
		<section class="w-banner-swipe">
			<div class="slide">
				<swipe class="my-swipe">
				  <swipe-item class="slide1">
				  	<img :src="aa" />
				  </swipe-item>
				  <swipe-item class="slide2">
				  	<img :src="dd" />	
				  </swipe-item>
				  <swipe-item class="slide3">
				  	<img :src="asd" />			  	
				  </swipe-item>
				</swipe>
			</div>
		</section>
		<nav>
			<div class="nav">
				<div class="bar" v-for="(data,index) in menulist" :key="data.id"
				@click="handleClicknav(data.ename)">
					<img :src="data.icon_url"/>
					<h3>{{data.name}}</h3>
				</div>
			</div>
		</nav>

		<div class="main">
			<h2>本周推荐</h2>
			<div class="list" v-for="(data,index) in indexlist" :key="data.id" @click="handleClick(data.id)">
				<div class="left"><img :src="data.image_240"/></div>
				<div class="right">
					<h3>{{data.store_name}}<span class="city">{{data.city_name}}</span></h3>
					<div class="subtitle">{{data.subtitle}}</div>
					<div class="price">￥{{data.price}}<span>/{{data.origin_price}}</span></div>
				</div>
			</div>
			<div class="btn">
				<router-link to="/home" tag="a">返回顶部</router-link>
			</div>
		</div>
		<foot></foot>
		
	</div>
</template>
 
<script>

import { Swipe,SwipeItem } from 'vue-swipe';
import Vue from "vue";
import "vue-swipe/dist/vue-swipe.css";
import "../assets/iconfont/iconfont.css";
import router from "../router";
import { Indicator } from "mint-ui";
import Api from "./api";
import aa from "../assets/aa.bmp";
import dd from "../assets/dd.bmp";
import asd from "../assets/asd.bmp";
import promise from "promise";


Vue.component('swipe',Swipe);
Vue.component('swipe-item',SwipeItem);
import axios from "axios";

	export default{
		data(){
			return {
				menulist : [],
				indexlist:[],
				aa:aa,
				dd:dd,
				asd:asd
			}
		},

		mounted(){
			//生命周期请求数据
			Indicator.open('加载中...');
			axios.get(Api.url+"/index.php?act=index&op=index&ajax=1").then(res=>{
				
				var arr = res.data.category;
				arr.shift();
				arr.pop();
				var brr = arr.splice(0,8);
				this.menulist = brr;
				console.log(this.menulist);

				this.indexlist = res.data.data;
				Indicator.close();
			})
		},

		methods:{
			handleClick(id){
				console.log(id);
				router.push(`/detail/${id}`);
			},

			handleClickb(){
				
				router.push('/position');
			},

			handleClicknav(ename){
				router.push(`/list/${ename}`);
			},

			handleaa(){
				router.push('/position');
			}
		}
	}
</script>

<style scoped lang="scss">
	#home{
		width: 100%;
		height: 100%;

		header{
			width:100%;
			height:45px;
			line-height:45px;
			background: #F64744;
			display: flex;
			color: #fff;

			div.homeheader{
				flex:1;				
			}

			.left{
					text-align: left;
					padding-left: 5px;
				}

			.right{
					text-align: right;
					padding-right: 5px;
				}
		}


		section.search{
			padding:10px;			
			background:#fff;
			.box-search{
				height:32px;
				line-height: 32px;
				margin:0 auto;
				border:1px solid #ccc;
				border-radius: 5px;
				padding:0 10px;
			}

			a{
				text-decoration: none;
				color:#666;
				font-size: 14px;
			}
		}

		.slide{

			background:#eee;
			padding:0 5px;		
		}

	}

	h3{
		text-align: center;
	}

	.my-swipe {
	  height: 100px;
	  color: #fff;
	  font-size: 30px;
	  text-align: center;
	  padding-top:5px;
	  img{
	  	
	  	margin:0 auto;
	  }
	}


	nav{
		overflow: hidden;
		background:#fff;
		.nav{
			width:100%;

			.bar{
				width:25%;
				height:auto;
				float: left;
				border:1px solid #ccc;
				border-left:0;
				border-top:0;
				text-align: center;
				box-sizing:border-box;
				padding:5px 0;
				h3{
					font-size: 12px;
					font-weight:100;
				}

				img{
					width:40px;
				}
			}
		}
	}

	.main{
		background:#fff;
		
		h2{
			margin-top: 10px;
			height:39px;
			line-height: 39px;
			font-size: 14px;
			border-bottom:1px solid #ccc;
			text-indent: 1.5em;
			font-weight:100;
		}

		.list{

			padding:5px;
			display:flex;
			overflow:hidden;
			border-bottom: 1px solid #ccc;
			text-align: left;

			.left{
				flex:1;

				img{
					width:100%;
				}
			}

			.right{
				padding-left:5px;
				flex:1.5;
				h3{
					font-size: 16px;
					font-weight: 100;
				}

				span.city{
					font-size: 10px;
					float:right;
					color:#9b9b9b;
				}

				.subtitle{
					font-size: 12px;				
					line-height: 16px;
					color:#636363;
					
				}

				.price{
					line-height: 30px;
					color:red;

					span{
						color:#9b9b9b;
						font-size: 8px;
						margin-left:5px;
						text-decoration:line-through;
					}
				}
			}

		}
	}

	.btn{
		width:100%;		
		height:45px;
		margin-top: 10px;
		text-align: center;
		a{			
			display:inline-block;
			padding-top: 10px;
			border:1px solid #ccc;
			padding:5px 20px;
			border-radius:5px;
			color:black;
			font-size: 14px;
			text-decoration: none;
		}
	}

	

</style>