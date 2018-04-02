<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import $ from "jquery"
export default {
  name: 'App',
  mounted(){
    //  $(document).ready(function(){
    //    console.log(navigator.userAgent)

    //    document.documentElement.clientWidth<=1024?document.documentElement.style.fontSize = document.documentElement.clientWidth /21 + 'px':
    //    document.documentElement.style.fontSize ='16px';
    //  })
  }
}
</script>

<style>

</style>
