<template>
    <div class="HomePage">
        <div class="Hearder">
            <div class="addressBox">
                <span class="addressName">绵阳</span><img src="./../../assets/images/index/icon_address.png">
            </div>
            <div class="searchBox"><img src="./../../assets/images/index/icon_search.png"/><input type="text" placeholder="关键字/商品"></div>
            <div class="cartBox"><img src="./../../assets/images/index/icon_cart.png" /></div>
            <div class="noticeBox" onclick="message(this)"><img src="./../../assets/images/index/icon_notice.png" /></div>
        </div>
        <div class="text">
<!-- <div class="banner" v-for="(banner,index) in bannerPicArray" :key="index">
            <img :src="banner.imageUrl"> -->
            <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
            <img :src="banner.imageUrl" width="100%"/>
        </van-swipe-item>
    </van-swipe>
        <!-- </div> -->
        </div>
        
        <div class="classification">
            <div class="classificationBox">
                <div class="classification_item"><img src="./../../assets/images/index/icon_merchants.png"><span>合作商家</span></div>
                <div class="classification_item"><img src="./../../assets/images/index/icon_DDMall.png"><span>豆豆商城</span></div>
                <div class="classification_item"><img src="./../../assets/images/index/icon_taoSpell.png"><span>淘拼拼</span></div>
                <div class="classification_item"><img src="./../../assets/images/index/icon_taoBargaining.png"><span>淘砍砍</span></div>
            </div>
            <div class="classificationBox">
                <div class="classification_item"><img src="./../../assets/images/index/icon_limitShop.png"><span>限时抢购</span></div>
                <div class="classification_item"><img src="./../../assets/images/index/icon_brandZone.png"><span>品牌专区</span></div>
                <div class="classification_item"><img src="./../../assets/images/index/icon_specialOffers.png"><span>特价优惠</span></div>
                <div class="classification_item"><img src="./../../assets/images/index/icon_integral.png"><span>领取积分</span></div>
            </div>
        </div>
        <div class="taoLetters">
            <div class="leterTitle">淘气快报</div>
            <span class="leter_content">淘气购，淘你所想，购你所需!</span>
        </div>
        <div class="DD_mall">
            <div class="mallHead">
                <div class="DD_title">实惠好货</div>
                <span class="DD_content">豆豆商城尖货云集！</span>
                <div class="show_more">
                    <span>更多</span>
                    <img src="./../../assets/images/index/icon_left.png">
                </div>
            </div>
            <div class="mall_content">
                <div class="item_mall">
                    <div class="item_mall_text">
                        <span class="item_mall_title">智能手机</span>
                        <span class="item_mall_content">优惠享不停</span>
                    </div>
                    <img src="./../../assets/images/index/goods_phone.png">
                </div>
                <div class="item_mall">
                    <div class="item_mall_text">
                        <span class="item_mall_title">淘优惠</span>
                        <span class="item_mall_content">低至五折</span>
                    </div>
                    <img src="./../../assets/images/index/goods_kettle.png">
                </div>
                <div class="item_mall">
                    <div class="item_mall_text">
                        <span class="item_mall_title">爱车生活</span>
                        <span class="item_mall_content">有车族不是梦</span>
                    </div>
                    <img src="./../../assets/images/index/goods_bike.png">
                </div>
                <div class="item_mall">
                    <div class="item_mall_text">
                        <span class="item_mall_title">零食专享</span>
                        <span class="item_mall_content">舌尖上的诱惑</span>
                    </div>
                    <img src="./../../assets/images/index/goods_foods.png">
                </div>
            </div>
        </div>
        <div class="Merchants">
            <div class="mallHead">
                <div class="Mer_title">商家联盟</div>
                <span class="DD_content">合作共赢，商家联盟！</span>
                <div class="show_more">
                    <span>更多</span>
                    <img src="./../../assets/images/index/icon_left.png">
                </div>
            </div>
            <div class="merchants">
                <div class="merchants_img">
                    <img src="./../../assets/images/index/merchants_one.png" alt="">
                    <p>汉庭酒店</p>
                </div>
                <div class="merchants_img">
                    <img src="./../../assets/images/index/merchants_one.png" alt="">
                    <p>汉庭酒店</p>
                </div>
                <div class="merchants_img">
                    <img src="./../../assets/images/index/merchants_one.png" alt="">
                    <p>汉庭酒店</p>
                </div>
                <div class="merchants_img">
                    <img src="./../../assets/images/index/merchants_one.png" alt="">
                    <p>汉庭酒店</p>
                </div>
            </div>
        </div>
        <div class="TaoSpell">
            <div class="mallHead">
                <div class="TS_title">淘拼拼</div>
                <span class="DD_content">淘拼拼，淘拼拼，拼的多，笑的多</span>
                <div class="show_more">
                    <span>更多</span>
                    <img src="./../../assets/images/index/icon_left.png">
                </div>
            </div>
            <div class="mall_content">
                <div class="item_mall">
                    <div class="item_mall_text">
                        <span class="item_mall_title">智能手机</span>
                        <span class="TaoPrice">￥3654豆豆</span>
                        <span class="item_Tao_content">已拼10件</span>
                    </div>
                    <img src="./../../assets/images/index/goods_phone.png">
                </div>
                <div class="item_mall">
                    <div class="item_mall_text">
                        <span class="item_mall_title">淘优惠</span>
                        <span class="TaoPrice">￥3654豆豆</span>
                        <span class=" item_Tao_content">已拼10件</span>
                    </div>
                    <img src="./../../assets/images/index/goods_kettle.png">
                </div>
                <div class="item_mall">
                    <div class="item_mall_text">
                        <span class="item_mall_title">爱车生活</span>
                        <span class="TaoPrice">￥3654豆豆</span>
                        <span class=" item_Tao_content">已拼10件</span>
                    </div>
                    <img src="./../../assets/images/index/goods_bike.png">
                </div>
                <div class="item_mall">
                    <div class="item_mall_text">
                        <span class="item_mall_title">零食专享</span>
                        <span class="TaoPrice">￥3654豆豆</span>
                        <span class="item_Tao_content">已拼10件</span>
                    </div>
                    <img src="./../../assets/images/index/goods_foods.png">
                </div>
            </div>
        </div>
        <div class="Recommend">
            <div class="MercHeader">
                <div class="rung"></div><span>推荐商品</span><div class="rung"></div>
            </div>
            <div class="GoodsImg">
                <div class="ImgD">
                    <div class="backimg" style="background-image:url(../images/index/GoodsImg.png)"></div>
                    <span class="GoodsText">【百草味-抖音零食大礼包】
                    休闲食品一整箱网红小吃...休闲食品一整箱网红小吃...</span>
                    <div class="ImgFooter">
                        <div class="GoodsPrice">
                            <span class="Price">￥3654豆豆</span>
                            <span class="YearPrice">￥4666 豆豆</span>
                        </div>
                        <div class="AddCart">
                            <img src="./../../assets/images/index/icon_redcart.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="ImgD">
                        <div class="backimg" style="background-image:url(../images/index/GoodsImg.png)"></div>
                        <span class="GoodsText">【百草味-抖音零食大礼包】
                        休闲食品一整箱网红小吃...休闲食品一整箱网红小吃...</span>
                        <div class="ImgFooter">
                            <div class="GoodsPrice">
                                <span class="Price">￥3654豆豆</span>
                                <span class="YearPrice">￥4666 豆豆</span>
                            </div>
                            <div class="AddCart">
                                <img src="./../../assets/images/index/icon_redcart.png" alt="">
                            </div>
                        </div>
                </div>
                <div class="ImgD">
                        <div class="backimg" style="background-image:url(../images/index/GoodsImg.png)"></div>
                        <span class="GoodsText">【百草味-抖音零食大礼包】
                        休闲食品一整箱网红小吃...休闲食品一整箱网红小吃...</span>
                        <div class="ImgFooter">
                            <div class="GoodsPrice">
                                <span class="Price">￥3654豆豆</span>
                                <span class="YearPrice">￥4666 豆豆</span>
                            </div>
                            <div class="AddCart">
                                <img src="./../../assets/images/index/icon_redcart.png" alt="">
                            </div>
                        </div>
                </div>
                <div class="ImgD">
                        <div class="backimg" style="background-image:url(../images/index/GoodsImg.png)"></div>
                        <span class="GoodsText">【百草味-抖音零食大礼包】
                        </span>
                        <div class="ImgFooter">
                            <div class="GoodsPrice">
                                <span class="Price">￥3654豆豆</span>
                                <span class="YearPrice">￥4666 豆豆</span>
                            </div>
                            <div class="AddCart">
                                <img src="./../../assets/images/index/icon_redcart.png" alt="">
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <div class="MercHeader">
            <div class="rung"></div><span>我是有底线的</span><div class="rung"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            bannerPicArray:[
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
            ]
        }
    }
    
}
</script>
<style scoped>
@import "../../assets/css/index.css";
</style>

