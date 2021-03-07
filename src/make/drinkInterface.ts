export interface DrinkInterface {
  name: string;
  glass: string;
  category?: string | null;
  ingredients?: (IngredientInterface)[] | null;
  garnish?: string | null;
  preparation?: string | null;
}

export interface IngredientInterface {
  unit?: string | null;
  amount?: number | null;
  ingredient?: string | null;
  label?: string | null;
  special?: string | null;
}