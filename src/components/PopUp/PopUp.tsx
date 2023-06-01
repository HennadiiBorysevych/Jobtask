import React from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";

const Example = () => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLButtonElement | null>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  return (
    <>
      <button type="button" ref={setReferenceElement}>
        Reference
      </button>
      {ReactDOM.createPortal(
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          Popper
        </div>,
        document.querySelector("#pop-up") as HTMLElement
      )}
    </>
  );
};

export default Example;
