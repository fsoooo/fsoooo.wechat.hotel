//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        orderLists: [
            {
                "id": '1',
                "hotelName": "智驿酒店",
                "roomType": "大床房",
                "price": "168",
                "orderStatus": "代付款",
                "beginTime": "2018-12-01",
                "endtime": "2018-12-31"
            },
            {
                "id": '2',
                "hotelName": "智驿酒店",
                "roomType": "大床房",
                "price": "168",
                "orderStatus": "代付款",
                "beginTime": "2018-12-01",
                "endtime": "2018-12-31"
            }
        ]
    },
    // 跳转订房详情
    go_roomdetail: function (e) {
        var id = e.currentTarget.dataset.id
        console.log(id)
        wx.navigateTo({
            url: 'room/room?id=' + id,
        })
    },
})
