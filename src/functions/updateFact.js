import supabase from '../supabase';

const updateFact = async (id, property, newContent, setFacts) => {
  // Crie um objeto dinamicamente para atualizar apenas a propriedade desejada
  const updateObject = { [property]: newContent };

  try {
    // Atualize o registro no banco de dados
    const { error } = await supabase
      .from('facts')
      .update(updateObject)
      .eq('id', id);

    if (error) {
      throw new Error(`Erro ao atualizar o fato: ${error.message}`);
    }

    // Se a atualização foi bem-sucedida, atualize o estado usando setFacts
    setFacts((facts) =>
      facts.map((fact) =>
        fact.id === id ? { ...fact, [property]: newContent } : fact
      )
    );
  } catch (error) {
    console.error(error.message);
  }
};

export default updateFact;
