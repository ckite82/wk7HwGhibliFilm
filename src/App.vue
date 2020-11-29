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
import FilmItem from './components/FilmItem.vue';
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

    eventBus.$on('film-item', (film) => {
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
  h1 {
    padding: 0px 75px;
    color: red;
  }
  .main-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    background-color: black;
    color: gold;
  }
</style>