<template>
  <div id="app">
    <h1>Ghibli Films</h1>
    <div class="main-container">
      <films-list :films="films"></films-list>
      <film-details :film='selectedFilm'></film-details>
    </div>
      <button v-if="!favFilms.includes(selectedFilm)" v-on:click="addToFavs">Add To Wishlist</button>
      <fav-films :favFilms="favFilms"></fav-films>
  </div>
</template>

<script>
import FilmsList from './components/FilmsList.vue';
import FilmItem from './components/FilmItem.vue';
import FilmDetails from './components/FilmDetails.vue';
import FavFilms from './components/FavFilms.vue';
import {eventBus} from './main';


export default {
  name: 'App',

  data(){
    return {
      films: [],
      selectedFilm: null,
      favFilms: []
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

  methods:{
    addToFavs: function() {
      if(this.favFilms.indexOf(this.selectedFilm) === -1) {
        this.favFilms.push(this.selectedFilm);
      }
    }
  },

  components:{
    "films-list": FilmsList,
    "film-details": FilmDetails,
    "fav-films": FavFilms
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