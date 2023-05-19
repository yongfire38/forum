"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

const ListItem = ({ results }) => {
  return (
    <>
      {results.map((result, i) => (
        <div className="list-item" key={i}>
          <Link href={`/detail/${results[i]._id}`}>
            <h4>{results[i].title}</h4>
          </Link>
          <DetailLink /> <br />
          <Link href={`/edit/${results[i]._id}`}>🔨</Link>
          {/* <Link href={`/delete/${results[i]._id}`}>🗑️</Link> */}
          <span
            onClick={(e) => {
              fetch(`/api/post/delete`, {
                method: "POST",
                body: results[i]._id,
              })
                .then((r) => {
                  if (r.status !== 200) {
                    alert("현재유저와 작성자 불일치");
                    throw new Error("현재유저와 작성자 불일치");
                  }
                })
                .then(() => {
                  console.log("글이 삭제되었습니다.");
                  e.target.parentElement.style.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            🗑️
          </span>
          <p>{results[i].content}</p>
        </div>
      ))}
    </>
  );
};

export default ListItem;
