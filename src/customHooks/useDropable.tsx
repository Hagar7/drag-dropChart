import { useDrop } from "react-dnd";
import { ItemTypes } from "./useDraggable";

const useDropable = (type: ItemTypes) => {
  const [collectedProps, drop] = useDrop(() => ({
    accept: type,
  }));
  return { collectedProps, drop };
};

export default useDropable;
