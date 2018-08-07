<template>
    <div class="Detail">
        <div class="Header">
            <div>近3天</div>
            <div>近7天</div>
            <div>近1个月</div>
            <div @click="screen">
                <span>筛选</span>
                <img src="../../assets/images/person/icon_down.png" alt="">
            </div>
        </div>
        <div class="Detail_box">
            <div class="Detail_item">
                <div class="Detail_neme">
                    <span class="item_name">注册赠送</span>
                    <span class="item_money">+10</span>
                </div>
                <div class="Detail_neme">
                    <span>豆豆</span>
                    <span>2018/07/30 10:25:15</span>
                </div>
            </div>
            <div class="Detail_item">
                <div class="Detail_neme">
                    <span class="item_name">注册赠送</span>
                    <span class="item_money">+10</span>
                </div>
                <div class="Detail_neme">
                    <span>豆豆</span>
                    <span>2018/07/30 10:25:15</span>
                </div>
            </div>
        </div>
        <div class="Detail_date">
            <van-dialog v-model="show" show-cancel-button :before-close="beforeClose">
            <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate"/>                
            </van-dialog>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            currentDate: new Date(),
            show:false,
        }
    },
    beforeCreate () {
            document.querySelector('body').removeAttribute('style');
            document.querySelector('body').setAttribute('style', 'background-color:#F6F6F6')

        },
    methods: {
        screen(){
            this.show=true;
        }
    }
    
}
</script>
<style scoped>
@import '../../assets/css/Detail.css'
</style>

