export interface IRecipe {
  _id: string;
  title: string;
  preparationTime: number;
  ingredients: unknown;
  steps: string[];
  description: string;
  rating: number;
}
