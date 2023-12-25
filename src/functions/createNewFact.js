import { nanoid } from 'nanoid';
import supabase from '../supabase';
import loadFacts from './loadFacts';

const createNewFact = (facts, setFacts, showForm, setShowForm) => {
  const textInput = document.getElementById('fact-input');
  const sourceInput = document.getElementById('source-input');
  const categoryInput = document.getElementById('category-input');
  const elementsArray = [textInput, sourceInput, categoryInput];
  // --------

  let confirmados = 0;
  elementsArray.map((element) => {
    if (isValid(element)) {
      confirmados++;
    }
  });

  if (confirmados === 3) {
    const newFact = {
      text: textInput.value,
      source: sourceInput.value,
      category: categoryInput.value,
      votesInteresting: 0,
      votesMindBlowing: 0,
      votesFalse: 0,
    };
    updateSupabase(newFact);
    setFacts((facts) => [newFact, ...facts]);
    loadFacts(setFacts);
    setShowForm(!showForm);
  }
};

export default createNewFact;

const isValid = (formInput) => {
  console.log(formInput);
  if (formInput.length === 0 || formInput.value != '') {
    formInput.classList.remove('erro');
    return true;
  } else {
    formInput.classList.add('erro');
    formInput.classList.add('shake');
    setTimeout(() => {
      formInput.classList.remove('shake');
    }, 500);
    return false;
  }
};

const updateSupabase = async (newFact) => {
  const { error } = await supabase.from('facts').insert(newFact);
};
