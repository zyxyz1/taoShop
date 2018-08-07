<template>
    <div class="MyCollection">
        <div class="Header">
            <div @click="change(this)">商品</div>
            <div @click="change(this)">商家</div>
        </div>
        <div class="Collect">
            <div class="Collect_item">
                <div class="item_img" style="background-image:url()"></div>
                <div class="item_text">
                    <div class="text_name">高质量高品位眼影腮红化妆品五件套装</div>
                    <div class="Collect_money">
                        <span class="item_now">￥500豆豆</span>
                        <span class="item_ago">￥800豆豆</span>
                    </div>
                </div>
                <div class="delect">
                    <img src="../../assets/images/person/icon_delect.png" alt="">
                </div>
            </div>
             <div class="Collect_item">
                <div class="item_img" style="background-image:url()"></div>
                <div class="item_text">
                    <div class="text_name">高质量高品位眼影腮红化妆品五件套装</div>
                    <div class="Collect_money">
                        <span class="item_now">￥500豆豆</span>
                        <span class="item_ago">￥800豆豆</span>
                    </div>
                </div>
                <div class="delect">
                    <img src="../../assets/images/person/icon_delect.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    beforeCreate () {
            document.querySelector('body').removeAttribute('style');
            document.querySelector('body').setAttribute('style', 'background-color:#F6F6F6')

        },
    methods: {
        change(){

        }
    }
}
</script>
<style scoped>
@import '../../assets/css/MyCollection.css'
</style>

