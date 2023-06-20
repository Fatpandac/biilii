export interface UserInfo {
  isLogin: boolean
  face: string
  uname: string
  level_info: {
    current_level: number
    current_min: number
    current_exp: number
    next_exp: number | string
  }
  mid: number
  money: number
  following: number
  follower: number
  dynamic_count: number
}

export const userStore = defineStore('user', () => {
  const userInfo = ref<UserInfo>({
    isLogin: false,
    face: '',
    uname: '',
    level_info: {
      current_level: 0,
      current_min: 0,
      current_exp: 0,
      next_exp: 0,
    },
    mid: 0,
    money: 0,
    following: 0,
    follower: 0,
    dynamic_count: 0,
  })

  const fetchData = async () => {
    const res = await getUserInfo()

    userInfo.value = {
      ...userInfo.value,
      ...res.data,
    }
  }

  fetchData()

  function setAll(newUserInfo: Partial<UserInfo>) {
    userInfo.value = {
      ...userInfo.value,
      ...newUserInfo,
    }
  }

  return {
    userInfo,
    setAll,
    fetchData,
  }
})
