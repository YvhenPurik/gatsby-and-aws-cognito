import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";

let  Layout = (props) => (
  <>
    <Header />
    
    <div
      style={{ margin: `0 auto`, maxWidth: 650, backgroundColor: `#eeeeee` }}
    >
      <Sidebar />
      {props.children}
    </div>
  </>
);

export default Layout