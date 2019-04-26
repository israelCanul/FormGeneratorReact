import React, { Suspense } from "react";
import ReactDOM from "react-dom";
const Form = React.lazy(() => import("./components/formGenerator"));

ReactDOM.render(
  <Suspense fallback={<div>...</div>}>
    <Form />
  </Suspense>,
  document.getElementById("root")
);
