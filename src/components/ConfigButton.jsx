import React from "react";
import Button from "./Button";

import { GoGear } from "react-icons/go"
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <Link to='/config'
      style={{
        position: 'fixed',
        top: '30px',
        right: '30px',
      }}
    >
      <Button>
        <GoGear />
      </Button>
    </Link>
  )
}