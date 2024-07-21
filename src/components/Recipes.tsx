// Importing "react" is still required when using methods from it
import { useState, FC } from "react";

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

// ES7 Object spread example
const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1,
};
interface AppProps {}
interface testProps {
  leatherStrips: number;
  ironIngot: number;
  refinedMoonstone: number;
}
type tplotOptions = {
  [key: string]: number;
};
const Recipes: FC<AppProps> = () => {
  const [recipe, setRecipe] = useState<tplotOptions>(elvenShieldRecipe);
  console.log("recipe", recipe);
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield</button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlets
      </button>

      <ul>
        {Object.keys(recipe).map((material: string) => {
          return (
            <li key={material}>
              {material}: {recipe[material]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Recipes;
