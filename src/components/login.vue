<template>
	<div id="login">
		<Lisahead>
			<span slot="left" @click="handlehui"><i class="iconfont icon-fanhui"></i></span>
			<h3 slot="h3">登录</h3>
			<span slot="right"><i class="iconfont icon-home"></i></span>
		</Lisahead>
		<div class="logina">
			<ul>
				<router-link tag="li" to="/login/aaa" activeClass="active">账号登录</router-link>
				<router-link tag="li" to="/login/bbb" activeClass="active">手机短信登录</router-link>
			</ul>
			<router-view></router-view>
			<input type="submit" class="btn" value="登录" @click="handlec"/>
			<div>
				<router-link to="/regist" class="left">免费注册</router-link>
				<router-link to="/regist" class="right">忘记密码</router-link>
			</div>
		</div>
		
	</div>
</template>

<script>
import router from "../router";
import "../assets/iconfont/iconfont.css";
	export default{
		data(){
			return {
				isShowU:false,
				isShowP:false,
				username:"",
				password:"",
				msg:'账号或密码错误'
			}
		},

		methods:{

			handlec(){
				axios.post('/users/login4ajax',{
					'username':this.username,
					'password':this.password
				}).then(res=>{
					console.log(res);
					if (res.data.code) {
						router.push('/loginafter');
					};
				})
			},

			handlehui(){
				router.push('/home');
			}
		}
	}
</script>

<style scoped lang="scss">
	#login{
		h3{
			text-align:center;
			font-weight: 100;
		}
		.btn{
			width:90%;
			padding: 10px 0;
			background:#F64744;
			outline:none;
			border:0;
			color:#fff;
			font-size:16;
			border-radius:5px;
		}


		ul{
			display:flex;
			list-style:none;
			li{
				flex:1;
				text-align:center;
			}
		}

		.logina{
			padding: 10px;
			background:#fff;
		}

		a{
			text-decoration: none;
			color:#296da1;
			font-size: 12px;

		}
	}

	.active{
		color: red;
	}

	.left{
		margin-top:10px;
	}
	.right{
		float: right;
		margin-top:10px;
	}
</style>