import loadFacts from './loadFacts';

const filterFacts = (facts, setFacts, clickedCategory) => {
  const loadFatos = async () => {
    if (clickedCategory === 'all') {
      return loadFacts(setFacts);
    }
    const res = await fetch(
      `https://wkgjjvnqzbocqksfpjgh.supabase.co/rest/v1/facts?category=eq.${clickedCategory}`,
      {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZ2pqdm5xemJvY3Frc2ZwamdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyNjkxMDksImV4cCI6MjAxODg0NTEwOX0.SKzollUU0TSQqMv-eRr2gUZ0bDFQW-bunAQ2YejSh74',
          authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrZ2pqdm5xemJvY3Frc2ZwamdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMyNjkxMDksImV4cCI6MjAxODg0NTEwOX0.SKzollUU0TSQqMv-eRr2gUZ0bDFQW-bunAQ2YejSh74',
        },
      }
    );
    const data = await res.json();

    setFacts(data);
  };

  loadFatos();
};

export default filterFacts;
