import { CATEGORIES } from '../data';
import updateFact from '../functions/updateFact';

const Fact = ({ details, facts, setFacts }) => {
  const color = CATEGORIES.find((object) => object.name === details.category);
  console.log(Object.keys(details));

  return (
    <div className="fact-container">
      <p>
        {details.text} <a href={details.source}>Source</a>
      </p>
      <div className="details-container">
        <p style={{ background: `${color.color}` }} className="fact-category">
          {details.category}
        </p>
        <button
          onClick={() =>
            updateFact(
              details.id,
              Object.keys(details)[5],
              details.votesInteresting + 1,
              setFacts
            )
          }
        >
          👍🏼 {details.votesInteresting}
        </button>
        <button
          onClick={() =>
            updateFact(
              details.id,
              Object.keys(details)[6],
              details.votesMindBlowing + 1,
              setFacts
            )
          }
        >
          🤯 {details.votesMindBlowing}
        </button>
        <button
          onClick={() =>
            updateFact(
              details.id,
              Object.keys(details)[7],
              details.votesFalse + 1,
              setFacts
            )
          }
        >
          🚩 {details.votesFalse}
        </button>
      </div>
    </div>
  );
};

export default Fact;
