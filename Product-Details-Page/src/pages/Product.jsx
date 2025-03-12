import { useState } from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const [count, setCount] = useState(0);

  const { details } = props;

  function handleIncrementClick() {
    setCount((c) => c + 1);
  }
  function handleDecrementClick() {
    if (count > 0) {
      setCount((c) => c - 1);
    }
  }

  //Link ile ürüne tıklayınca /products/id sayfasına yönlendirdik.
  return (
    <Link to={`/products/${details.id}`} style={{ color: 'green', textDecoration: "none"}}>
      <div className="product">
        <img src={details.image} width="50" alt={details.name} />
        <div className="product-info">
          <h2>{details.name}</h2>
          <p>{details.description}</p>
        </div>
      </div>
    </Link>
  );
}
