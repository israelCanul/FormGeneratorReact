import React, { Suspense } from "react";
import ReactDOM from "react-dom";
const Form = React.lazy(() => import("./components/formGenerator"));
import "../scss/index.scss";

ReactDOM.render(
  <Suspense fallback={<div>...</div>}>
    <Form />
  </Suspense>,
  document.getElementById("root")
);
