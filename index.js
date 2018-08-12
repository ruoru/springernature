var app = new Vue({ 
  el: '#app',
  data: {
    languageValue: 'EN',
  	language: {
      ZH: {
        nav1: '首页',
        nav1Sub1: '子链接1',
        nav1Sub2: '子链接1',
        nav1Sub3: '子链接1',
        nav1Sub4: '子链接1',
        nav1Sub5: '子链接1',
        n1Title1: '标题一',
        n1Description1: '随便一些描述',
        n1Title2: '标题一',
        n1Description2: '随便一些描述',
        n1Title3: '标题一',
        n1Description3: '随便一些描述',

        n3Button1: '按钮一',
        n3Button2: '按钮一',
        n3Button3: '按钮一',
        n3Button4: '按钮一',
        n3Button5: '按钮一',
        n3Button6: '按钮一',

        n4P1: '我们是一家致力于为全球科研界提供最佳服务的出版机构。我们帮助作者与人分享自己的新发现，帮助科研人员寻找、获得和了解他人的科研工作，并向图书馆和机构提供技术和数据上的创新服务。',
        n4P2: '我们利用自身的市场地位和影响力来支持对于科研共同体有重要意义的事务——捍卫科学，引领开放获取，大力倡导最高的科研质量和伦理标准。',

        n5Title: '了解我们的产品',
        n5Card1Title: '推动内容分享',
        n5Card1Description: 'SharedIt（“易分享”）作为一项推动内容免费分享的举措，可以让科研人员方便、快速、合法地与科研同行及更多的人，分享自己的论文内容。',
        n5Card2Title: '推动内容分享',
        n5Card2Description: 'SharedIt（“易分享”）作为一项推动内容免费分享的举措，可以让科研人员方便、快速、合法地与科研同行及更多的人，分享自己的论文内容。',
        n5Card3Title: '推动内容分享',
        n5Card3Description: 'SharedIt（“易分享”）作为一项推动内容免费分享的举措，可以让科研人员方便、快速、合法地与科研同行及更多的人，分享自己的论文内容。',
        n5Card4Title: '推动内容分享',
        n5Card4Description: 'SharedIt（“易分享”）作为一项推动内容免费分享的举措，可以让科研人员方便、快速、合法地与科研同行及更多的人，分享自己的论文内容。',

        n6Title: '创先之举',
        n6Card1Title: '推动内容分享',
        n6Card1Description: 'SharedIt（“易分享”）作为一项推动内容免费分享的举措，可以让科研人员方便、快速、合法地与科研同行及更多的人，分享自己的论文内容。',
        n6Card2Title: '推动内容分享',
        n6Card2Description: 'SharedIt（“易分享”）作为一项推动内容免费分享的举措，可以让科研人员方便、快速、合法地与科研同行及更多的人，分享自己的论文内容。',
        n6Card3Title: '推动内容分享',
        n6Card3Description: 'SharedIt（“易分享”）作为一项推动内容免费分享的举措，可以让科研人员方便、快速、合法地与科研同行及更多的人，分享自己的论文内容。',

        n7Title: '来自客户的反馈',
        n7Person1Description: '...我与编辑及工作人员的互动是非常重要的。 我想强调他们的编辑在我发表这篇论文中起了很大作用。 他真的为论文的逻辑框架和实验的结论提供反馈，从而测试某些假设...编辑是论文发布的一个关键。',
        n7Person1Name: 'Michael M. Halassa, M.D., Ph.D.',
        n7Person2Description: '...我与编辑及工作人员的互动是非常重要的。 我想强调他们的编辑在我发表这篇论文中起了很大作用。 他真的为论文的逻辑框架和实验的结论提供反馈，从而测试某些假设...编辑是论文发布的一个关键。',
        n7Person2Name: 'Michael M. Halassa, M.D., Ph.D.',

        n8Title: '关注我们',
        n8Card1Description: '关注我们的微信',
        n8Card2Description: '关注我们的微信',
        n8Card3Description: '关注我们的微信',

        footerC1Title: '列1标题',
        footerC1Row1: '产品',
        footerC1Row2: '产品描述',
        footerC1Row3: '产品描述',

        footerC2Title: '列1标题',
        footerC2Row1: '产品描述',
        footerC2Row2: '产品描述',
        footerC2Row3: '产品描述',
        footerC2Row4: '产品描述',

        footerC3Title: '列1标题',
        footerC3Row1: '产品描述',
        footerC3Row2: '产品描述',
        footerC3Row3: '产品描述',
        footerC3Row4: '产品描述',
        footerC3Row5: '产品',

        footerC4Title: '列1标题',
        footerC4Row1: '产品描述',
        footerC4Row2: '产品述',
        footerC4Row3: '产品描述架',

        footerC5Title1: '列1标题',
        footerC5Title2: '科研人员',
        footerC5TitleB: '科研人员',
        footerC5TitleDescription: '我们是一家全球领先的从事科技、教育和专业出版的机构。更多资讯，请点击以下图标，访问我们的主网站。',
        footerC5TitleButton: '底部按钮',
      },
      EN: {
        nav1: 'nav1',
        nav1Sub1: 'nav1Sub1',
        nav1Sub2: 'nav1Sub1',
        nav1Sub3: 'nav1Sub1',
        nav1Sub4: 'nav1Sub1',
        nav1Sub5: 'nav1Sub1',
        n1Title1: 'n1Title1',
        n1Description1: 'n1Description1',
        n1Title2: 'n1Title1',
        n1Description2: 'n1Description1',
        n1Title3: 'n1Title1',
        n1Description3: 'n1Description1',

        n3Button1: 'button1',
        n3Button2: 'button1',
        n3Button3: 'button1',
        n3Button4: 'button1',
        n3Button5: 'button1',
        n3Button6: 'button1',

        n4P1: 'some description in here',
        n4P2: 'some description in here',

        n5Title: 'learn about our production',
        n5Card1Title: 'n5Card1Title',
        n5Card1Description: 'n5Card1Description',
        n5Card2Title: 'n5Card1Title',
        n5Card2Description: 'n5Card1Description',
        n5Card3Title: 'n5Card1Title',
        n5Card3Description: 'n5Card1Description',
        n5Card4Title: 'n5Card1Title',
        n5Card4Description: 'n5Card1Description',

        n6Title: 'learn about our production',
        n6Card1Title: 'n5Card1Title',
        n6Card1Description: 'n5Card1Description',
        n6Card2Title: 'n5Card1Title',
        n6Card2Description: 'n5Card1Description',
        n6Card3Title: 'n5Card1Title',
        n6Card3Description: 'n5Card1Description',

        n7Title: 'learn about our production',
        n7Person1Description: 'n5Card1Description',
        n7Person1Name: 'Michael M. Halassa, M.D., Ph.D.',
        n7Person2Description: 'n5Card1Description',
        n7Person2Name: 'Michael M. Halassa, M.D., Ph.D.',

        n8Title: 'about our production',
        n8Card1Description: 'n5Card1Description',
        n8Card2Description: 'n5Card1Description',
        n8Card3Description: 'n5Card1Description',

        footerC1Title: 'footerC1Title',
        footerC1Row1: 'footerC1Row1',
        footerC1Row2: 'footerC1Row1',
        footerC1Row3: 'footerC1Row1',

        footerC2Title: 'footerC1Title',
        footerC2Row1: 'footerC1Row1',
        footerC2Row2: 'footerC1Row1',
        footerC2Row3: 'footerC1Row1',
        footerC2Row4: 'footerC1Row1',

        footerC3Title: 'footerC1Title',
        footerC3Row1: 'footerC1Row1',
        footerC3Row2: 'footerC1Row1',
        footerC3Row3: 'footerC1Row1',
        footerC3Row4: 'footerC1Row1',
        footerC3Row5: 'footerC1Row1',

        footerC4Title: 'footerC1Title',
        footerC4Row1: 'footerC1Row1',
        footerC4Row2: 'footerC1Row1',
        footerC4Row3: 'footerC1Row1',

        footerC5Title1: 'footerC1Title',
        footerC5Title2: 'footerC1Title',
        footerC5TitleB: 'about us',
        footerC5TitleDescription: 'there may need some description',
        footerC5TitleButton: 'footerC1Title',
      }
    }
  },
  methods: {
    changeLanguage: function (e) {
      this.languageValue = e.target.value;
      console.log(this.languageValue)
    }
  }
});
