import React from "react";

import Header from "./header";
import Sidebar from "./sidebar";

let  Layout = ({children}) => (
  <>
    <Header />
    
    <div
      style={{ margin: `0 auto`, maxWidth: 650, backgroundColor: `#eeeeee` }}
    >
      <Sidebar />
      {children}
    </div>
  </>
);

export default Layout