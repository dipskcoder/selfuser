import React, { useState, useEffect } from "react";

function Forgotpassword() {
  let [count, Setcount] = useState(100);

  useEffect(() => {}, []);

  function Handelchange() {
    Setcount(count + 1);
  }

  // useEffect(() => {
  //   alert("Asdf");
  // }, [count]);

  let arr = [2, 43, 5, 6, 7];
  return (
    <>
      <button type="text">Enter email</button>
      <input type="text" onChange={Handelchange} />

      {count}
      <ul>
        {arr.map((element, index) => {
          return <li>{element}</li>;
        })}
      </ul>
    </>
  );
}
export default Forgotpassword;
