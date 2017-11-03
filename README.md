# board

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# vue 模板
## 参考网址：http://element-cn.eleme.io/#/zh-CN

# vue路由传参数
``` bash
# this.$router.push({path:'/xxx',query:{id:1}});//类似get传参，通过URL传递参数
# this.$router.push({path:'/xxx',params:{id:1}});//类似post传参
```
# vue路由接收参数
``` bash
## this.$route.query.id
## this.$route.params.id
```

# 路由跳转刷新问题
``` bash
watch: {
      '$route'(to, from){
        //在这里重新刷新一下
        this.getParams();
      }
    }
```
