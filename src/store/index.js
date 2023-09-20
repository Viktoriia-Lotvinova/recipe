import {
  createStore
} from 'vuex'


const store = createStore({
  state() {
    return {
      recipes: [],
      recipesComp: []
    }
  },
  mutations: {
    createRecipe(state, recipe) {
      state.recipes.push(recipe);
    },
    deleteRecipe(state, id) {
      state.recipes = state.recipes.filter(recipe => recipe.id !== id);
    },
    createRecipeComp(state, recipe) {
      state.recipesComp.push(recipe);
    },
    deleteRecipeComp(state, id) {
      state.recipesComp = state.recipesComp.filter(recipe => recipe.id !== id);
    },
  },
  getters: {
    getAllRecipes(state) {
      return state.recipes;
    },
    getAllRecipesComp(state) {
      return state.recipesComp;
    }
  }
})

export default store