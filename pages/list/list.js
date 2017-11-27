/**
 * Created by Administrator on 2017-11-16.
 */

Page({
	data : {
		title:'loading...',
		list:[]
	},
  onLoad(params) {
    //console.log(params)
    const src = 'https://api.douban.com/v2/movie/' + params.key
    wx.showLoading({
      title: '加载中',
    })
		//const _this = this
//		请求数据接口，不要使用AJAX API,因为AJAX的API是BOM提供的
		wx.request({
      url: src,
			data:{},
			header:{
				//'Content-Type':'application/json'
				'Content-Type':'json'
				//无效请求->版本升级后相应的参数配置也发生了变化
			},
			success:res => {
        wx.hideLoading()
        //console.log(res.data)
				this.setData({
					list : res.data.subjects,
          title: res.data.title
				})
        
			}
		})
	}
})
