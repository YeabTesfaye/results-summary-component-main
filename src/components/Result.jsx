function Result() {
  return (
    <section className="result">
      <h1 className="heading">Your Result</h1>{" "}
      <div className="circle">
        <h1 className="circle-number">76</h1> <p>of 100</p>
      </div>{" "}
      <div className="footer">
          <h1 className="appreciation">Great</h1>{" "}
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
      </div>
    </section>
  );
}

export default Result;
