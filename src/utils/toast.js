import wx from 'wx';
const Toast = (title = '系统异常', icon = 'none') => {
    wx.showToast({
        title: title,
        icon: icon,
        duration: 3000
    });
};
export {
    Toast
};
