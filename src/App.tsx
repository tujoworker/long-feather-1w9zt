import React from "react";
// import { Anchor } from "@dnb/eufemia/elements";
import { Button } from "@dnb/eufemia";
// import { Icon } from "@dnb/eufemia";
// import { chevron_right } from "@dnb/eufemia/icons";
import "./styles.css";

console.log(Button);

export default function App() {
  return (
    <div className="App">
      <div>
        <h3>Anchor in block container</h3>
        <span>
          test
          {/* <Button>test</Button> */}
          {/* <Anchor
            href="/"
            target="_self"
            className="dnb-button--size-responsive"
          >
            Label
          </Anchor> */}
        </span>
        {/* <span className="inline-flex">
          <Anchor
            href="/"
            target="_self"
            className="dnb-button--size-responsive"
          >
            Label <Icon icon={chevron_right} />
          </Anchor>
        </span> */}
      </div>
    </div>
  );
}
