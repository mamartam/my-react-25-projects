import styles from "./DynamicBlogFeed.module.scss";
import { useEffect, useState } from "react";

function DynamicBlogFeed({ url, pageSize }) {
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [skip, setSkip] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    let isActive = true;

    async function fetchData(getUrl, pageSize) {
      try {
        setLoading(true);
        const response = await fetch(
          `${getUrl}?limit=${pageSize}&skip=${skip === 0 ? 0 : skip * pageSize}`,
        );
        const data = await response.json();

        if (data && data.posts && isActive) {
          setFetchedData((lastVersion) => [...lastVersion, ...data.posts]);
          setLoading(false);
        }
      } catch (error) {
        if (isActive) {
          console.error(error);
          setLoading(false);
          setErrorMsg(error.message);
        }
      }
    }

    fetchData(url, pageSize);

    return () => {
      isActive = false;
    };
  }, [skip, url, pageSize]);

  useEffect(() => {
    if (fetchedData.length === 200) setDisableButton(true);
  }, [fetchedData]);

  function handleClick() {
    setSkip((lastStatus) => lastStatus + 1);
  }
  return (
    <>
      <header className={styles["header"]}>
        <h1>
          {disableButton ? <p>You have reached to 100 comments</p> : null}
        </h1>
      </header>
      <section className={styles["comments"]}>
        {fetchedData.map((item, index) => (
          <div key={index} className={styles["commnt-box"]}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
            <div>
              <p>Likes: {item.reactions.likes}</p>
              <p>Dislikes: {item.reactions.dislikes}</p>
            </div>
          </div>
        ))}
      </section>
      <section className={styles["btn-container"]}>
        {errorMsg !== null ? <p>Something went wrong...</p> : null}

        {loading ? <p>Loading...</p> : null}
        <button
          disabled={disableButton}
          onClick={handleClick}
          className={styles["load-more-btn"]}
        >
          See more
        </button>
      </section>
    </>
  );
}

export default DynamicBlogFeed;
