import React from 'react';
import filterFacts from '../functions/filterFacts';

const CategoryButton = ({ details, facts, setFacts }) => {
  const { name, color } = details;

  return (
    <button
      onClick={() => filterFacts(facts, setFacts, details.name)}
      className="category-button"
      style={{ background: `${color}` }}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
