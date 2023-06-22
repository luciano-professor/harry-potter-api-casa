import { View, Text, FlatList } from 'react-native';
import ScreenContent from '../components/ScreenContent';
import { useEffect, useState } from 'react';
import axios from 'axios';

import ElixirItem from '../components/ElixirItem';
import Loading from '../components/Loading';

const Elixires = () => {
  const [elixires, setElixires] = useState([]);

  useEffect(() => {
    async function lerElixires() {
      const resposta = await axios.get('/Elixirs');
      setElixires(resposta.data);
    }
    lerElixires();
  }, []);

  return (
    <ScreenContent>
      <FlatList
        data={elixires}
        renderItem={({ item }) => <ElixirItem elixir={item} />}
        ListEmptyComponent={<Loading />}
      />
    </ScreenContent>
  );
};

export default Elixires;
