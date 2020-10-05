<template>
  <div>
    <div id="nav-bar" class="row justify-content-start align-items-center p-4">
      <p class="h5 white--text">Get-A-Recipe App</p>
    </div>
    <div
      id="content-container"
      class="row justify-content-center align-items-center"
    >
      <div id="url-input-container" class="col-md-3 card p-3 m-5">
        <p class="h3">Enter A Recipe URL</p>
        <p>
          To get a recipe simply enter a url from any recipe website to see it
          displayed here
        </p>
        <input v-model="recipeURL" type="text" placeholder="Enter a URL">
        <button @click="getRecipe" class="btn btn-primary my-3">Get Recipe</button>
      </div>
      <div id="response-container" class="col-md-6 card m-5 p-3">
          <recipe-display></recipe-display>
      </div>
    </div>
    <div id="footer" class="row justify-content-center align-items-center">
      <p class="grey--text">&copy; 2020 EarthMountain WebStudio</p>
    </div>
  </div>
</template>

<script>
import RecipeDisplay from '../components/recipe-display'

export default {
  name: "Home",
  components: {
      RecipeDisplay
  },
  data() {
    return {
      recipies: null,
      recipeURL: null,
    };
  },
  methods: {
    getRecipe() {
      this.axios.post();
    },
  },
};
</script>

<style scoped>
#nav-bar {
  background-color: #2196f3;
  height: 10vh;
}

#content-container {
  min-height: 80vh;
}

#url-input-container {
  min-height: 40vh;
  box-shadow: 3px 3px 15px grey;
}

#response-container {
  min-height: 60vh;
  box-shadow: -3px 3px 15px grey;
}

#footer {
  background-color: #2196f3;
  height: 10vh;
}
</style>