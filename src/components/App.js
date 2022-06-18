import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSetItems(){
    setItems((items) => items)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header 
        isDarkMode={isDarkMode} 
        onDarkModeClick={handleDarkModeClick} 
      />
      <ShoppingList items={handleSetItems} />
    </div>
  );
}

export default App;
