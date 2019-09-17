import http from '@/utils/http';
import wx from 'wx';

// 发送验证码
export const sendVerification = (params) => http.post('/api-customer/customer/security/2022/v1/sendVerification', params);
// 小程序商品搜索接口
export const searchProductList = (params) => http.post(wx.getStorageSync('token') ? '/api-store/product/2004/v1/searchStoreProductList' : '/api-store/product/security/2001/v1/searchProductList', params);
// 用户查询门店优惠券列表
export const getStoreCouponList = (params) => http.post('/api-promotion/coupon/5009/v1/getStoreCouponList', params, {hide_Loading: true});
