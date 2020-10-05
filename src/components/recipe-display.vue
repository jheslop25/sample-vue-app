<template>
  <div id="recipe-container">
    <div class="row justify-content-center align-items-center">
      <img
        id="title-image"
        class="mb-3 col-md-6"
        :src="recipe.images[0]"
        alt="main image"
      />
      <div class="col-md-6">
          <div id="title" class="row justify-content-center">
        <p class="h4 text-center">{{ recipe.name }}</p>
      </div>
      <div id="description" class="row text-left">
        <p>{{ recipe.description }}</p>
      </div>
      </div>
    </div>
    <div class="row justify-content-center align-items center">
      <button
        @click="showIngredients = !showIngredients"
        class="btn btn-success m-3"
      >
        Ingredients
      </button>
      <button @click="showSteps = !showSteps" class="btn btn-success m-3">
        Steps
      </button>
    </div>
    <div v-if="showIngredients" id="ingred-container">
      <p
        v-for="ingredient in recipe.ingredients"
        :key="ingredient"
        class="text-left"
      >
        * {{ ingredient }}
      </p>
    </div>
    <div v-if="showSteps">
      <p
        v-for="step in recipe.instructions[0].steps"
        :key="step"
        class="text-left"
      >
        * {{ step }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "recipe-display",
  props: {
    recipe: Object,
  },
  data() {
    return {
      showIngredients: false,
      showSteps: false,
    };
  },
};
</script>

<style scoped>
#title-image {
  max-height: 300px;
  max-width: 300px;
  border-radius: 6px;
}
</style>