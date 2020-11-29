<template>
  <li v-on:click="handleClick">{{film.title}}</li>
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name: 'film-item',
    props: ['film'],
    methods:{
        handleClick(){
            eventBus.$emit('film-item', this.film)
        }
    }
}
</script>

<style>

</style>