<template>
  <div>
      <ul>
          <film-item v-for="(film, index) in films" :film="film" :key="index"></film-item>
      </ul>
  </div>
</template>

<script>
import FilmItem from './FilmItem.vue';

export default {
    name: 'films-list',
    props: ['films'],
    components: {
        'film-item': FilmItem
    }
}
</script>

<style lang='css' scoped>
    
</style>