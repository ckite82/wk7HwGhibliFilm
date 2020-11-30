<template>
  <div id="fav-films">
      <h4>Film Wishlist</h4>
      <ul id="fav-film-list">
          <li v-for="(film, index) in favFilms" v-bind:key="index">
              <span id="film-title"> Film: {{film.title}}</span>
                <button v-on:click="deleteFav(index)">Remove From Film Wishlist</button>
          </li>
      </ul>

  </div>
</template>

<script>
export default {
    name: 'fav-films',
    props: ['favFilms'],

    methods:{
    deleteFav: function(index){
        this.favFilms.splice(index, 1)
    }
}



}
</script>

<style>

</style>