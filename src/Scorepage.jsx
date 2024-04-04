function Scorepage() {
  const cats = JSON.parse(localStorage.getItem("cat"));
  console.log(cats, "score");
  return (
    <div>
      <h1>Score Page</h1>
      <div className="container">
        {cats.map((cat, index) => (
          <>
            <div className="catsscore">
              <img key={index} src={cat.link} />
              <p>{cat.name}</p>
              <span>Score:{cat.score}</span>
            </div>{" "}
          </>
        ))}
      </div>
    </div>
  );
}

export default Scorepage;
