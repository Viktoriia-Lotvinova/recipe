<template>
<div v-if="isHidden">
    <button @click="toggle">Create a recipe</button>
</div>
<form v-else @submit.prevent="createRecipe">
    <input type="text" placeholder="Add recipe name" v-model="recipeName">
    <textarea type="text" placeholder="Add recipe description" v-model="recipeDescription"></textarea>
    <button>Save the recipe</button>
</form>
</template>

<script>
import store from '../store';

export default {
    data() {
        return {
            isHidden: true,
            recipeName: '',
            recipeDescription: '',
        }
    },
    methods: {
        toggle() {
            this.isHidden = !this.isHidden;
        },
        createRecipe() {
            let recipe = {
                id: Date.now(),
                name: this.recipeName,
                description: this.recipeDescription,
            };

            store.commit('createRecipe', recipe);

            this.recipeName = '';
            this.recipeDescription = '';
            this.toggle();
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>
