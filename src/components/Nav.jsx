import React from 'react';
import { CATEGORIES } from '../data';
import CategoryButton from './CategoryButton';
import { nanoid } from 'nanoid';

const Nav = ({ setFacts, facts }) => {
  return (
    <nav>
      {CATEGORIES.map((objeto) => {
        return (
          <CategoryButton
            key={nanoid()}
            details={objeto}
            facts={facts}
            setFacts={setFacts}
          />
        );
      })}
    </nav>
  );
};

export default Nav;
