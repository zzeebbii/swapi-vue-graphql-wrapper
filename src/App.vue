<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">People</router-link> |
      <router-link to="/planets">Planets</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./common.scss";
</style>
