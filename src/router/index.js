import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import userEdit from '@/components/UserEdit'
import userList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userEdit',
      components: {
        default: userEdit,
        header: header
      }
    },
    {
      path: '/userList',
      name: 'userList',
      components: {
        default: userList,
        header: header
      }
    }
  ]
})
