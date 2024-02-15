import React from "react";
import { IconContext } from "react-icons";
import { MdOutlineClose } from "react-icons/md";

const Close = () => {
    return (
      <>
        <IconContext.Provider
          value={{ color: "grey", size: "2em" }}
        >
          <MdOutlineClose />
        </IconContext.Provider>
      </>
    );
};

export default Close;
