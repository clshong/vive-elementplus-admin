import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login } from '@/api/api';
import { setItem, getItem } from '@/utils/storage';
import { TOKEN, USERINFO } from '@/config';

export const useStaffStore = defineStore(
  'staff',
  () => {
    let token = ref(getItem(TOKEN) || '');
    let userInfo = ref(getItem(USERINFO) || {});
    let staff = ref();
    let roles = ref([]);
    let buttons = ref([]);

    // 用户登录

    async function userLogin(userInfo) {
      const res = await login(userInfo);
      if (res) {
        console.log(res);
        const _obj = res.data.data;
        token.value = _obj.token;
        setItem(TOKEN, _obj.token);
        userInfo.value = res.bizobj;
        setItem(USERINFO, _obj.data);
        return true;
      } else {
        return false;
      }
    }

    return {
      token,
      staff,
      userInfo,
      roles,
      buttons,
      userLogin
    };
  },
  {
    persist: true
  }
);
