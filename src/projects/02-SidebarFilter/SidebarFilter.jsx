import styles from "./SidebarFilter.module.scss";
import { useEffect, useState } from "react";
import dataArray from "./data";

function SidebarFilter() {
  const [filter, setFilter] = useState("all");
  const [arrayOfData, setArrayOfData] = useState(dataArray);
  const [categories, setCategories] = useState([]);

  const [arrayToDisplay, setArrayToDisplay] = useState(arrayOfData);

  useEffect(() => {
    let arrayOfFilters = ["all"];

    dataArray.forEach((item) => {
      if (!arrayOfFilters.includes(item.category.toLowerCase())) {
        arrayOfFilters.push(item.category.toLowerCase());
      }
    });
    setCategories(arrayOfFilters);
  }, []);

  function handleChange(event) {
    console.log(event.target.value);
    setFilter(event.target.value);
  }
  useEffect(() => {
    if (filter === "all") {
      setArrayToDisplay(arrayOfData);
    } else {
      let newArray = arrayOfData.filter((item) => {
        return item.category.toLowerCase() === filter;
      });
      setArrayToDisplay(newArray);
    }
  }, [filter]);
  return (
    <div className={styles["body"]}>
      <header className={styles["header"]}>
        <h1>SidebarFilter</h1>
      </header>

      <main className={styles.main}>
        <section className={styles["filters-box"]}>
          {categories.map((item) => (
            <label key={item}>
              <input
                type="radio"
                name="category"
                value={item}
                onChange={handleChange}
              />
              {item}
            </label>
          ))}
        </section>

        <section>
          {arrayToDisplay.length > 0 ? (
            <div>
              {arrayToDisplay.map((item) => (
                <div key={item.id}>{item.product}</div>
              ))}
            </div>
          ) : (
            <p>No results</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default SidebarFilter;
