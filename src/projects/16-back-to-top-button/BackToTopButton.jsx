import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTopButton.module.scss";

function BackToTopButton({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erroMsg, setErrorMsg] = useState("");

  const [scroll, setScroll] = useState(false);

  async function fetchData(getUrl) {
    try {
      setLoading(true);

      const resp = await fetch(getUrl);
      const data = await resp.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error.message);
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 300) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div style={{ position: "relative" }}>
      <FaArrowUp
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          display: scroll ? "block" : "none",
          width: "50px",
          height: "auto",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Button
      </FaArrowUp>
      <div>
        {data && data.length > 0
          ? data.map((item) => (
              <p key={item.id} style={{ margin: "20px" }}>
                <span style={{ fontSize: "18px", color: "purple" }}>
                  {item.title}
                </span>{" "}
                <br /> {item.body}
              </p>
            ))
          : null}
      </div>
    </div>
  );
}

export default BackToTopButton;
