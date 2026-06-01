import { useState } from "react";

function ThreadedComments({ arrayOfData }) {
  return (
    <>
      {arrayOfData.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </>
  );
}

function CommentItem({ comment }) {
  const [seeMore, setSeeMore] = useState(false);

  function handleClick() {
    setSeeMore((prevStatus) => !prevStatus);
  }

  return (
    <div style={{ backgroundColor: "green", margin: "2rem", padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>
          <span>{comment.author}</span> <br /> {comment.text}
        </p>
        {comment.replies && comment.replies.length !== 0 ? (
          <button onClick={handleClick}>
            {seeMore ? "Hide replies" : "See more"}
          </button>
        ) : null}
      </div>

      {seeMore && comment.replies ? (
        <div style={{ marginLeft: "20px" }}>
          <ThreadedComments arrayOfData={comment.replies} />
        </div>
      ) : null}
    </div>
  );
}

export default ThreadedComments;
