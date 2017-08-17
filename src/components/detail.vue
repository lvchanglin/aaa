<template>
	<div id="detail">
		<div class="head">
			<div class="left"><i class="iconfont icon-fanhui" @click="handClicka()"></i></div>
			<div><h3>优惠详情</h3></div>
			<div class="right"><i class="iconfont icon-home"></i></div>
		</div>
		
		<div v-if="detaillist" class="top">
			<img :src="detaillist.youhui_info.image_240"/>
			<div class="price">
				<span class="newprice">￥{{detaillist.table_list[0].price}}</span>
				<span class="oldprice">/{{detaillist.table_list[0].origin_price}}</span>
				<span class="buy" @click="handlecart">立即抢购</span>
			</div>
			<div class="xq">
				<h3>{{detaillist.store.name}}</h3>
				<div>{{detaillist.youhui_info.title}}</div>
			</div>
			<div class="tel">
				<h6>{{detaillist.store.name}}</h6>
				<span>{{detaillist.store.address}}</span>
				<span class="telephone"><i class="iconfont icon-dianhua"></i></span>
			</div>
			<div class="taocan" v-for="(data,index) in detaillist.table_list">
				<div class="title">{{data.name}}<span class="right">￥{{data.price}}</span></div>
				<h5>{{data.data.title}}</h5>
				<div class="content">
					
					<ul>
						<div class="titlea">
							<span>{{looplist.name}}</span>
							<span>{{looplist.amount}}</span>
							<span>{{looplist.price}}</span>
						</div>
						<li class="table-list" v-for="(data,index) in infolist">.{{data}}</li>
					</ul>
				</div>

				<ul class="buyinfo">
					<li v-for="(data,index) in buyinfo_list">
						<h5>{{data.title}}</h5>
						<span>-{{data.info[0]}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div v-show="isShow" class="show">loading...</div>

		<footer>
			<div class="top">
				<router-link to="/login" tag="a">登录</router-link>
				<router-link to="/regist" tag="a">登录</router-link>
				<span>城市<router-link to="/regist" tag="a">桐乡</router-link></span>
			</div>
			<ul>
				<li><router-link to="/home" tag="a">首页</router-link></li>
				<li><router-link to="/home" tag="a">电脑端</router-link></li>
				<li><router-link to="/home" tag="a">客户端</router-link></li>
				<li><router-link to="/home" tag="a">关于我们</router-link></li>
				<li><router-link to="/home" tag="a">信息反馈</router-link></li>
				<li><router-link to="/home" tag="a">帮助</router-link></li>
			</ul>
			<p> 莫莫莫网络科技有限公司</p>
		</footer>
	</div>
</template>

<script>
import "../assets/iconfont/iconfont.css";
import router from "../router";
import { Indicator } from "mint-ui";
import { MessageBox } from 'mint-ui';
import promise from "promise";
import Api from "./api";

	export default{
		data(){
			return{
				isShow:true,
				detaillist:null,
				looplist:[],
				infolist:[],
				buyinfo_list:[]
			}
		},

		mounted(){
			Indicator.open('加载中...');

			axios.get(Api.url+`/index.php?act=deal&op=index&id=${this.$route.params.lisaId}&ajax=1`).then(res=>{
				console.log(this.$route.params.lisaId);		
				this.detaillist = res.data;
				this.looplist = res.data.table_list[0].data[0].list[0];
				this.infolist = res.data.table_list[0].info;
				this.buyinfo_list = res.data.buyinfo_list;
				
				this.isShow = false;
				Indicator.close();
			})
		},

		methods:{
			handClicka(){

				router.push('/home');
			},

			handlecart(){
				if(!location.cookie){
					MessageBox.alert('请先登录').then(action => {
					  router.push('/login');
					});					
				}else{
					router.push('/cart');
				}
			}
		}
	}
</script>

<style scoped lang="scss">
#detail{
	width:100%;

	.head{
		position: fixed;
		top:0;
		width: 100%;
		height: 45px;
		background: #F64744;
		display:flex;
		line-height: 45px;
		color: #fff;
		div{
			flex:1;
			
			h3{
				font-weight: 100;
				text-align: center;
			}
		}

		.right{
			text-align: right;
		}

		.left{
			text-align: left;
		}

		i{
			font-size:20px;
		}
	}

	img{
		width:100%;
	}

	.top{
		background:#fff;
	}

	.price{
		border-bottom:1px solid #ccc;
		padding:10px 0;
		span.oldprice{
			font-size:12px;
			color:#ccc;
			text-decoration: line-through;
		}

		span.newprice{
			font-size:25px;
			color:red;
		}

		span.buy{
			padding:5px 10px;
			background:#F64744;
			border-radius: 5px;
			float: right;
			margin-right:15px;
			color:#fff;
		}

	}

	.xq{
		
		border-bottom:1px solid #ccc;

		div{
			font-size:14px;
			margin: 5px;
			color:#555;
		}
		
	}

	.title{
		background:#eee;
		padding: 5px;
	}

	.content{
		width:100%;
		padding-bottom: 10px;
		background:#fff;
		display:flex;

		ul{
			font-size: 14px;
			color:#888;
			margin:0 10px;
			li{
				line-height: 25px;
			}
		}

		.titlea{
			display:flex;
			width:100%;
			padding: 5px 0;
			border-bottom:1px solid #ccc;
			margin-bottom: 5px;

			span{
				flex:1;
				text-align: center;
			}
		}
		
	}
}

.right{
	float:right;
	.iconfont{
		color:#fff;
		}
}

.show{

	width:100%;
	height:300px;
	background:#eee;
	color:#000;	
}

footer{
		width:100%;
		margin-top:10px;
		padding-bottom:50px;
		.top{
			padding:15px;
			
			border-top:1px solid #ccc;
			border-bottom:1px solid #ccc;
			background:#fff;

			span{
				float:right;
			}

			a{
				display:inline-block;
				padding:5px 20px;
				border:1px solid #ccc;
				border-radius:5px;
				text-decoration: none;
				font-size: 10px;
				color:#296da1;

			}
		}

		ul{
			list-style: none;
			display:flex;

			li{
				font-size: 12px;
				flex:1;
				text-align: center;
				margin-top:5px;

				a{
					text-decoration:none;
					display:inline-block;
					color:#296da1;
				}
			}
		}
		

		p{
			text-align: center;
			font-size: 12px;
			height:30px;
			line-height: 30px;
			color:#9b9b9b;
		}
	}

	.tel{
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
		padding:10px;
		h6{
			font-size: 14px;
			font-weight: 100;
		}
		span{
			font-size: 12px;
		}
	}

	.telephone{
		color:red;
		float:right;
		border-left:1px solid #ccc;
		padding-left:10px;

		.iconfont{
			font-size: 26px;
			line-height: 10px;
		}
	}
	

	.buyinfo{
		padding: 10px 0;margin-top:10px;
		border-top:1px solid #ccc;
		font-size: 14px;

		h5{
			font-size: 14px;
			font-weight: 100;
			line-height: 30px;
			margin-left:5px;
		}
		span{
			color:#888;
			margin-left:15px;
		}
	}	
</style>