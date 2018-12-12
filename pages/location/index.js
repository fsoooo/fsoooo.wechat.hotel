//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        location:'北京',
        value: '',
        citys:[
            {"id":"1","city":"北京"},
            {"id":"2","city":"上海"},
            {"id":"3","city":"南京"},
            {"id":"4","city":"广州"},
            {"id":"5","city":"深圳"},
            {"id":"6","city":"郑州"},
            {"id":"7","city":"杭州"},
            {"id":"8","city":"西安"},
            {"id":"9","city":"天津"},
            {"id":"10","city":"武汉"},
            {"id":"11","city":"合肥"},
            {"id":"12","city":"台北"},
            {"id":"14","city":"海口"},
            {"id":"15","city":"三亚"},
            {"id":"16","city":"沈阳"},
        ]
    },
    onChange(e) {
        console.log('onChange', e)
        this.setData({
            value: e.detail.value,
        })
    },
    onFocus(e) {
        console.log('onFocus', e)
    },
    onBlur(e) {
        console.log('onBlur', e)
    },
    onConfirm(e) {
        console.log('onConfirm', e)
    },
    onClear(e) {
        console.log('onClear', e)
        this.setData({
            value: '',
        })
    },
    onCancel(e) {
        console.log('onCancel', e)
    },
})
