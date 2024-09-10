const InfoBlock = ({ title, qty, backgroundColor }) => {
  return (
    <div className={`info-block ${backgroundColor}`}>
      <div className="block-header">
        <h3>{title}</h3>
        <div>icon</div>
      </div>
      <div className="block-body">
        <p>{qty}</p>
      </div>
    </div>
  );
};

export default InfoBlock;
