import React from 'react';



//// affiche de chat avec son img en jsx && reduire la taille des chats : pas encore organiser le css
function CatCard({ cat, onClick }) {
  return (
    <div>
      <img src={cat.link} alt={cat.name} className='cat-img' onClick={() => onClick(cat.name)} />
      <p>{cat.name}</p>
    </div>
  );
}

export default CatCard;