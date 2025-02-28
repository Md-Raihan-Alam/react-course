import { useState } from "react";

import NewChallenge from "./NewChallenge";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isCreatingNewChallenge, setIsCreatingNewChallenge] = useState();

  function handleStartAddNewChallenge() {
    setIsCreatingNewChallenge(true);
  }

  function handleDone() {
    setIsCreatingNewChallenge(false);
  }

  return (
    <>
      {/* exit won't work because the NewChallenge here depends on state so exit will happen fast, for that we need AnimatePresence*/}
      {/* AnimatePresence is meant to be used as a wrapper around code that conditionally displays or removes elements*/}
      <AnimatePresence>
        {isCreatingNewChallenge && <NewChallenge onDone={handleDone} />}
      </AnimatePresence>
      <header id="main-header">
        <h1>Your Challenges</h1>
        <motion.button
          // need these three props to animate
          // onHoverStart={{}}
          // onHoverEnd={{}}
          // animate={{scale:}}
          // else you can use this
          // whiel do not have spritn transiton, so add it
          whileHover={{ scale: 1.1, backgroundColor: "#8b11f0" }} // animate color
          transition={{ type: "spring", stiffness: 500 }}
          onClick={handleStartAddNewChallenge}
          className="button"
        >
          Add Challenge
        </motion.button>
      </header>
    </>
  );
}
