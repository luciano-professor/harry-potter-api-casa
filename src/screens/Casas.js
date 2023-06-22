import { View, Text, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import tw from 'twrnc';
import axios from 'axios';

import ScreenContent from '../components/ScreenContent';
import Loading from '../components/Loading';
import CasaItem from '../components/CasaItem';

const Casas = () => {
  const [casas, setCasas] = useState([]);

  useEffect(() => {
    async function lerCasas() {
      const resposta = await axios.get('/Houses');
      setCasas(resposta.data);
    }
    lerCasas();
  }, []);

  return (
    <ScreenContent>
      {/* Lista */}
      <FlatList
        data={casas}
        renderItem={({ item }) => <CasaItem casa={item} />}
        ListEmptyComponent={<Loading />}
      />
    </ScreenContent>
  );
};

export default Casas;
