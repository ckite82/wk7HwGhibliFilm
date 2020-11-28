<template>
  <div id="app">
    <h1>Ghibli Films</h1>
    <div class="main-container">
      <films-list :films="films"></films-list>
      <film-detail :film='selectedFilm'></film-detail>
    </div>
  </div>
</template>

<script>
import FilmsList from './components/FilmsList.vue';
import FilmSelect from './components/FilmSelect.vue';
import FilmDetails from './components/FilmDetails.vue';
import {eventBus} from './main';

export default {
  name: 'App',

  data(){
    return {
      films: [],
      selectedFilm: null
    };
  },

  mounted(){
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(films => this.films = films)

    eventBus.$on('film-selected', (film) => {
      this.selectedFilm = film;
    })
  },

  components:{
    "films-list": FilmsList,
    "film-detail": FilmDetails
  }
}
</script>

<style>
  .main-container {
    display: flex;
    justify-content: space-between;
  }
</style>