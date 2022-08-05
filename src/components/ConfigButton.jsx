import React from "react";
import Button from "./Button";

import { GoGear } from "react-icons/go"

export default (props) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '30px',
        right: '30px',
      }}
    >
      <Button>
        <GoGear />
      </Button>
    </div>
  )
}