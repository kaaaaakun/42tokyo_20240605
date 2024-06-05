import products from "../products.json";
import "./Products.css";

function Products() {
  // 製品をmainリストとsubリストに分割
  const mainProducts = products.slice(0, 1);
  const subProducts = products.slice(1, 4);

  return (
    <>
      <h2>商品一覧</h2>
      <div className="product-container">
        <div className="main">
          {mainProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image_urls[0]}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-title">{product.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="sub">
          {subProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image_urls[0]}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-title">{product.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
