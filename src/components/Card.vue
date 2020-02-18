<template>
  <div class="card">
    <div class="title">
      <h2>{{ title }}</h2>
    </div>
    <div class="info">
      <h3>{{ info }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    info: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #42b983;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  text-align: center;

  .title {
    border-bottom: 1px solid #42b983;
    padding: 0.5rem;

    h1 {
      margin: 0;
    }
  }

  .info {
    padding: 0.5rem;
  }
}
</style>
