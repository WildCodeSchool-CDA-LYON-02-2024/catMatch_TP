

function catCard({cat,handleClick}) {
  return (
    <figure>
      <img
        src={cat.link}
        alt={`le ${cat.name}`}
        onClick={handleClick}
      />
    </figure>
  );
}

export default catCard
