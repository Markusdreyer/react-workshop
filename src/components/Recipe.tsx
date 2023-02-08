
export interface IRecipe {
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
}

const Recipe = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <ul>
                {recipe.ingredients.map((ingredient) => (
                    <li>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default Recipe;