import React from "react";

const Button = ({ onClickLMore }) => (
  <button id="loadmore" className="Button" type="button" onClick={onClickLMore}>
    Load more
  </button>
);

export { Button };
