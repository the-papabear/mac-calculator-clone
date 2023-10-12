import * as math from "mathjs";

const Buttons = ({ input, setInput, reference }) => {
  const availableOperations = ["+", "-", "*", "/", "."];

  //I have to rethink this addInput methods to make key presses work.
  const addInput = (e) => {
    if (
      availableOperations.includes(e.target.name) &&
      availableOperations.includes(input.toString().slice(-1))
    )
      return;

    setInput((input += e.target.name).replace(/^0+/, ""));
  };

  const handleClear = () => setInput("0");
  const handleClearText = input !== "0" ? "C" : "AC";

  const toNegative = () => {
    setInput(Math.sign(input) === 1 ? -Math.abs(input) : Math.abs(input));
  };

  const moveTwoDecimalPlaces = () => setInput(input / Math.pow(10, 2));

  const handleEquals = () =>
    setInput(input === "0" ? "0" : math.evaluate(input));

  const handleKeyboardEvents = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      console.log(`${e.key} was pressed`);
      return handleEquals();
    }

    if (e.key === "Escape" || e.key === "`") {
      console.log(`${e.key} was pressed`);
      return handleClear();
    }

    if (e.key === "%") {
      console.log(`${e.key} was pressed`);
      return moveTwoDecimalPlaces();
    }

    if (e.key === "–") {
      console.log(`${e.key} was pressed`);
      return toNegative();
    }

    if (e.key === "=") {
      console.log(`${e.key} was pressed`);
    }

    if (e.key === "=") {
      console.log(`${e.key} was pressed`);
    }

    if (e.key === "=") {
      console.log(`${e.key} was pressed`);
    }

    if (e.key === "=") {
      console.log(`${e.key} was pressed`);
    }

    if (e.key === "1") {
      console.log(`${e.traget.name} was pressed.`);
      return addInput(e);
    }

    if (e.key === "2") {
      console.log(`${e.key} was pressed.`);
    }

    if (e.key === "3") {
      console.log(`${e.key} was pressed.`);
    }

    if (e.key === "4") {
      console.log(`${e.key} was pressed.`);
    }

    if (e.key === "5") {
      console.log(`${e.key} was pressed.`);
    }

    if (e.key === "6") {
      console.log(`${e.key} was pressed.`);
    }

    if (e.key === "7") {
      console.log(`${e.key} was pressed.`);
    }

    if (e.key === "8") {
      console.log(`${e.key} was pressed.`);
    }

    if (e.key === "9") {
      console.log(`${e.key} was pressed.`);
    }

    if (e.key === "0") {
      console.log(`${e.key} was pressed.`);
    }
  };

  return (
    <div
      className="calculator__input"
      ref={reference}
      onKeyPress={handleKeyboardEvents}
    >
      <button
        name={handleClearText}
        onClick={handleClear}
        className="input__btn input__btn--top"
      >
        {handleClearText}
      </button>
      <button onClick={toNegative} className="input__btn input__btn--top">
        +/-
      </button>

      <button
        name="%"
        onClick={moveTwoDecimalPlaces}
        className="input__btn input__btn--top"
      >
        %
      </button>

      <button
        name="/"
        onClick={addInput}
        className="input__btn input__btn--orange"
      >
        ÷
      </button>

      <button
        name="7"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        7
      </button>
      <button
        name="8"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        8
      </button>
      <button
        name="9"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        9
      </button>
      <button
        name="*"
        onClick={addInput}
        className="input__btn input__btn--orange"
      >
        ×
      </button>

      <button
        name="4"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        4
      </button>
      <button
        name="5"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        5
      </button>
      <button
        name="6"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        6
      </button>
      <button
        name="-"
        onClick={addInput}
        className="input__btn input__btn--orange"
      >
        –
      </button>

      <button
        name="1"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        1
      </button>
      <button
        name="2"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        2
      </button>
      <button
        name="3"
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        3
      </button>
      <button
        name="+"
        onClick={addInput}
        className="input__btn input__btn--orange"
      >
        +
      </button>

      <button
        name="0"
        onClick={addInput}
        className="input__btn input__btn--0 input__btn--numbers"
      >
        0
      </button>
      <button
        name="."
        onClick={addInput}
        className="input__btn input__btn--numbers"
      >
        ,
      </button>
      <button
        onClick={handleEquals}
        name="="
        autoFocus
        className="input__btn input__btn--equals input__btn--orange"
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
