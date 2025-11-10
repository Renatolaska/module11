<template>
  <div class="container">
    <h1>Random Quote Generator</h1>
    <p v-if="loading">Loading...</p>
    <p v-else>"{{ quote }}"</p>
    <p class="author" v-if="author">— {{ author }}</p>
    <button @click="getQuote" :disabled="loading">Get New Quote</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'RandomQuotes',
  data() {
    return {
      quote: '',
      author: '',
      loading: false
    }
  },
  methods: {
    async getQuote() {
      this.loading = true
      try {
        const response = await axios.get('https://quote-garden.onrender.com/api/v3/quotes/random')
        const quoteObj = response.data.data[0]
        this.quote = quoteObj.quoteText
        this.author = quoteObj.quoteAuthor
      } catch (error) {
        console.error(error)
        this.quote = 'Oops! Something went wrong.'
        this.author = ''
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.getQuote()
  }
}
</script>

<style>
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.author {
  font-style: italic;
  color: #555;
  margin-top: 5px;
}
</style>
