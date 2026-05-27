import styles from "./RandomColor.module.scss";
import { useEffect, useState } from "react";

function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  }
  function handleCreateRandomRGBColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  useEffect(() => {
    handleCreateRandomHexColor();
  }, []);

  return (
    <div className={styles["body"]}>
      <div className={styles["container"]} style={{ backgroundColor: color }}>
        <div>
          {" "}
          <button onClick={() => setTypeOfColor("rgb ")}>
            Create RGB color
          </button>
          <button onClick={() => setTypeOfColor("hex")}>
            Create HEX color
          </button>
          <button
            onClick={
              typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRGBColor
            }
          >
            Generate random color
          </button>
        </div>
        <p>{color}</p>
      </div>
    </div>
  );
}
export default RandomColor;
