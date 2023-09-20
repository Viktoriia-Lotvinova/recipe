<template>
<ul>
    <RecipeItemComposition v-for="recipe in getAllRecipesComp" :key="recipe.id" :id="recipe.id" :name="recipe.name" :description="recipe.description" />
</ul>
</template>

    
<script>
import store from '../store';
import RecipeItemComposition from './RecipeItemComposition.vue';
import {
    mapGetters
} from 'vuex';

export default {
    components: {
        RecipeItemComposition
    },
    computed: {
        ...mapGetters(['getAllRecipesComp']),
    },
}
</script>

    
<style lang="">

    </style>
