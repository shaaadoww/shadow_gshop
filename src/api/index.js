/*
  包含n个接口请求函数的模块
  向外暴露多个 不会用default
  函数的返回值：promise对象
*/
import ajax from './ajax'
//在config/index.js中已经配置了一个跨域代理，匹配所有以 '/api'开头的请求路径，从后台拿数据

// 1、根据经纬度获取位置详情 --- params参数
export const reqAddress = geohash => ajax(`/api/position/${geohash}`);
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax('/api/index_category');
// 3、根据经纬度获取商铺列表 --- query参数
export const reqShops  = (longitude,latitude) => ajax('/api/shops',{longitude,latitude});

// 4、根据经纬度和关键字搜索商铺列表
export const reqSearchShop = (geohash,keyword) => ajax('/api/search_shops',{geohash,keyword});
// 6、用户名密码登陆
export const reqPwdLogin = ({name,pwd,captcha}) => ajax('/api/login_pwd',{name,pwd,captcha},'POST');
// 7、发送短信验证码
export const reqSendCode = (phone) => ajax('/api/sendcode',{phone});
// 8、手机号验证码登陆
export const reqSmsLogin = (phone,code) => ajax('/api/login_sms',{phone,code},'POST');
// 9、根据会话获取用户信息
export const reqUserInfo = () => ajax('/api/userinfo');
// 10、用户登出
export const reqLogout = () => ajax('/api/logout');

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/info');

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/ratings');

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/goods');

