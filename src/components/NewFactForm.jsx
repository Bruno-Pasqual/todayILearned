import React, { useState } from 'react';
import { CATEGORIES } from '../data';
import createNewFact from '../functions/createNewFact';
import { nanoid } from 'nanoid';

const NewFactForm = ({ facts, setFacts, showForm, setShowForm }) => {
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        name="fact"
        id="fact-input"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        name="source"
        id="source-input"
        placeholder="Turstworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />
      <select
        name="category-input"
        id="category-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="" disabled defaultValue={true}>
          Choose category:
        </option>
        {CATEGORIES.map((category) => {
          return (
            <option
              key={nanoid()}
              className="first-option"
              value={category.name}
            >
              {category.name}
            </option>
          );
        })}
      </select>
      <button
        onClick={() => createNewFact(facts, setFacts, showForm, setShowForm)}
        className="post-button"
      >
        POST
      </button>
    </form>
  );
};

export default NewFactForm;
