import { useState } from "react";
import "./App.css"; // we'll create this file

function App() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });

  // handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // add product locally
  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, { ...form, id: Date.now() }]);
    setForm({ name: "", price: "", description: "", category: "" });
  };

  // delete product
  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  // sort products by price
  const handleSort = () => {
    setProducts([...products].sort((a, b) => a.price - b.price));
  };

  return (
    <div className="container">
      <h1 className="title">🛒 Product Management</h1>

      {/* Add Product Form */}
      <form onSubmit={handleSubmit} className="product-form">
        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <button type="submit" className="btn primary">
          ➕ Add Product
        </button>
      </form>

      {/* Sort Button */}
      <button onClick={handleSort} className="btn secondary">
        ⬇️ Sort by Price
      </button>

      {/* Product List */}
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <h3>{p.name}</h3>
            <p className="price">₹{p.price}</p>
            <p>{p.description || "No description provided."}</p>
            <span className="category">{p.category}</span>
            <button onClick={() => handleDelete(p.id)} className="btn danger">
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
