<template>
	
	<footer id="footer">
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
		<p>莫莫莫网络科技有限公司</p>
	</footer>
</template>
	
<script>
	export default {
		
	}
</script>

<style scoped lang="scss">
	
	#footer{
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
</style>