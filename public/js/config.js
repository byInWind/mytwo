require.config({
  baseUrl: '/public/assets',
  paths: {
    //借用的
    jquery: 'jquery/jquery.min',
    cookie: 'jquery-cookie/jquery.cookie',
    echarts: 'echarts/echarts.min',
    template: 'artTemplate/template-web',
    //自己的
    common: '../js/common',
    login: '../js/login',
    index: '../js/index',
    teacherlist: '../js/teacher-list',
    teacheradd: '../js/teacher-add',
    courselist: '../js/course-list',
    courseadd: '../js/course-add',
    util:'../js/util'
  },
  shim: {}
})