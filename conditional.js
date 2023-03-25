(() => {
  function getTranslation(x) {
    if (x === "a") {
      return "Stairs";
    } else if (x === "b") {
      return "Teeth";
    } else if (x === "c") {
      return "Head";
    } else if (x === "d") {
      return "Lies";
    } else if (x === "e") {
      return "Suite";
    }

    return `${x} not found`;
  }

  console.log(getTranslation("e"));
})();

// /// using object literal and nullinsh coalescing operator
(() => {
  const getTranslation = (x) => {
    const obj = {
      a: "Stairs",
      b: "Teeth",
      c: "Head",
      d: "Lies",
      e: "Suite",
    };
    return obj[x] ?? `${x} not found`;
  };

  console.log(getTranslation("e"));
})();

///8 BALL WITH JUST yes, no, maybe
(() => {
  const ranNum = Math.floor(Math.random() * 3);

  ///function
  function outCome() {
    if (ranNum === 0) {
      return "yes";
    } else if (ranNum === 1) {
      return "maybe";
    } else {
      return "no";
    }
  }
  console.log(`${ranNum} : ${outCome()}`);
})();

(() => {
  const ranNum = Math.floor(Math.random() * 8);

  const outCome = () => {
    const answerArray = ["yes", "no", "maybe"];
    return answerArray[ranNum] ?? `${ranNum} is not an option`;
  };
  console.log(`${ranNum} : ${outCome()}`);
})();

(() => {})();
