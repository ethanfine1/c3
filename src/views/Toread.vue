<template>
<div class="big">
<div>
<h1>To Read</h1>
<hr>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in toRead" :key="book.id">
    <div class = "singleBook">
      <p class="title">{{book.title}}<p>
        <p class = "author">{{book.author}}</p>
      <div class="image">
        <img :src="'/images/'+book.image">
      </div>
      <p class="review">{{book.review}}</p>
    </div>
    </div>
  </div>
</div>
</div>
<h1 style="background:white">Fan Favorites!</h1>
<hr>
<div class="wrapper1">
<div class = "all">
<div v-for="suggestion in suggestions" v-bind:key="suggestion.id">
  <div class="suggestion">
      <p class="title">{{suggestion.title}}</p>
      <p class = "author">{{suggestion.author}}</p>
      <p class = "reasoning">{{suggestion.reasoning}}</p>
  </div>
</div>
</div>
</div>
</div>
</template>

<style>
,big {
  background: white;
}
.wrapper1 {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
  .title{
    margin: 0;
    font-size: 40px;
  }
  .author {
    margin-top: 0;
    font-size: 30px;
  }
  .reasoning {
    font-size: 25px;
  }

  .all{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .suggestion {
    border: 3px solid;
    width: 400px;
  }
</style>

<script>
export default {
  name: 'home',
  data() {
    return {}
  },
  computed: {
    suggestions() {
      return this.$root.$data.getSuggestions();
    },
    toRead() {
      return this.$root.$data.getToRead();
    }
  }
}
</script>
