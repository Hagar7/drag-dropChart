import { Side, Title, TitleContainer } from "./style";
import { useAppSelector } from "../../store/hooks";
import Item from "../item";

const SideNav = () => {
  const columns = useAppSelector((state) => state.corta.columns);
  return (
    <Side
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
      }}
    >
      <TitleContainer>
        <Title>Columns</Title>
      </TitleContainer>
      {columns.map((column, index) => (
        <Item {...column} key={column.name} />
      ))}
    </Side>
  );
};

export default SideNav;
