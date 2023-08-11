// 生成验证码
export const getCodeOfRandom = () => {
  // 所需随机抽取的样本数组
  let nums = new Array(
    'q',
    'w',
    'e',
    'r',
    't',
    'y',
    'u',
    'i',
    'o',
    'p',
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'l',
    'z',
    'x',
    'c',
    'v',
    'b',
    'n',
    'm',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
  );
  // 初始化 拼接字符串
  let str = '';
  for (let i = 0; i < 4; i++) {
    //每次生成一个0 - 61 之间的 number 作为随机获取验证码的下标
    let p = Math.floor(Math.random() * 1000) % 36;
    //拼接验证码  随机抽取大小写字母和数字
    str += nums[p];
  }
  return str;
};

//用户信息数据
export function createUserList() {
  return {
    userId: '1',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    username: 'admin',
    token: 'd33a7fdf547d2a086a96f4d38253cbc9'
  };
}
