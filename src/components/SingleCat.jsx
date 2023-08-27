function SingleCat({ cat, onDelete }) {         //Updated with OnDelete for Exercise 5.3
  return (
    <div className="single-cat-container">
      <img src={cat.image} alt={cat.name} />
      <h2>{cat.name}</h2>
      <p>{cat.latinName}</p>
      <a href="#" onClick={() => onDelete(cat.id)}>Delete</a>  {/* Here's the Delete link */}
    </div>
  );
}

export default SingleCat;
