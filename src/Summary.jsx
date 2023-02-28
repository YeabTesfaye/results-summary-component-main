import React from "react";
import lists from "./data";
// import svg from "../../public/images";
function Summary() {
 
  let num = 1
  return (
    <section className="summary">
      <div className="summary-txt">
        <p>Summary</p>
      </div>
      <article className="summary-list">
        {lists.map((list) => (
          <div key={list.id} className={`list-${num++} list`}>
            {
              <>
                <div className="list-left">
                  {" "}
                  <img src={list.icon} alt={list.category} />
                  <span>{list.category}</span>{" "}
                </div>
                <div className="list-right">
                  <span className="dark-list">{list.score}</span>
                  <span className="light-list">/</span>
                  <span className="light-list">100</span>
                </div>
              </>
            }
          </div>
        ))}
      </article>

      <button className="btn">Continue</button>
    </section>
  );
}

export default Summary;
