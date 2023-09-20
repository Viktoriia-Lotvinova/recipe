<template>
<li>
    <div v-if="isHidden">
        <h2>{{name}}</h2>
        <button @click="toggle">Show full recipe</button>
    </div>
    <div v-else>
        <h2>{{name}}</h2>
        <div>{{description}}</div>
        <button @click="deleteRecipe(id)">Delete this recipe</button>
    </div>
</li>
</template>

<script>
import store from '../store';
import {
    useToggle
} from '../composition/toggle'

import {
    ref
} from 'vue'

export default {
    props: {
        id: Number,
        name: String,
        description: String,
    },
    setup() {
        const deleteRecipe = (id) => {
            store.commit('deleteRecipeComp', id);
        }

        return {
            ...useToggle(),
            deleteRecipe,
        }
    }

}
</script>

<style>

</style>
