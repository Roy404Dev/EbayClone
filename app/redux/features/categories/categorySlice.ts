import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the payload type
type payloadType = {
  category_id: number;
  created_at: string;
  id: number;
  label: string;
  image_url: string | null;
};

// Initial state type
type CategoryState = {
  value: payloadType[];
};

// Create the slice with the correct initial state type
export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    value: [
      {
        category_id: 0,
        created_at: '',
        id: 0,
        label: '',
        image_url: null
      }
    ],
  } as CategoryState,
  reducers: {
    increment: (state, action: PayloadAction<payloadType[]>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = categorySlice.actions;

export default categorySlice.reducer;
