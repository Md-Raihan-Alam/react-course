import { createPortal } from "react-dom";
import { motion } from "framer-motion";
export default function Modal({ title, children, onClose }) {
  // const hiddenAnimationState={opacity:0,y:30};
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      {/* initital state allow us to define inital state for the to-be-performed animations */}
      {/* exit allow you to you want the element to be gone if gone by element dissapeared */}
      <motion.dialog
        // initial={{
        //   opacity: 0,
        //   y: 30,
        // }}
        // animate={{
        //   opacity: 1,
        //   y: 0,
        // }}
        // exit={{
        //   opacity: 0,
        //   y: 30,
        // }}
        // initial={hiddenAnimationState}
        // animate={{opacity:1,y:0}}
        // exit={hiddenAnimationState}
        // variants is used to define the states of the animations, best practice for reusability
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
