import React, { useState } from "react";
import "../index.scss";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const CardApp = () => {
  // const [name, setName] = useState("Elena");

  // const handleCollapse = (targetId) => {
  //   //si el colapsable que he clickado es distinto que el guardado en el estado, seteo de nuevo el estado
  //   //con el valor del colapsable clickado, en caso contrario reseteo el valor del colapsable
  //   if (targetId !== state.activePanel) {
  //     setState({ activePanel: targetId });
  //   } else {
  //     setState({ activePanel: "" });
  //   }
  // };

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default CardApp;