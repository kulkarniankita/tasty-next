"use client";

import { createContext, useReducer } from "react";

type State = {
  selectedCuisine?: string;
  dispatch?: () => null;
};

const initialState: State = {
  selectedCuisine: "",
};

type ActionType = {
  type: string;
  payload: { selectedCuisine: string };
};

const recipeReducer = (state = initialState, { type, payload }: ActionType) => {
  switch (type) {
    case "SELECTED_CUISINE":
      return { ...state, selectedCuisine: payload.selectedCuisine };
    default:
      return state;
  }
};

export const RecipeContext = createContext<{
  state: State;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export default function RecipeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(recipeReducer, initialState);
  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}
