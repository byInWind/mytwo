require.config({
  baseUrl: '/public/assets',
  paths: {
    //借用的
    jquery: 'jquery/jquery.min',
    cookie:'jquery-cookie/jquery.cookie',
    echarts:'echarts/echarts.min',
    //自己的
    common: '../js/common',
    login: '../js/login',
    index:'../js/index'
  },
  shim: {}
})