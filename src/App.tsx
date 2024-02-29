import { useEffect } from "react";
import Nav from "./Components/nav";
import SideNav from "./Components/sideNav";
import { getColumns } from "./store/store.slice";
import { useAppDispatch } from "./store/hooks";
import Form from "./Components/Form";
import Chart from "./Components/Chart";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getColumns());
  });
  return (
    <DndProvider backend={HTML5Backend}>
      <Nav />
      <div className="mainPage">
        <SideNav />
        <div className="page">
          <Form />
          <div className="chart">
          <Chart/>
          </div>
        </div>
      </div>
      </DndProvider>
  );
}

export default App;
