<template>
  <div class="container">

    <form>
      <div class="well">
        <h4>Add user</h4>
        <div class="form-group">
          <label class="pull-left">사번</label>
          <input type="text" class="form-control" placeholder="사번" v-model="User.user_id">
        </div>
        <div class="form-group">
          <label class="pull-left">닉네임</label>
          <input type="text" name="name" placeholder="닉네임" v-model="User.user_name" v-validate="'required'" :class="{'form-control': true, 'is-danger': errors.has('name') }">
        </div>
        <div class="form-check">
          <input type="checkbox" id="authority" class="form-check-input" v-model="User.authority" :true-value="1" :false-value="0"> <label for="authority" class="form-check-label">관리자 권한</label>
        </div>
      </div>
      <button type="button" class="btn btn-primary btn-large btn-block full-width" @click="validateBeforeSubmit">등록</button>
      <router-link to="userList" class="btn btn-success btn-large btn-block full-width">사용자 리스트</router-link>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'Partners',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        User: {
          user_id: '',
          user_name: '',
          authority: '0'
        }
      }
    },
    methods: {
      validateBeforeSubmit() {
        this.$validator.validateAll()
          .then((result) => {
            if (result) {
                this.addToAPI();
                return;
            }
            alert('Correct them errors!')
          })
      },
      addToAPI() {
          let newUser = {
            user_id: this.User.user_id,
            user_name: this.User.user_name,
            authority: this.User.authority
          };
          console.log(newUser.authority + "되냐?");

          axios.post('http://localhost:3000/users', newUser)
            .then((response) => {
              console.log(response);
              this.$router.push({name: 'userList'}); // 데이터 등록 후 페이지 이동
            })
            .catch((error) => {
              console.log(error);
            })
      }
    }
  }
</script>
