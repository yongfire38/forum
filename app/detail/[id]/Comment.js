"use client";

import { useEffect, useRef, useState } from "react";

const Comment = (props) => {
  let inputRef = useRef();
  let [comment, setComment] = useState("");
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/comment/list?id=" + props._id)
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, []);

  return (
    <div>
      <div>
        {data.length > 0
          ? data.map((a, i) => <p key={i}>{a.content} ::: by {a.author}</p>)
          : "댓글없음"}
      </div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
        ref={inputRef}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: props._id }),
          })
          .then((r) => r.json())
          .then((result) => {
            setData(data => [...data, result]);
            inputRef.current.value='';
          });
        }}
      >
        댓글전송
      </button>
    </div>
  );
};

export default Comment;
