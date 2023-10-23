<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="counter">
      {{ $store.state.counter }}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
  

  </div>
</template>

<script>



export default {
  name: 'HomeView',
  
}
</script>

<style>
div{
  margin-bottom: 10px;
}
.counter{
  font-size:80px;
}
button{
  font-size:40px;
  width: 100px;
  margin: 0 10px;
}
</style>
