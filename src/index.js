function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursore: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredientsInput = document.querySelector("#ingredients-input");
  let apiKey = "t0f9aeaa40c036e39cfbab4e7a210ao8";
  let context =
    "You know all the vegan recipes available and love sharing them. Always display ONLY ONE recipe per search. DO NOT include any headlines besides the actual name of the recipe. Follow user instructions and display the answer in html format where title of the recipe is included in class element named part1, ingredients in class element named part2 using list format  <ul><li></li><li></li><li></li> <li></li></ul> with numbers for each step and cooking instructions in class element named part3. Please always start part3 with words Cooking instructions in the top line. Please ALWAYS end each recipe with Enjoy 😋 after a small space";
  let prompt = `User instructions: Please provide recipe using ${ingredientsInput.value} as a main ingredient`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
