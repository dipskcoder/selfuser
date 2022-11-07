import React from "react";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Forgotpassword from "./Forgotpassword";
function Container() {
  return (
    <div className="ram">
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="/Forgotpassword" element={<Forgotpassword />} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}
export default Container;
