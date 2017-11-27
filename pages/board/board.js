Page({
	data:{
		imgUrls:[],
    indicatorColor : 'rgba(206,206,206,1)',
    indicatorActiveColor: '#FFFFFF',
    autoplay : true,
    boards : [{
      key: 'in_theaters', name: '正在热映'
    },{
        key: 'coming_soon', name: '即将上映'
    },{
        key: 'top250', name: 'TOP250'
    },{
        key: 'us_box', name: '北美票房榜'
    }],
		nodes : [{
			name : 'h1',
			attrs : {
				class : 'tipt'
			},
			children : [{
				type : 'text',
				text : '豆瓣电影榜单集合'
			}]
		}],
    tempFilePath :[]
	},
	onLoad () {
		const _this = this
    console.log(this.data.attr)
		wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      data : {
        start : 0,
        count : 6
      },
			header:{
				'Content-Type' : 'json'
			},
			success: res => {
        //console.log(res.data.subjects)
        this.setData({
          imgUrls: res.data.subjects
        })
			}
		})
	},
  upImg () {
    wx.chooseImage({
      count: 5, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:res => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        this.setData({
          tempFilePath: tempFilePaths
        })
      }
    })
  }
})
