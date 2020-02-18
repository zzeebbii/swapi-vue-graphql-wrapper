<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">People</router-link> |
      <router-link to="/planets">Planets</router-link>
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
  color: #2c3e50;
  width: 70%;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.cards {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}

.loader {
  background: url("./assets/spinner.gif") no-repeat;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  background-size: 100px;
}
</style>
