import { data } from "./recipes";

export async function seedRecipes() {
  try {
    const response = await fetch("https://restapi.fr/api/recipesrecoil");
    const recipes = await response.json();

    if (!recipes || recipes.length === 0) {
      await fetch("https://restapi.fr/api/recipesrecoil", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Données insérées avec succès.");
    } else {
      console.log("La base contient déjà des données, le seed est ignoré.");
    }
  } catch (error) {
    console.error("Erreur lors du seed des recettes :", error);
  }
}
