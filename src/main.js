import Vue from 'vue';
import App from './App';
import MpvueRouterPatch from 'mpvue-router-patch';
// import DUSdk from '@/utils/du_mp_sdk_mpvue/du_mp_sdk_mpvue.js';
Vue.config.productionTip = false;
App.mpType = 'app';
Vue.use(MpvueRouterPatch);
const app = new Vue(App);
// Vue.prototype.globalData = { DUSdk: DUSdk };
app.$mount();

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ['^pages/index/index'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#EC2500',
            navigationBarTitleText: '小程序',
            navigationBarTextStyle: 'white'
        },
        tabBar: {
            color: '#666',
            selectedColor: '#F82500',
            backgroundColor: '#fff',
            list: [
                {
                    pagePath: 'pages/index/index',
                    text: '首页',
                    iconPath: 'static/imgs/hui-store.png',
                    selectedIconPath: 'static/imgs/hui-store_select.png'
                }, {
                    pagePath: 'pages/orders/orders',
                    text: '订单',
                    iconPath: 'static/imgs/orders.png',
                    selectedIconPath: 'static/imgs/orders_select.png'
                }, {
                    pagePath: 'pages/coupons/coupons',
                    text: '优惠券',
                    iconPath: 'static/imgs/coupons.png',
                    selectedIconPath: 'static/imgs/coupons_select.png'
                }, {
                    pagePath: 'pages/mine/mine',
                    text: '我的',
                    iconPath: 'static/imgs/mine.png',
                    selectedIconPath: 'static/imgs/mine_select.png'
                }
            ]
        }
    }
};
