import useUserStore from '@/store/modules/user'
import { useRoute, useRouter } from "vue-router";
import { randomString } from '@/utils'
import type { UserState } from '@/store/types';
const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
export default function onLoad(callback:any) {
  const data: any = {}
  data.nickName = '超级管理员'
  data.userName = 'admin'
  data.userId = 1
  data.roleId = 1
  data.token = randomString(100)
  data.roles = [
    {
      roleCode: 'ROLE_admin',
      roleId: 1,
      roleName: '超级管理员'
    }
  ]
  userStore.saveUser(data as UserState).then(() => {
    callback&&callback()
  })
}
