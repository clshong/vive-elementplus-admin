import { getCodeOfRandom, createUserList } from './utils';

export default [
  {
    url: '/Index/getCaptchaCode',
    method: 'post',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: {
          code_key: '6012e9ba65b442d2e5e7fec6e8eabcfd',
          code: getCodeOfRandom()
        }
      };
    }
  },
  {
    url: '/Index/login',
    method: 'post',
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body;
      if (username == 'admin' && password == '123456') {
        return { code: 201, data: { message: '账号或者密码不正确' } };
      }
      return {
        code: 200,
        msg: 'success',
        data: {
          data: createUserList()
        }
      };
    }
  },
  {
    url: '/Index/menuList',
    method: 'post',
    response: () => {
      return {
        status: {
          error_code: 0,
          error_msg: 'success'
        },
        bizobj: [
          {
            path: '/dashboard',
            component: `/dashboard/index`,
            meta: { title: '首页', icon: 'House', affix: true, sort: '99.99' }
          },
          {
            path: '/adminAuth/adminList',
            component: `/permissions-page/accountList`,
            meta: { title: '账号列表', icon: 'House', affix: true, sort: '88' }
          },
          {
            path: '/adminAuth/permissionList',
            component: `/permissions-page/permissionList`,
            meta: { title: '权限列表', icon: 'House', affix: true, sort: '77' }
          },
          {
            path: '/account/detail',
            component: `/permissions-page/accountDetail`,
            meta: { title: '账号详情', icon: 'House', affix: true, sort: '66' }
          }
        ]
      };
    }
  }
];
