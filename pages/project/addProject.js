Page({

  /**
   * 页面的初始数据
   */
  data: {
    start: '2018-06-01',
    end: '2018-06-01'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {

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

  formSubmit: function () {

  },

  startChange: function (e) {
    this.setData({
      start: e.detail.value
    })
  },
  endChange: function (e) {
    this.setData({
      end: e.detail.value
    })
  }

})