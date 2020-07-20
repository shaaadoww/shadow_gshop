/*
* 使用mock.js库提供mock数据接口
* 不需要向外暴露任何数据，只需要保证能执行即可
* 在入口文件中引入，保证执行
* Mock.mock( rurl, template )
* 记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。
* */
import Mock from 'mockjs'
import data from './data'

// 返回goods的接口
Mock.mock('/goods', {code: 0, data: data.goods});
// 返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings});
// 返回info的接口
Mock.mock('/info', {code: 0, data: data.info});
