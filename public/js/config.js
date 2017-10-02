require.config({
  baseUrl: '/public/assets',
  paths: {
    //借用的
    jquery: 'jquery/jquery.min',
    cookie: 'jquery-cookie/jquery.cookie',
    echarts: 'echarts/echarts.min',
    template: 'artTemplate/template-web',
    bootstrap: 'bootstrap/js/bootstrap.min',
    validate: 'validate/jquery-validate.min',
    form: 'jquery-form/jquery.form',
    datepicker: 'bootstrap-datepicker/js/bootstrap-datepicker.min',
    language: 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    ckeditor: 'ckeditor/ckeditor',
    region: 'jquery-region/jquery.region',
    uploadify: 'uploadify/jquery.uploadify.min',
    //自己的
    common: '../js/common',
    status: '../js/status',
    login: '../js/login',
    index: '../js/index',
    teacherlist: '../js/teacher-list',
    teacheradd: '../js/teacher-add',
    courselist: '../js/course-list',
    courseadd: '../js/course-add',
    util: '../js/util',
    settings: '../js/settings'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    validate: {
      deps: ['jquery']
    },
    language: {
      deps: ['jquery', 'datepicker']
    },
    //
    ckeditor: {
      exports: 'CKEDITOR'
    },
    uploadify: {
      deps: ['jquery']
    }
  }
})