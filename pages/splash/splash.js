Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      data: {
        "start": 3,
        "count": 3
        },
      header: {
        //'Content-Type':'application/json'
        'Content-Type': 'json'
        //无效请求->版本升级后相应的参数配置也发生了变化
      },
      success: res => {
        //console.log(res.data)
        this.setData({
          movies: res.data.subjects
        })

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  start : function () {
    wx.redirectTo({
      url:'../board/board'
    })
  }
})