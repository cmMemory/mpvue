<script>
export default {
    onHide() {
        if (!wx.getStorageSync('token') || !wx.getStorageSync('IS_RECEIVED')) {
            wx.setStorageSync('POP_ClOSE', false);
        }
    },
    onLaunch() {
        // this.globalData.DUSdk.init(this);
    }
};
</script>

<style>
page {
    height: 100%;
    background: #f3f5f7;
}
.container {
    height: 100%;
    border-top: 1px solid #D7D7D7;
    box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
