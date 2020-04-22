import React from "react";
import ColorProvider from "./components/ColorProvider/ColorProvider.component";
import Red from "./Red";

const App = () => {
  return (
    <ColorProvider>
      <Red />
    </ColorProvider>
  );
};

export default App;
