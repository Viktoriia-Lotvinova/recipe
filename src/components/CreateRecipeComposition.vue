<template>
<div v-if="isHidden">
    <button @click="toggle">Create a recipe</button>
</div>
<form v-else @submit.prevent="createRecipe">
    <input type="text" placeholder="Add recipe name" v-model="form.recipeName">
    <textarea type="text" placeholder="Add recipe description" v-model="form.recipeDescription"></textarea>
    <button>Save the recipe</button>
</form>
</template>

<script>
import {
    useStore
} from 'vuex';

import {
    useToggle
} from '../composition/toggle';

import {
    reactive
} from 'vue';

export default {
    setup() {
        let form = reactive({
            recipeName: '',
            recipeDescription: ''
        })

        const store = useStore();

        const createRecipe = () => {
            let recipe = {
                id: Date.now(),
                name: form.recipeName,
                description: form.recipeDescription,
            };

            store.commit('createRecipeComp', recipe);

            form.recipeName = '';
            form.recipeDescription = '';

            toggle();
        }

        return {
            ...useToggle(),
            form,
            createRecipe
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
