/* eslint-disable import/default */
import Mock from 'mockjs'
import { defineFakeRoute } from 'vite-plugin-fake-server/client'

export default defineFakeRoute([
  {
    url: '/api/user',
    method: 'get',
    response: () => ({
      code: 200,
      data: Mock.mock({
        id: '@id', // 使用 Mock.js 的占位符来生成随机 ID
        name: '@name', // 随机生成名字
        email: '@email', // 随机生成邮箱
        age: '@integer(20, 50)', // 生成 20 到 50 岁的随机年龄
      }),
      message: '成功获取用户信息',
      status: 200,
    }),
  },
  {
    url: '/api/products',
    method: 'get',
    response: () =>
      Mock.mock({
        'list|10': [
          // 生成一个包含 10 个商品的列表
          {
            id: '@id',
            name: '@ctitle(5, 10)', // 随机生成 5 到 10 个字的标题
            price: '@float(100, 1000, 2, 2)', // 生成 100 到 1000 的价格，两位小数
            image: '@image("200x100", "#50B347", "#FFF", "Mock.js")', // 生成随机图片
          },
        ],
      }),
  },
])
// import { httpGet } from '@/utils/http'
// const {
//   loading,
//   error,
//   data: user,
//   run,
// } = useRequest<{
//   id: number
//   name: string
//   email: string
//   age: number
// }>(() => httpGet('/api/user'), { immediate: true })

// const users = computed(() => [user.value])
