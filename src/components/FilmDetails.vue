<template>
  <div v-if="film">
      <h3>{{film.title}}</h3>
      <p>Film Description: {{film.description}}</p>
      <p>Film Director: {{film.director}}</p>
      <p>Release Date: {{film.release_date}}</p>
      <p>Rotten Tomatoes Score:  {{film.rt_score}}</p>
  </div>
</template>

<script>
export default {
    name: 'film-detail',
    props: ['film']
}

</script>

<style>

</style>