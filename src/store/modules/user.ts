import { defineStore } from 'pinia'
import store from '../pinia'

const defaultAvatar = ''

const useUserStore = defineStore('user-info', {
  state: () => {
    return {
      userId: 0,
      roleId: 0,
      token: '',
      userName: '',
      nickName: '',
      avatar: defaultAvatar,
    }
  },
  actions: {
    saveUser(userInfo:any) {
      return new Promise<any>((resolve) => {
        this.userId = userInfo.userId
        this.roleId = userInfo.roleId
        this.token = userInfo.token
        this.userName = userInfo.userName
        this.nickName = userInfo.nickName
        this.avatar = userInfo.avatar || defaultAvatar
        resolve(userInfo)
      })
    },
    isTokenExpire() {
      return !this.token
    },
    changeNickName(newNickName: string) {
      this.nickName = newNickName
    },
    logout() {
      return new Promise<void>((resolve) => {
        this.$reset()
        localStorage.clear()
        sessionStorage.clear()
        resolve()
      })
    },
  },
  presist: {
    enable: true,
    resetToState: true,
    option: {
      exclude: ['userName'],
    },
  },
})

export default useUserStore

export function useUserStoreContext() {
  return useUserStore(store)
}
