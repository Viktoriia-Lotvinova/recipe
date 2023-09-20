<template>
<ul>
    <RecipeItem  v-for="recipe in getAllRecipes" :key="recipe.id" :id="recipe.id" :name="recipe.name" :description="recipe.description"/>
</ul>
</template>

<script>
import store from '../store';
import RecipeItem from './RecipeItem.vue';
import {
    mapGetters
} from 'vuex'
export default {
    components:{
        RecipeItem
    },
    computed: {
        ...mapGetters(['getAllRecipes']),
    },
}
</script>

<style lang="">

</style>
