import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, itemName, itemCategory}) {

const [newItem, setNewItem] = useState({ 
    id: uuid(),	
    name: itemName,
    category: itemCategory, 
	});

	function handleNewItem(event) {
		let name = event.target.name;
		let value = event.target.value;
		setNewItem([...newItem, {[name]: value }])
	}

  function onItemFormSubmit(event) => {
    event.preventDefault();
    handleNewItem(event)
  }
  
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNewItem}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onItemFormSubmit}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
