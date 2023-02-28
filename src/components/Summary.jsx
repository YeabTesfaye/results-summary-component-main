import React from "react";
import datas from "../assets/data";
function Summary() {
  return (
    <section className="summary">
      <h1 className="heading">Summary</h1>
      <article className="datas">
        {datas.map((data) => (
          <div key={data.id}>
            {
              <div className={`data ${data.category}`}>
                {" "}
                <img src={data.icon} alt={data.category} />
                <p className="catagory">{data.category}</p> <p className="score">{data.score}/<span>100</span></p>
              </div>
            }
          </div>
        ))}
      </article>

      <button className="btn">Continue</button>
    </section>
  );
}

export default Summary;
