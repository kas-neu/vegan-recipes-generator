function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: `<div class="recipe-title">Recipe title</div>
     <div class="ingredient-list">
           <ul>
          <li>ingredient one</li>
          <li>ingredient two</li>
         <li>ingredient three</li>
         <li>ingredient four</li>
     </ul>
 </div>
   <div class="cooking-instructions">Cooking instructions</div>
  <div>Enjoy! 😋</div>`,
    autoStart: true,
    delay: 10,
    cursore: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
