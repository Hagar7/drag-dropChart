import React from "react";
import {
  InputBtn,
  InputField,
  InputFieldContainer,
  InputName,
  Wrapper,
} from "./style";
import { ConnectDropTarget } from "react-dnd";
import { Columns } from "../../interfaces/interface";
import Item from "../item";
import { useAppDispatch } from "../../store/hooks";
import {
  clearSelectedDimension,
  clearSelectedMeasures,
} from "../../store/store.slice";

interface InputProps {
  name: string;
  dropRef: ConnectDropTarget;
  columns: Columns[];
}

const Input: React.FC<InputProps> = ({ name, dropRef, columns }) => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper
      initial={{ x: "100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 1, type: "spring" }}
      ref={dropRef}
    >
      <InputName>{name}</InputName>
      <InputFieldContainer>
        <InputField>
          {columns.map((column) => (
            <Item
              key={column.name}
              {...column}
              {...{ style: { color: "black", margin: "0", padding: "7px" } }}
            />
          ))}
        </InputField>
        <InputBtn
          onClick={() =>
            dispatch(
              name === "Dimension"
                ? clearSelectedDimension()
                : clearSelectedMeasures()
            )
          }
        >
          Clear
        </InputBtn>
      </InputFieldContainer>
    </Wrapper>
  );
};

export default Input;
