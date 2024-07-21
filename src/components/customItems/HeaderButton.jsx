function HeaderButton({ text, setter, selected }) {
  return (
    <button disabled={selected} onClick={setter} className="customButton">
      {text}
    </button>
  );
}

export default HeaderButton;
