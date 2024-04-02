

function catCard({cat,handleClick}) {
  return (
    <figure>
      <img
        src={cat.link}
        alt={`le ${cat.name}`}
        onClick={handleClick}
       
      />
      <figcaption>{cat.count}</figcaption>
    </figure>
  );
}

export default catCard
