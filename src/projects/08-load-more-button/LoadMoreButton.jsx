import styles from "./LoadMoreButton.module.scss";
import { useEffect, useState } from "react";

function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = await response.json();
      console.log(data);

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Please, wait...</div>;
  }
  return (
    <>
      <div className={styles["load-more-container"]}>
        <div className={styles["product-container"]}>
          {products && products.length
            ? products.map((item) => (
                <div key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              ))
            : null}
        </div>
        <div className={styles["button-container"]}>
          <button disabled={disableButton} onClick={() => setCount(count + 1)}>
            Load more
          </button>
          {disableButton ? <p>You have reached to 100 products</p> : null}
        </div>
      </div>
    </>
  );
}

export default LoadMoreButton;
