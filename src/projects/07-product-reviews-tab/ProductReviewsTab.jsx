import { useEffect, useState } from "react";
import styles from "./ProductReviewsTab.module.scss";
import { FaStar } from "react-icons/fa";
function ProductReviewsTab({ url, limit, numberOfStars }) {
  // Use States
  const [dataArray, setDataArray] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const [averegeMark, setAverageMark] = useState(0);
  const [filter, setFilter] = useState("all");

  // Use Effects

  useEffect(() => {
    if (url !== "") {
      fetchData(url, limit);
    }
  }, [url]);

  // Functions

  async function fetchData(getUrl, limits) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}_limit=${limits}`);
      const data = await response.json();

      if (data) {
        let newArray = data.map((item) => {
          return { ...item, stars: getRandomArbitrary(1, numberOfStars) };
        });
        let sumOfStars = newArray.reduce((acc, curr) => {
          return acc + curr.stars;
        }, 0);
        setAverageMark(sumOfStars / newArray.length);
        console.log(newArray);
        setDataArray(newArray);
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("Something went wrong...");
      setLoading(false);
    }
  }
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
  }

  function userBox(item) {
    return (
      <div className={styles["user-box"]} key={item.id}>
        <p>Name: {item.name}</p>
        <p>Email: {item.email}</p>
        <p>Comment: {item.body}</p>
        <p>
          {[...Array(item.stars)].map((_, index) => (
            <FaStar style={{ color: "gold" }} key={index} />
          ))}
        </p>
      </div>
    );
  }

  const filteredReviews = dataArray.filter((item) => {
    if (filter === "all") return true;
    return item.stars === Number(filter);
  });
  return (
    <>
      <header>
        <h1>Product Reviews Tab</h1>
      </header>
      <main>
        <section>
          <p>
            Averege Mark: {averegeMark} / {numberOfStars}{" "}
            <FaStar style={{ color: "gold" }} />
          </p>
          <div className={styles["filter-container"]}>
            <button onClick={() => setFilter("all")}>All</button>
            {[...Array(numberOfStars)].map((_, index) => (
              <button key={index} onClick={() => setFilter(`${index + 1}`)}>
                {index + 1}
              </button>
            ))}
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className={styles["box-container"]}>
              {errorMsg === null ? (
                filteredReviews.length === 0 ? (
                  <p className={styles["no-reviews"]}>There is no data</p>
                ) : (
                  filteredReviews.map((item) => userBox(item))
                )
              ) : (
                <p>{errorMsg}</p>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default ProductReviewsTab;
