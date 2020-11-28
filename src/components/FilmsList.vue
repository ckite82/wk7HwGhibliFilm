<template>
  <div>
      <ul>
          <film-select v-for="(film, index) in films" :film="film" :key="index"></film-select>
      </ul>
  </div>
</template>

<script>
import FilmSelect from './FilmSelect.vue';

export default {
    name: 'films-list',
    props: ['films'],
    components: {
        'film-select': FilmSelect
    }
}
</script>

<style>

</style>