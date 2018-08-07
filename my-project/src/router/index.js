import Vue from 'vue'
import Router from 'vue-router'

//首页
const HomePage=()=>import("@/pages/HomePage/HomePage")//首页
const BuyContent=()=>import("@/pages/BuyContent")
const SearchGoods=()=>import("@/pages/HomePage/SearchGoods")//搜索商品
const SystemMessage=()=>import("@/pages/HomePage/SystemMessage")//系统消息
const MessageContent=()=>import("@/pages/HomePage/MessageContent")//系统消息



// 豆豆商城
const DDMall=()=>import("@/pages/DougMall/DDMall")//豆豆商城
const DDSearch=()=>import("@/pages/DougMall/DDSearch")//豆豆商城搜索
const EditAdd=()=>import("@/pages/DougMall/EditAdd")//编辑地址
const GoodsSpecies=()=>import("@/pages/DougMall/GoodsSpecies")//商品分类
const JoinCart=()=>import("@/pages/DougMall/JoinCart")//加入购物车
const LeaveWord=()=>import("@/pages/DougMall/LeaveWord")//留言
const MyAddress=()=>import("@/pages/DougMall/MyAddress")//我的地址
const OrderPayment=()=>import("@/pages/DougMall/OrderPayment")//订单支付
const PayFailure=()=>import("@/pages/DougMall/PayFailure")//订单支付失败
const PaySuccess=()=>import("@/pages/DougMall/PaySuccess")//订单支付成功
const ShoppingCart=()=>import("@/pages/DougMall/ShoppingCart")//购物车
const SubmitOrders=()=>import("@/pages/DougMall/SubmitOrders")//提交订单


//个人中心
const personalCenter=()=>import("@/pages/UserCenter/personalCenter")//订单支付成功
const MyWallet=()=>import("@/pages/UserCenter/MyWallet")//我的钱包
const TopSuccess=()=>import("@/pages/UserCenter/TopSuccess")//充值成功
const TopFailure=()=>import("@/pages/UserCenter/TopFailure")//充值失败
const SetPassword=()=>import("@/pages/UserCenter/SetPassword")//设置支付密码
const TopWay=()=>import("@/pages/UserCenter/TopWay")//充值支付方式
const TopUp=()=>import("@/pages/UserCenter/TopUp")//充值金额
const Detail=()=>import("@/pages/UserCenter/Detail")//明细
const MyCollection=()=>import("@/pages/UserCenter/MyCollection")//我的收藏






const demo=()=>import("@/pages/demo")//接口测试


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/BuyContent',
      name: 'BuyContent',
      component: BuyContent
    }, 
    {
      path: '/DDMall',
      name: 'DDMall',
      component: DDMall
    },
     {
      path: '/DDSearch',
      name: 'DDSearch',
      component: DDSearch
    }, {
      path: '/EditAdd',
      name: 'EditAdd',
      component: EditAdd
    }, {
      path: '/GoodsSpecies',
      name: 'GoodsSpecies',
      component: GoodsSpecies
    }, {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/JoinCart',
      name: 'JoinCart',
      component: JoinCart
    }
    , {
      path: '/LeaveWord',
      name: 'LeaveWord',
      component: LeaveWord
    }, {
      path: '/MessageContent',
      name: 'MessageContent',
      component: MessageContent
    }, {
      path: '/MyAddress',
      name: 'MyAddress',
      component: MyAddress
    }, {
      path: '/OrderPayment',
      name: 'OrderPayment',
      component: OrderPayment
    }, {
      path: '/PayFailure',
      name: 'PayFailure',
      component: PayFailure
    }, {
      path: '/PaySuccess',
      name: 'PaySuccess',
      component: PaySuccess
    }, {
      path: '/personalCenter',
      name: 'personalCenter',
      component: personalCenter
    }, {
      path: '/SearchGoods',
      name: 'SearchGoods',
      component: SearchGoods
    }, {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }, {
      path: '/SubmitOrders',
      name: 'SubmitOrders',
      component: SubmitOrders
    }, {
      path: '/SystemMessage',
      name: 'SystemMessage',
      component: SystemMessage
    }, {
      path: '/demo',
      name: 'demo',
      component: demo
    }, {
      path: '/MyWallet',
      name: 'MyWallet',
      component: MyWallet
    }, {
      path: '/TopSuccess',
      name: 'TopSuccess',
      component: TopSuccess
    }, {
      path: '/TopFailure',
      name: 'TopFailure',
      component: TopFailure
    }, {
      path: '/SetPassword',
      name: 'SetPassword',
      component: SetPassword
    }, {
      path: '/TopWay',
      name: 'TopWay',
      component: TopWay
    }, {
      path: '/TopUp',
      name: 'TopUp',
      component: TopUp
    }, {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/MyCollection',
      name: 'MyCollection',
      component: MyCollection
    }
  ]
})
