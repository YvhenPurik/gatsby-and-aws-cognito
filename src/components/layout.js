import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";

let  Layout = (props) => (
  <>
    <Header />
    {props.children}
    <div
      style={{ margin: `0 auto`, maxWidth: 650, backgroundColor: `#eeeeee` }}
    >
      <Sidebar />
     
    </div>
  </>
);

export default Layout