<template>
<ul>
    <li v-for="recipe in getAllRecipes" :key="recipe.id">
        <div v-if="!isHidden[recipe.id]">
            <h2>{{recipe.name}}</h2>
            <button @click="toggle(recipe.id)">Show full recipe</button>
        </div>
        <div v-else>
            <h2>{{recipe.name}}</h2>
            <div>{{recipe.description}}</div>
            <button @click="deleteRecipe(recipe.id)">Delete this recipe</button>
        </div>
    </li>
</ul>
</template>

<script>
import store from '../store';
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            isHidden: {},
        }
    },
    methods: {
        toggle(id) {
            this.isHidden[id] = !this.isHidden[id];
        },
        deleteRecipe(id) {
            store.commit('deleteRecipe', id);
        }

    },
    computed: {
        ...mapGetters(['getAllRecipes']),
    },
}
</script>

<style lang="">

</style>
