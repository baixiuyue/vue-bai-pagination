# vue-bai-pagination

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
# main.js引入

import vuePagination from './lib/index.js' 

Vue.use(vuePagination)

# 页面内 调用
 :page-index="pageNumber" 页码
 :total="total" 总条数
 :page-size="pageSize"  每页显示条数
 @change="getData"  请求获取数据的方法 参数为页码

<vue-pagination :page-index="pageNumber" :total="total" :page-size="pageSize" @change="getData"></vue-pagination>
