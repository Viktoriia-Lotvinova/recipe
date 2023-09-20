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
export default {
    props: {
        id: Number,
        name: String,
        description: String,
    }, 
    data() {
        return {
            isHidden: true,
        }
    },
    methods: {
        toggle(id) {
            this.isHidden = !this.isHidden;
        },
        deleteRecipe(id) {
            store.commit('deleteRecipe', id);
        }

    },
}
</script>

<style>

</style>
