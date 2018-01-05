<template>
  <div class="header">
    <h1 class="title">Partners</h1>
    <ul class="gnb">
      <li><router-link to="/">사용자 등록</router-link></li>
      <li><router-link to="/userList">사용자 리스트</router-link></li>
    </ul>
  </div>
</template>

<script>

</script>

<style>
  .header {
    margin-bottom: 20px;
    text-align: center;
  }
  .gnb {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .gnb li {
    display: inline-block;
    margin-left: 10px;
  }
</style>
