const TitleBar = () => {
  return (
    <div className="calculator__titlebar">
      <TitleButton />
    </div>
  );
};

function TitleButton() {
  return (
    <div className="titlebar__container">
      <button className="titlebar__btn titlebar__btn--red"></button>
      <button className="titlebar__btn titlebar__btn--yellow"></button>
      <button className="titlebar__btn titlebar__btn--green"></button>
    </div>
  );
}

export default TitleBar;
