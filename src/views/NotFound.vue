<template>
  <div>
    <h1>Page Not Found</h1>
    <p>Oops! This page does not exist.</p>
    <button @click="$router.back()">Go Back</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
h1 {
  color: red;
  margin-bottom: 10px;
}
p {
  margin-bottom: 20px;
}
button {
  padding: 5px 15px;
  font-size: 14px;
  cursor: pointer;
}
</style>
