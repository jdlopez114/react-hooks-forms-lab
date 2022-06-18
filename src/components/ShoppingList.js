import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  // const [addItem, setAddItem] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = items
  .filter(
    (item) => (selectedCategory === "All") || item.category === selectedCategory)
  .filter(item => (item.name.toLowerCase().includes(search.toLowerCase())))

  function handleSearchChange (event){
    setSearch(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
      {itemsToDisplay.map((item) => (
					<Item
						key={item.id}
						name={item.name}
						category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
