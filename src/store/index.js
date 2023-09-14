import { createStore } from 'vuex'


const store = createStore({
  state () {
    return {
      recipes: []
    }
  },
  mutations: {
    createRecipe (state, recipe) {
      state.recipes.push(recipe);
    },
    deleteRecipe(state, id){
      state.recipes = state.recipes.filter(recipe => recipe.id !== id);
    }
  },
  getters:{
    getAllRecipes(state){
      return state.recipes;
    }
  }
})

export default store