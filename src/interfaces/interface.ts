export interface ColumnResponse {
  columns: Columns[];
}

export interface Columns {
  name: string;
  function: "dimension" | "measure";
}

export interface GetDimensionsAndMeasueResponse {
  data: Values[];
}

export interface Values {
  name: string;
  values: Array<number | string>;
}
