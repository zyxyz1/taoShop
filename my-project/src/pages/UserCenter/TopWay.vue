<template>
    <div class="TopWay">
        <div class="Header">
            <span>充值金额</span>
            <div class="TopMoney">
                <span>￥</span>
                <span>50</span>
            </div>
        </div>
        <div class="Way_name">请选择支付方式</div>
        <div class="way">
            <div class="way_item">
                <div class="item_name">
                    <img src="../../assets/images/person/icon_Wei.png" alt="">
                    <span>微信支付</span>
                </div>
                <van-checkbox v-model="checked"></van-checkbox>
            </div>
            <div class="way_item">
                <div class="item_name">
                    <img src="../../assets/images/person/icon_zhi.png" alt="">
                    <span>支付宝支付</span>
                </div>
                <van-checkbox v-model="checked"></van-checkbox>
            </div>
        </div>
        <div class="SureWay" @click="EnterPass">确认充值</div>
        <van-dialog v-model="show" title="请输入支付密码" show-cancel-button :before-close="beforeClose">
            <van-password-input :value="value" info="密码为 6 位数字" @focus="showKeyboard = true"/>
                <!-- 数字键盘 -->
            <van-number-keyboard :show="showKeyboard" @input="onInput" @delete="onDelete" @blur="showKeyboard = false"/>
        </van-dialog>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            checked: true,
            show:false,
            value: '',
            showKeyboard: true
        }
    },
    beforeCreate () {
            document.querySelector('body').removeAttribute('style');
            document.querySelector('body').setAttribute('style', 'background-color:#F6F6F6')
        },
    methods: {
        beforeClose(action, done) {
        if (action === 'confirm') {
            setTimeout(done, 1000);
        } else {
            done();
      }
    },
        onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    focus(){

    },
    EnterPass(){
        this.show=true;
    }
    }
    
}
</script>
<style lang="less" scoped>
@import '../../assets/css/TopWay.css';
.van-checkbox__icon--checked .van-icon {
    color: #fff;
    background-image: linear-gradient(0deg, 
		#fe4a03 0%, 
		#ffa810 100%), 
	linear-gradient(
		#f6f6f6, 
		#f6f6f6);
	background-blend-mode: normal, 
		normal;
}
.van-dialog{
    height: 7rem;
}
.van-dialog__confirm{
    background-image: linear-gradient(0deg, 
		#fe4a03 0%, 
		#ffa810 100%), 
	linear-gradient(
		#ffff00, 
		#ffff00) !important;
	background-blend-mode: normal, 
		normal;
    border-radius: 0.04rem;
    color: #ffffff;
}
</style>

