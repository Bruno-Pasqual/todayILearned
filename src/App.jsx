import { useEffect, useState } from 'react';
import supabase from './supabase';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import FactsContainer from './components/FactsContainer';
import loadFacts from './functions/loadFacts';
import NewFactForm from './components/NewFactForm';

function App() {
  const [facts, setFacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function getFacts() {
      const { data: facts, error } = await supabase.from('facts').select();
      setFacts(facts);
    }

    getFacts();

    // loadFacts(setFacts);
  }, []);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      <main>
        {showForm && (
          <NewFactForm
            setFacts={setFacts}
            facts={facts}
            showForm={showForm}
            setShowForm={setShowForm}
          />
        )}
        <div className="main-wrapper">
          <Nav setFacts={setFacts} facts={facts} />
          <FactsContainer facts={facts} setFacts={setFacts} />
        </div>
      </main>
    </>
  );
}

export default App;
