const App = getApp();
const api = require('../../utils/api.js');
const util = require('../../utils/util.js');

const formatTime = util.formatTime;

Page({
    data: {
        trips: [],
        start: 0,
        loading: false,
        windowWidth: App.systemInfo.windowWidth,
        windowHeight: App.systemInfo.windowHeight,
        current: 'tab1',
        tabs: [
            {
                key: 'tab1',
                title: '智酒店',
                content: '酒店列表',
            },
            {
                key: 'tab2',
                title: '驿生活',
                content: '广告列表',
            }
        ]
    },
    onLoad() {
        this.loadMore();
    },
    onChange(e) {
        console.log('onChange', e)
        this.setData({
            current: e.detail.key,
        })
    },
    onTabsChange(e) {
        console.log('onTabsChange', e)
        const { key } = e.detail
        const index = this.data.tabs.map((n) => n.key).indexOf(key)

        this.setData({
            key,
            index,
        })
    },
    onSwiperChange(e) {
        console.log('onSwiperChange', e)
        const { current: index, source } = e.detail
        const { key } = this.data.tabs[index]
        if (!!source) {
            this.setData({
                key,
                index,
            })
        }
    },
    onPullDownRefresh() {
        this.loadMore(null, true);
    },
    loadMore(e, needRefresh) {
        const self = this;
        const loading = self.data.loading;
        const data = {
            next_start: self.data.start,
        };
        if (loading) {
            return;
        }
        self.setData({
            loading: true,
        });
        api.getHotTripList({
            data,
            success: (res) => {
                let newList = res.data.data.elements;
                newList.map((trip) => {
                    const item = trip;
                    item.data[0].date_added = formatTime(new Date(item.data[0].date_added * 1000), 1);
                    return item;
                });
                if (needRefresh) {
                    wx.stopPullDownRefresh();
                } else {
                    newList = self.data.trips.concat(newList);
                }
                self.setData({
                    trips: newList,
                });
                const nextStart = res.data.data.next_start;
                self.setData({
                    start: nextStart,
                    loading: false,
                });
            },
        });
    },
    viewTrip(e) {
        const ds = e.currentTarget.dataset;
        wx.navigateTo({
            url: `../trip/trip?id=${ds.id}&name=${ds.name}`,
        });
    },
    toPersonal(){
        wx.navigateTo({
            url: '../home/index'
        })
    }
});