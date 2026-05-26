import styles from "./Accordion.module.scss";
import { useState } from "react";
import data from "./data";

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleSelected, setMultipleSelected] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multipleSelected];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      cpyMultiple.push(getCurrentId);
    } else {
      cpyMultiple.splice(findIndexOfCurrentId, 1);
    }
    setMultipleSelected(cpyMultiple);
    console.log(cpyMultiple);
  }
  return (
    <div className="body">
      <main className={styles["accordion"]}>
        <h1 className={styles["accordion__title"]}>Accordion</h1>{" "}
        <button
          className={styles["accordion__btn"]}
          onClick={() => {
            setEnableMultiSelection((prevStatus) => !prevStatus);
            setSelected(null);
            setMultipleSelected([]);
          }}
        >
          {enableMultiSelection ? "Disable" : "Enable"} multi selection
        </button>
        <div className={styles["wrapper"]}>
          <div>
            {data.length > 0 ? (
              data.map((item) => (
                <div className={styles["wrapper__box"]} key={item.id}>
                  <div
                    className={styles["wrapper__box-question"]}
                    onClick={
                      enableMultiSelection
                        ? () => handleMultiSelection(item.id)
                        : () => handleSingleSelection(item.id)
                    }
                  >
                    <h3>{item.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === item.id ||
                  multipleSelected.indexOf(item.id) !== -1 ? (
                    <div>{item.answer}</div>
                  ) : null}
                </div>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
export default Accordion;
