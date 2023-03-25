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

  console.log(getTranslation("f"));
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

/// rock paper scissors
(() => {
  ///your choice
  //   const myChoice = prompt("Please type your choice: rock, paper, or scissors");
  //   console.log(myChoice);
  //   /// computers choice
  //   let randomNum = Math.floor(Math.random() * 3);
  //   console.log(randomNum);
  //   let computerChoice;
  //   if (randomNum === 0) {
  //     computerChoice = "rock";
  //   } else if (randomNum === 1) {
  //     computerChoice = "paper";
  //   } else if (randomNum === 2) {
  //     computerChoice = "scissors";
  //   }
  //   console.log(computerChoice);
  //   const myChoiceVsComputerChoice = `${myChoice}${computerChoice}`;
  //   console.log(myChoiceVsComputerChoice);
  //   //prettier-ignore
  //   if (myChoiceVsComputerChoice === "rockrock" || myChoiceVsComputerChoice === "paperpaper" || myChoiceVsComputerChoice === "scissorsscissors") {
  //   console.log("TIE");
  // }else if(myChoiceVsComputerChoice === "rockscissors" || myChoiceVsComputerChoice === "paperrock" || myChoiceVsComputerChoice === "scissorspaper") {
  //   console.log("You are a WINNER!!!🤪")
  // }else if(myChoiceVsComputerChoice === "rockpaper" || myChoiceVsComputerChoice === "paperscissors" || myChoiceVsComputerChoice === "scissorsrock") {
  //   console.log("Sorry, You are a LOSER!!😫")
  // }
})();

(() => {
  // ///your choice
  // const myChoice = prompt("Please type your choice: rock, paper, or scissors");
  // let randomNum = Math.floor(Math.random() * 3);
  // const computerChoice = (choice) => {
  //   console.log(choice);
  //   const rpsObj = {
  //     0: "rock",
  //     1: "paper",
  //     2: "scissors",
  //   };
  //   return `${rpsObj[choice]}`;
  // };
  // const computerChoiceReturned = computerChoice(randomNum);
  // const myChoiceVsComputerChoice = `${myChoice}${computerChoiceReturned}`;
  // const outCome = (final) => {
  //   /// pass the argument in
  //   console.log(final);
  //   const outComeObj = {
  //     rockrock: "TIE", /// the argument becomes the key
  //     paperpaper: "TIE",
  //     scissorsscissors: "TIE",
  //     rockscissors: "You are a WINNER😁",
  //     paperrock: "You are a WINNER😁",
  //     scissorspaper: "You are a WINNER😁",
  //     /// use the nullish coalescent operator so I dont have to write these below. basically else
  //     // rockpaper: "Sorry, You are a LOSER!!😭",
  //     // paperscissors: "Sorry, You are a LOSER!!😭",
  //     // scissorsrock: "Sorry, You are a LOSER!!😭",
  //   };
  //   /// index the value of the key from the object
  //   return outComeObj[final] ?? `${final} Sorry You are a LOSER`;
  // };
  // console.log(myChoice, computerChoiceReturned);
  // console.log(outCome(myChoiceVsComputerChoice));
})();

(() => {
  const outCome = (final) => {
    /// pass the argument to the parameter
    const outComeObj = {
      rockrock: "TIE", /// the parameter becomes the key
      paperpaper: "TIE",
      scissorsscissors: "TIE",
      rockscissors: "You are a WINNER😁",
      paperrock: "You are a WINNER😁",
      scissorspaper: "You are a WINNER😁",
    };
    /// index the value of the key from the object
    return outComeObj[final] ?? `Sorry You are a LOSER`;
  };

  const computerChoice = (choice) => {
    const rpsObj = {
      0: "rock",
      1: "paper",
      2: "scissors",
    };
    return `${rpsObj[choice]}`;
  };

  const play = (promptParameter) => {
    //prettier-ignore
    if(promptParameter !== "rock" && promptParameter !== "paper" && promptParameter !== "scissors") {
      alert("Please select one of the following: rock, paper, scissors")
    }else {
      let randomNum = Math.floor(Math.random() * 3);
      const computerChoiceReturned = computerChoice(randomNum);
      
      const myChoiceVsComputerChoice = `${promptParameter}${computerChoiceReturned}`;
      
      const outComeReturned = outCome(myChoiceVsComputerChoice);
      return `You: ${promptParameter}, Computer: ${computerChoiceReturned} ....${outComeReturned}`;
    }
  };

  const myChoice = prompt("Please type your choice: rock, paper, or scissors");
  const playReturned = play(myChoice);
  console.log(playReturned);
})();
