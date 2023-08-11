import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, getPermission } from '@/api/api'
import { setItem, getItem, removeAllItem } from '@/utils/storage'
import { TOKEN, USERINFO } from '@/config'
import { setTimeStamp } from '@/utils/auth'
import { formatPermissionList } from '@/utils/index.js'
import router, { resetRouter } from '@/router/index.js'



export const useStaffStore = defineStore('staff', () => {

  let token = ref(getItem(TOKEN) || '')
  let userInfo = ref(getItem(USERINFO) || {})
  let roles = ref([])
  let buttons = ref([])

  // 用户登录

  async function userLogin(userInfo) {
    const res = await login(userInfo)

    if (res) {
      token.value = res.bizobj.sys_token
      setItem(TOKEN, res.bizobj.sys_token)
      userInfo.value = res.bizobj
      setItem(USERINFO, res.bizobj)
      // 保存登录时间
      setTimeStamp()
      resolve()
      return true
    } else {
      return false
    }
  }


  function getPermissionData(context) {
    return new Promise((resolve, reject) => {
      getPermission()
        .then(data => {
          let obj = formatPermissionList(data.bizobj)
          let role_arr = obj.role_arr//菜单权限
          let button_arr = obj.button_arr//button权限
          role_arr.push({ url: '/third' })
          role_arr.push({ url: '/third/editor' })
          role_arr.push({ url: '/third/markdown' })
          let info = {
            roles: role_arr
          }
          console.log(role_arr)
          this.commit('user/setRoles', role_arr)
          this.commit('user/setButtons', button_arr)
          resolve(info)
        })
        .catch(err => {
          console.log(err);
        })
    })
  }

  function logout() {
    resetRouter()

    this.commit('user/setToken', '')
    this.commit('user/setUserInfo', {})
    this.commit('user/setRoles', [])
    this.commit('user/setButtons', [])
    this.commit('app/removeTagsView', {
      type: 'all'
    })
    removeAllItem()
    router.push('/login')
  }


  return {
    token,
    userInfo,
    roles,
    buttons,
    userLogin,
    getPermissionData,
    logout,
  }
},
  {
    persist: true
  }
)
