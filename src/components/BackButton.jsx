import React from "react";
import Button from "./Button";

import { IoMdArrowBack } from "react-icons/io"
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <Link to='/'
      style={{
        position: 'fixed',
        top: '30px',
        left: '30px',
      }}
    >
      <Button>
        <IoMdArrowBack />
      </Button>
    </Link>
  )
}