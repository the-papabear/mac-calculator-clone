import { Textfit } from "react-textfit";

const Screen = ({ result }) => {
  return (
    <div className="calculator__screen">
      <Textfit mode="single" max={45} className="screen__numbers">
        {result}
      </Textfit>
    </div>
  );
};

export default Screen;
