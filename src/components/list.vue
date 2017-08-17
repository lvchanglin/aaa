<template>
	<div id="list">
		<Lisahead>
			<span slot="left"><i class="iconfont icon-fanhui" 
			@click="handlefanhui"></i></span>
			<input slot="right" class="insert" type="text" placeholder="请输入您想找的优惠"/>
		</Lisahead>
		<div class="paixu">
			
		</div>

		<ul class="listloop">
			<li v-for="(data,index) in listloop" :key="data.id"
			@click="handleClickdetail(data.id)">
				<div class="left"><img :src="data.image_240"/></div>
				<div class="right">
					<h3>{{data.store_name}}<span class="city">{{data.city_name}}</span></h3>
					<div class="subtitle">{{data.subtitle}}</div>
					<div class="price">￥{{data.price}}<span>/{{data.origin_price}}</span></div>
				</div>
			</li>
		</ul>
		<foot></foot>
	</div>
</template>
<script>
import router from "../router";
import { Indicator } from "mint-ui";
import Api from "./api";


	export default{
		data(){
			return{
				listloop:[]
			}
		},

		mounted(){
			Indicator.open('加载中...');
			
			axios.get(Api.url+`/list.html?cate=${this.$route.params.ename}&ajax=1`).then(res=>{
				console.log(res.data.data);
				this.listloop = res.data.data;
				Indicator.close();
			})
		},

		methods:{
			handlefanhui(){
				router.push('/home');
			},

			handleClickdetail(id){
					router.push(`/detail/${id}`);
				
			},

			
		}
	}
</script>

<style scoped lang="scss">
	#list{
		.insert{
			padding:5px 10px;
			border-radius: 5px;
			color: #eee;
			border:0;

		}

		.listloop{
			h3{
				font-size:16px;
			}

			li{
				display: flex;
				margin: 10px ;
				border-bottom:1px solid #ccc;
			}

			.left{
				flex:1;
				img{
					width: 100%;
				}
			}
			.right{
				flex:1;
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
</style>