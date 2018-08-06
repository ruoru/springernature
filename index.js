var app = new Vue({ 
  el: '#app',
  data: {
  	language: 'zh_cn',
    message: 'Hello Vue!'
  },
  methods: {
    changeLanguage: function (value) {
      this.language = value;
    }
  }
});
