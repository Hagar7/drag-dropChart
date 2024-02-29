import { useDrag } from "react-dnd";
import { Columns } from "../interfaces/interface";
import { useAppDispatch } from "../store/hooks";
import {
  setSelectedDimension,
  setSelectedMeasures,
} from "../store/store.slice";
export type ItemTypes = "dimension" | "measure";
const useDraggable = (type: ItemTypes, item: Columns) => {
  const dispatch = useAppDispatch();
  const [{ opacity }, drag] = useDrag(() => ({
    type,
    item,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        item.function === "measure"
          ? dispatch(setSelectedMeasures(item))
          : dispatch(setSelectedDimension(item));
      }
    },
  }));

  return { opacity, drag };
};

export default useDraggable;
