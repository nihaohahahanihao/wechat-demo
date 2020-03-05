// pages/home/home.js
Page({
  /**
   *點擊獲取用戶數據
   */
  getUserInfo(event) {
    console.log(event)
  },
  onPullDownRefresh(){
    console.log('下拉刷新了')
    setTimeout(()=>{
      wx.stopPullDownRefresh()
      console.log(13131313)
    }, 1000)
  }
})