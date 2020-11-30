<template lang='html'>
  <div id="film-item" v-if="film">
      <h3>{{film.title}}</h3>
      <p><span>Film Description</span>: {{film.description}}</p>
      <p><span>Film Director</span>: {{film.director}}</p>
      <p><span>Release Date</span>: {{film.release_date}}</p>
      <p><span>Rotten Tomatoes Score</span>:  {{film.rt_score}}</p>
  </div>
</template>

<script>
export default {
    name: 'film-details',
    props: ['film']
}

</script>

<style lang="css" scoped>
#film-item {
    box-sizing: border-box;
    height: auto;
    width: 50%;
    background: gold;
    color: black;
    padding: 0 20px;
    border: 1px solid rgb(204, 20, 20);
}
  #detailWrapper {
    box-sizing: border-box;
    background: #fff;
    padding: 10px;
    height: 100%;
    border-radius: 3px;
  }

  #flexWrapper {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    margin: 25px 0 0px;
    padding: 0;
    color: black;
  }

  p span {
    font-weight: bolder;
    font-style: italic;
    color: black;
  }

  #fav-button {
    background-color: black;
    border: solid red 2px;
    color: gold;
    margin: 42px 0px 5px 240px;
  }
</style>