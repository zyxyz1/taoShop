<template>
    <div class="footer">
        <van-tabbar v-model="active">
            <van-tabbar-item v-for="(item,index) in iconGroup" :key="index" :to="item.icon.path">
            <span>{{item.icon.name}}</span>
            <img
              slot="icon"
              slot-scope="props"
              :src="props.active ? item.icon.active : item.icon.normal"
            >
          </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
    return {
      active: 0,
      iconGroup: [
            {
              icon:{
                normal: require('../../assets/images/footer/icon_homie.png'),
                active: require('../../assets/images/footer/icon_homie_active.png'),
                name:"首页",
                path:"/HomePage"
              }
            },
          {
            icon:{
              normal: require('../../assets/images/footer/icon_mall.png'),
              active: require('../../assets/images/footer/icon_mall_active.png'),
              name:"豆豆商城",
              path:"/DDMall"
            }
          },
          {
            icon:{
              normal: require('../../assets/images/footer/icon_cooper.png'),
              active: require('../../assets/images/footer/icon_cooper_active.png'),
              name:"拼一拼",
              path:"/Spell"
            }
          },
          {
            icon:{
              normal: require('../../assets/images/footer/icon_business.png'),
              active: require('../../assets/images/footer/icon_business_active.png'),
              name:"商家",
              path:"/Business"
            }
          },
          {
            icon:{
              normal: require('../../assets/images/footer/icon_personal.png'),
              active: require('../../assets/images/footer/icon_personal_active.png'),
              name:"我的",
              path:"/PersonalCenter"
            }
          },
      ],
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.footer{
  font-size: 0.24rem;
}
.van-tabbar-item{
  font-size: 0.22rem;
  color: #999;
}
.van-tabbar-item--active{
  font-size: 0.22rem;
  color: #ffa800;
}
.van-tabbar-item__icon img{
  width: 0.5rem;
  height: 0.5rem;
}
.van-tabbar{
  height: 0.98rem;
}
</style>
