import React from 'react';
import Fact from './Fact';

const FactsContainer = ({ facts, setFacts }) => {
  return (
    <section className="facts-container">
      {facts.length === 0 && <h1>the category is empty</h1>}

      {facts.map((fact) => {
        return (
          <Fact
            facts={facts}
            setFacts={setFacts}
            key={fact.id}
            details={fact}
          />
        );
      })}
    </section>
  );
};

export default FactsContainer;
