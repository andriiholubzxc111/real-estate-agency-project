<template>
   <div id="app">
   <nav class="navbar">
    <router-link to="/" class="logo-text" style="color: white;">
     Estate Agency
    </router-link>
    <div class="nav-links">
     <router-link to="/buy">
      Buy
     </router-link>
     <router-link to="/sell">
      Sell
     </router-link>
    </div>
   </nav>
  </div>
  <router-view/>
</template>


<script>

export default {
  name: 'App',

}
</script>

<style src="./assets/styles.css">

</style>