import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => (
  <Loader
    className="Loader"
    type="Puff"
    color="#00BFFF"
    height={100}
    width={100}
    timeout={3000}
  />
);

export { Loading };
