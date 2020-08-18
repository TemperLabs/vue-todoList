<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">All Todos</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
* {
  box-sizing: border-box
}
ul,li,ol {
  list-style: none;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
