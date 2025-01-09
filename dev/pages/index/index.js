/*
 * @Description: Description
 * @Author: lishen
 * @Date: 2023-08-31 16:46:44
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-11-25 22:22:23
 */
Page({
  data: {
    padding: 0,
    markers: [
      {
        // 训练高亮
        year: 2025,
        month: 1,
        day: 2,
        type: 'festival',
        text: 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiB2aWV3Qm94PSIwIDAgMTIgMiIgZmlsbD0ibm9uZSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zMDQ2XzEwNTQzKSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8zMDQ2XzEwNTQzKSI+CjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjIiIGZpbGw9IiM3QkI3RkYiLz4KPC9nPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDJfMzA0Nl8xMDU0MykiPgo8cmVjdCB4PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIyIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMzA0Nl8xMDU0MykiLz4KPC9nPgo8L2c+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMzA0Nl8xMDU0MyIgeDE9IjYiIHkxPSIxIiB4Mj0iMTIiIHkyPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIG9mZnNldD0iMC4xMzcyMjIiIHN0b3AtY29sb3I9IiNBMzVDRkYiLz4KPHN0b3Agb2Zmc2V0PSIwLjMxNzIyMiIgc3RvcC1jb2xvcj0iIzYxRTJGRiIvPgo8c3RvcCBvZmZzZXQ9IjAuNjMwMDA5IiBzdG9wLWNvbG9yPSIjRkZGNjREIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGNEU0RSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzMwNDZfMTA1NDMiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMiIgcng9IjEiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMzA0Nl8xMDU0MyI+CjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDJfMzA0Nl8xMDU0MyI+CjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjIiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2KSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPg==',
        style: {}
      },
      {
        // 比赛日
        year: 2025,
        month: 1,
        day: 5,
        type: 'corner',
        text: '休',
        style: { color: '#409EFF' }
      },
      {
        // 已完成
        year: 2025,
        month: 1,
        day: 10,
        type: 'schedule',
        style: { color: '#409EFF' }
      }
    ]
  },
  onLoad() {
    const { bottom } = wx.getMenuButtonBoundingClientRect();
    this.setData({
      padding: bottom
    });
  },
  handleLoad() {
    const calendar = this.selectComponent('#calendar');
    console.log('calendar-load', calendar);
  },
  handleClick({ detail }) {
    console.log('calendar-date-click', detail);
  },
  handleChange({ detail }) {
    console.log('calendar-date-change', detail);
  },
  handleViewChange({ detail }) {
    console.log('calendar-view-change', detail);
  }
});
