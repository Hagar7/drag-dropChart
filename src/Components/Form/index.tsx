import useDropable from "../../customHooks/useDropable";
import { useAppSelector } from "../../store/hooks";
import Input from "../Input";

const Form = () => {
  const { drop: measureDrop } = useDropable("measure");
  const { drop: dimensionDrop } = useDropable("dimension");
  const selectedDimension = useAppSelector(
    (state) => state.corta.selectedDimension
  );
  const selectedMeasures = useAppSelector(
    (state) => state.corta.selectedMeasures
  );

  return (
    <>
      <Input
        name="Dimension"
        dropRef={dimensionDrop}
        columns={selectedDimension ? [selectedDimension] : []}
      />
      <Input name="Measures" dropRef={measureDrop} columns={selectedMeasures} />
    </>
  );
};

export default Form;
