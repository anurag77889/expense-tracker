import React, { useCallback, useState } from "react";

const products = ["Apple", "Banana", "Carrot", "Dates", "Eggplant"];

function ProductFilter() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setfilteredProducts] = useState(products);

  const filterProducts = useCallback(() => {
    setfilteredProducts(
      products.filter((product) =>
        product.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  return (
    <div>
      <h2>Product Filter</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a Product"
      />
      <button onClick={filterProducts}>Filter</button>
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFilter;
