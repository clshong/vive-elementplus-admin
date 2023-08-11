import axios from '@/utils/request';

/**
 * 登录
 */
export function login(data) {
  return axios({
    url: '/Index/login',
    method: 'post',
    data
  });
}
/**
 * 获取图形验证码
 */
export function getCode(data) {
  return axios({
    url: '/Index/getCaptchaCode',
    method: 'post',
    data
  });
}

// 获取菜单
export function getRolePermission(data) {
  return axios({
    url: '/Index/menuList',
    method: 'post',
    data
  });
}
