import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type MachineType } from "../../types/MachineType";

interface MachineTypesState {
  items: MachineType[];
}

const initialState: MachineTypesState = {
  items: [],
};

const machineTypesSlice = createSlice({
  name: "machineTypes",
  initialState,
  reducers: {
    addMachineType: (state, action: PayloadAction<MachineType>) => {
      state.items.push(action.payload);
    },
    updateMachineType: (state, action: PayloadAction<MachineType>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteMachineType: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addMachineType, updateMachineType, deleteMachineType } =
  machineTypesSlice.actions;
export default machineTypesSlice.reducer;
