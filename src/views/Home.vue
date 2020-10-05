<template>
  <div>
    <div id="nav-bar" class="row justify-content-start align-items-center p-4">
      <p class="h5 white--text">Get-A-Recipe App - Powered By MyCookBook.io</p>
    </div>
    <div
      id="content-container"
      class="row justify-content-center align-items-start"
    >
      <div id="url-input-container" class="col-md-3 card p-3 m-5">
        <p class="h3">Enter A Recipe URL</p>
        <p>
          To get a recipe simply enter a url from any recipe website to see it
          displayed here.
          <br />
          e.g.
          https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/
        </p>
        <input v-model="recipeURL" type="text" placeholder="Enter a URL" />

        <button @click="getRecipe" class="btn btn-primary my-3">
          Get Recipe
        </button>
      </div>
      <div id="response-container" class="col-md-6 card m-5 p-3">
          <p v-if="!recipies" class="h4">Nothing to see here... yet!</p>
          <p v-if="msg != null">{{msg}}</p>
          <div v-if="spinner" class="row justify-content-center">
              <b-spinner label="Spinning"></b-spinner>
          </div>
        <recipe-display
          v-for="recipe in recipies"
          :key="recipe.uuid"
          :recipe="recipe"
        ></recipe-display>
      </div>
    </div>
    <div id="footer" class="row justify-content-center align-items-center">
      <p class="grey--text">&copy; 2020 EarthMountain WebStudio</p>
    </div>
  </div>
</template>

<script>
import RecipeDisplay from "../components/recipe-display";

import axios from "axios";

export default {
  name: "Home",
  components: {
    RecipeDisplay,
  },
  data() {
    return {
      recipies: null,
      recipeURL: null,
      spinner: false,
      msg: null,
      apiParams: {
        headers: {
          "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
          "x-rapidapi-key":
            "84963ea5f7mshdff757e386ee4bap1be221jsn90125f74a6e6",
          "content-type": "text/plain",
          accept: "text/plain",
        },
      },
    };
  },
  methods: {
    getRecipe() {
        this.spinner = true;
      axios
        .post(
          "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
          this.recipeURL,
          this.apiParams
        )
        .then((result) => {
          console.log(result.data);
          this.recipies = result.data;
          this.spinner = false
        })
        .catch((err) => {
          console.log(err.response);
          this.spinner = false;
          this.msg = "Whoops, Somthing went wrong loading your Recipe. Please refresh the page and try again."
        });

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