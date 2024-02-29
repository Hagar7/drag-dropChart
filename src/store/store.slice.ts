import {
  Action,
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import {
  ColumnResponse,
  Columns,
  GetDimensionsAndMeasueResponse,
} from "../interfaces/interface";
import axios from "axios";

export interface StateInterface {
  isLoading: boolean;
  columns: Columns[];
  selectedMeasures: Columns[];
  error: string;
  data: GetDimensionsAndMeasueResponse | null;
  selectedDimension: Columns | null;
}

const initialState: StateInterface = {
  isLoading: false,
  error: "",
  columns: [],
  data: null,
  selectedDimension: null,
  selectedMeasures: [],
};

export const getColumns = createAsyncThunk(
  "getColumns",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get<ColumnResponse>(
        `https://plotter-task-8019e13a60ac.herokuapp.com/columns`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getDimAndMeasure = createAsyncThunk(
  "getDimAndMeasure",
  async (body, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.post<GetDimensionsAndMeasueResponse>(
        `https://plotter-task-8019e13a60ac.herokuapp.com/data`,
        body
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const cortaSlice = createSlice({
  name: "corta",
  initialState,
  reducers: {
    setSelectedDimension: (state, action: PayloadAction<Columns>) => {
      if (state.selectedDimension) state.columns.push(state.selectedDimension);
      state.selectedDimension = action.payload;
      state.columns = state.columns.filter(
        (item) => item.name !== action.payload.name
      );
    },
    setSelectedMeasures: (state, action: PayloadAction<Columns>) => {
      state.selectedMeasures.push(action.payload);
      state.columns = state.columns.filter(
        (item) => item.name !== action.payload.name
      );
    },
    clearSelectedDimension: (state) => {
      if (state.selectedDimension) state.columns.push(state.selectedDimension);
      state.selectedDimension = null;
    },
    clearSelectedMeasures: (state) => {
      if (state.selectedMeasures) state.columns.push(...state.selectedMeasures);
      state.selectedMeasures = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getColumns.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getColumns.fulfilled, (state, action) => {
      state.columns = action.payload.columns;
    });
    builder.addCase(getColumns.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "";
    });
    builder.addCase(getDimAndMeasure.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDimAndMeasure.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(getDimAndMeasure.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "";
    });
  },
});

export default cortaSlice.reducer;
export const {
  setSelectedDimension,
  setSelectedMeasures,
  clearSelectedDimension,
  clearSelectedMeasures
} = cortaSlice.actions;
