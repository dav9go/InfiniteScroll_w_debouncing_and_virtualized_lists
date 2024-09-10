//Styles
import "../styles/InfoBlocks.css";
//Components
import InfoBlock from "./InfoBlock";

const InfoBlocks = () => {
  return (
    <div className="body-infoblocks">
      <InfoBlock
        title="Items"
        qty={1000}
        backgroundColor="gradient-blue-pink"
      />
      <InfoBlock title="DOM nodes" qty={1000} backgroundColor="gradient-blue" />
      <InfoBlock backgroundColor="transparent-with-border" />
    </div>
  );
};

export default InfoBlocks;
