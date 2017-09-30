require.config({
  baseUrl: '/public/assets',
  paths: {
    //借用的
    jquery: 'jquery/jquery.min',
    cookie:'jquery-cookie/jquery.cookie',
    //自己的
    common: '../js/common',
    login: '../js/login'
  },
  shim: {}
})