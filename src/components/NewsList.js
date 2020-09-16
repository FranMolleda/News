import React from "react";
import New from "./News";
const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((oneNew, i) => (
        <New key={i} oneNew={oneNew} />
      ))}
    </div>
  );
};

export default NewsList;
