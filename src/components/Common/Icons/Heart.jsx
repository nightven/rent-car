import React from 'react'
import { IconContext } from 'react-icons';
import { CiHeart } from "react-icons/ci";

const Heart = () => {
    return (
      <>
        <IconContext.Provider value={ {color: "white", size: "1.5em", className: "heart",}} >
          <CiHeart />
        </IconContext.Provider>
      </>
    );
}

export default Heart