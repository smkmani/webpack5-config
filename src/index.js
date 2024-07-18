import "./styles/index.scss";
const elvenShieldRecipe = {
  leatherScrips: 2,
  ironIngot: 1,
  refineMoonstone: 4,
};

const elvenShieldRecipeTest = {
  ...elvenShieldRecipe,
  lather: 1,
  refineMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenShieldRecipeTest);
