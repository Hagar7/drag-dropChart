import { ListItem } from "./style";
import { Columns } from "../../interfaces/interface";
import useDraggable from "../../customHooks/useDraggable";

const Item: React.FC<Columns> = ({ function: type, name, ...props }) => {
  const { opacity, drag } = useDraggable(type, { function: type, name });

  return (
    <ListItem ref={drag} style={{ opacity }} {...props}>
      {name}
    </ListItem>
  );
};

export default Item;
