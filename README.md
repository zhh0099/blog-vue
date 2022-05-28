# 技术栈

**vue3+webpack5+vuex+vue-router+element-plus**

# 项目特点

* UI设计参考hexo-theme-butterfly，并使用element-plus重构，美观简洁。
* 使用webpack5搭建vue3开发环境，并从加快打包速度和减少打包体积两方面，进行一定程度上的性能优化。
* 体验vue3组合式API搭配vuex+vue-router。

# 项目结构

```
blog-vue
├─ .eslintrc.js
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ css
│  │  │  └─ global.css
│  │  ├─ fonts
│  │  │  ├─ iconfont.css
│  │  │  ├─ iconfont.ttf
│  │  │  ├─ iconfont.woff
│  │  │  └─ iconfont.woff2
│  │  ├─ img
│  │  │  ├─ img-1.jpg
│  │  │  ├─ img-11.jpg
│  │  │  ├─ img-12.jpg
│  │  │  ├─ img-13.jpg
│  │  │  ├─ img-2.jpg
│  │  │  ├─ img-3.jpg
│  │  │  ├─ img-4.jpg
│  │  │  ├─ img-5.jpg
│  │  │  ├─ img-6.jpg
│  │  │  ├─ img-7.jpg
│  │  │  ├─ img-8.jpg
│  │  │  ├─ img-9.png
│  │  │  ├─ me.jpg
│  │  │  ├─ userAvator.jpg
│  │  │  └─ you.jpg
│  │  └─ js
│  │     └─ emoji.js
│  ├─ components
│  │  ├─ BackTop.vue
│  │  ├─ Comment
│  │  │  ├─ CommentEmoji.vue
│  │  │  ├─ CommentPaging.vue
│  │  │  ├─ CommentReply.vue
│  │  │  └─ TalkComment.vue
│  │  ├─ layout
│  │  │  ├─ VlogAside.vue
│  │  │  ├─ VlogFooter.vue
│  │  │  ├─ VlogHeader.vue
│  │  │  └─ VlogHome.vue
│  │  ├─ model
│  │  │  ├─ EmailModel.vue
│  │  │  ├─ ForgetModel.vue
│  │  │  ├─ LoginModel.vue
│  │  │  ├─ RegisterModel.vue
│  │  │  └─ SearchModel.vue
│  │  └─ TalkSwiper.vue
│  ├─ main.js
│  ├─ router
│  │  └─ index.js
│  ├─ store
│  │  └─ index.js
│  ├─ styles
│  │  └─ element
│  │     └─ index.scss
│  └─ views
│     ├─ Album
│     │  ├─ VlogAlbum.vue
│     │  └─ VlogPhoto.vue
│     ├─ Article
│     │  └─ VlogArticle.vue
│     ├─ Talk
│     │  ├─ TalkInfo.vue
│     │  └─ VlogTalk.vue
│     ├─ VlogAbout.vue
│     ├─ VlogClassification.vue
│     ├─ VlogLink.vue
│     ├─ VlogRecord.vue
│     └─ VlogTag.vue
└─ webpack.config.js
```