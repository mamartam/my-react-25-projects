import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./ImagesSlider.module.scss";

function ImagesSlider({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currectSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoadingState(true);
      const response = await fetch(`${getUrl}?limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        console.log(data);
        setLoadingState(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoadingState(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  if (loadingState) {
    return <div>Loading data... Please wait!</div>;
  }

  if (errorMsg) {
    return <div>Error occured! {errorMsg}</div>;
  }

  function handlePrev() {
    setCurrentSlide(currectSlide === 0 ? images.length - 1 : currectSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currectSlide === images.length - 1 ? 0 : currectSlide + 1);
  }

  return (
    <div className={styles["container"]}>
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className={`${styles.arrow} ${styles["arrow-left"]}`}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.title}
              src={imageItem.url}
              className={
                currectSlide === index
                  ? `${styles["current-image"]}`
                  : `${styles["current-image"]} ${styles["hide-current-image"]}`
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className={`${styles["arrow"]} ${styles["arrow-right"]}`}
      />
      <span className={styles["circle-indicators"]}>
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currectSlide === index
                    ? `${styles["current-indicator"]}`
                    : `${styles["current-indicator "]} ${styles["inactive-indicator"]}`
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImagesSlider;
