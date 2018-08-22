module.exports = {
  head:{
    meta:[
      {"charset":"utf-8"},
      {"name": "viewport", content:"width-devices-width, initial-scale=1"},
      {"name":"renderer", content: "webkit"},
      {"hid":"keywords", name:'keywords', content:'VueBlog.Vuejs,Node.js,服务器渲染'},
      {
        "hid":'description',
        "name": 'description',
        "content":"VueBlog是一个机遇Vuejs的小型博客应用，让你可以分享自己的知识"
      }
    ]
  },
  loading:{color:'#42B903'},
  plugins:['~/plugins/components.js','~/plugins/filters.js'],
}