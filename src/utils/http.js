import wx from 'wx';
import Fly from 'flyio';

const http = new Fly();
// 每个请求都需要带的参数
let systemInfo = null;
try {
    let res = wx.getSystemInfoSync();
    let emulatordid = `model: ${res.model},system:${res.system},SDKVersion:${res.SDKVersion},version:${res.version}`;
    systemInfo = {
        'lang': 'zh_CN',
        'mobileInfo': {
            'did': '',
            'emulatordid': emulatordid,
            'imei': '',
            'platform': 'crmp_winretailrc',
            'smDid': '',
            'src': 'default'
        },
        'ver': '1.0'
    };
} catch (e) {
    console.log(e);
}

http.config.headers = {
    grp: 'winretailrc',
    'Accept-Language': 'zh-CN'
};
// http.config.baseURL = 'http://172.18.3.239:3000';// 订单
http.config.baseURL = process.env.BASE_URL;// 提测试前打开当前注释，注释掉其它地址
http.interceptors.request.use((request) => {
    !request.hide_Loading && wx.showNavigationBarLoading();
    request.headers.Token = wx.getStorageSync('token');
    request.body = request.body || {};
    Object.assign(request.body, systemInfo);
    return request;
});

http.interceptors.response.use(
    (response, promise) => {
        let obj = {
            request: response.request,
            responseData: response.data
        };
        let responseCode = response.data.code;
        console.log(`=======接口地址:${obj.request.url} ,请求相关数据如下:`);
        console.log(obj);
        !response.request.hide_Loading && wx.hideNavigationBarLoading();
        // 处理部分机型请求返回404html错误页面的问题
        if (typeof responseCode === 'undefined') {
            wx.hideNavigationBarLoading();
            wx.showToast({
                title: '网络异常，请稍候再试',
                icon: 'none'
            });
            return promise.reject('Something wrong happened in server or network, please check it~');
        }
        // 异常错误码验证 数组中包含直接返回不执行if
        let errorCode = [200009, 500001, 500002, 500017, 402015];// 402012
        if (responseCode && errorCode.indexOf(responseCode) === -1) {
            if (responseCode === 1002) {
                wx.showModal({
                    title: '登录失效',
                    content: '登录失效，请重新登录',
                    success: function(res) {
                        if (res.confirm) {
                            wx.navigateTo({
                                url: '/pages/mine/login'
                            });
                        } else if (res.cancel) {
                            console.log('用户点击取消');
                        }
                    }
                });
            } else {
                wx.showToast({
                    title: response.data.message,
                    icon: 'none'
                });
            }
            return promise.reject(`Something wrong happened when request ${response.request.url}`);
        }
        return promise.resolve({
            data: {},
            ...response.data
        });
    },
    (err, promise) => {
        wx.hideNavigationBarLoading();
        wx.showToast({
            title: '网络异常，请稍候再试',
            icon: 'none'
        });
        console.log(err);
        return promise.reject('Something wrong happened in server or network, please check it~');
    }
);

export default http;
