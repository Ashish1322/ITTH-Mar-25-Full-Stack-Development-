function Cell({ text, id, clickFunc }) {
  return (
    <div onClick={() => clickFunc(id)} className="cell">
      {text}
    </div>
  );
}
export default Cell;
