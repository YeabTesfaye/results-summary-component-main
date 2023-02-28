import React from "react";
import lists from "../assets/data";
function Summary() {
  const numbers = [1,2,3,4]
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
                  <div className="dark-list">{list.score}</div> 
                  <div className="light-list">/</div>
                  <div className="light-list">100</div>
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
