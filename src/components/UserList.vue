<template>
  <div class="container">

    <table class="table">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">사번</th>
        <th scope="col">닉네임</th>
        <th scope="col">관리 권한</th>
        <th scope="col">등록일</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(User, index) in Users" :key="User.id">
        <th scope="row">{{ index + 1 }}</th>
        <td> {{ User.user_id }} </td>
        <td> {{ User.user_name }} </td>
        <td v-if="User.authority === true"> 권한 있음 </td>
        <td v-if="User.authority === false"> 권한 없음 </td>
        <td> {{ getDateFormat(User.created_date) }} </td>
      </tr>
      </tbody>
    </table>

    <router-link to="/" class="btn btn-success btn-large btn-block full-width">사용자 등록</router-link>
  </div>
</template>

<script>
  import axios from 'axios';
  import moment from 'moment';

  export default {
    name: 'user',
    data () {
      return {
        Users: [],
      }
    },
    mounted() {
      axios.get('http://localhost:3000/users')
        .then((response) => {
          console.log(response.data);
          this.Users = response.data.reverse();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    methods: {
        getDateFormat: function(date) {
            return moment(date).format('YYYY-MM-DD');
        }
    }
  }
</script>
