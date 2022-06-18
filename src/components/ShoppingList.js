import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [addItem, setAddItem] = useState(items)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  let itemsToDisplay = addItem
  .filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  .filter((item) => {
    if (search === "") {
      return true;
    } else {
      return item.name.includes(search);
    }
  });

  itemsToDisplay = itemsToDisplay.filter(item => (item.name.toLowerCase().includes(search.toLowerCase())))

  function handleSearchChange (event){
    setSearch(event.target.value)
  }

  function onItemFormSubmit(event){
    setAddItem([...addItem, event])
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
