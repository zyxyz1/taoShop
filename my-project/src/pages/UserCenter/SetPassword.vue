<template>
    <div class="SetPassword">
        <div class="Phone">
            <van-cell-group>
                <van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message="请输入正确的手机号码">
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
            </van-cell-group>
            <van-cell-group>
            <van-field v-model="value" label="验证码" placeholder="请输入验证码" />
            </van-cell-group>
        </div>
        <div class="SetPass">
          <van-cell-group>
                <van-field v-model="password" type="password" label="支付密码" placeholder="请设置你的新支付密码"/>
                <van-field v-model="password" type="password" label="确认密码" placeholder="请再次输入支付密码"/>
          </van-cell-group>
        </div>
        <div class="SurePass">设置支付密码</div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    beforeCreate () {
            document.querySelector('body').removeAttribute('style');
            document.querySelector('body').setAttribute('style', 'background-color:#F6F6F6')

        },
    methods: {
        
    }
}
</script>
<style scoped>
@import '../../assets/css/SetPassword.css';
.van-cell{
    height: .8rem;
    line-height: .8rem;
}
.van-button--primary{
    background-color: #fff;
    border:none;
    font-size:.24rem;
	color: #ffa800;
}
.van-cell__title{
    font-size: .24rem;
	color: #333333;
}
.van-field__control{
    font-size: .24rem;
	color: #cccccc;
}
</style>


