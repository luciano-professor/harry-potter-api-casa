import { View, Text, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios';

import ScreenContent from '../components/ScreenContent';
import FeiticoItem from '../components/FeiticoItem';
import Loading from '../components/Loading';

const Feiticos = () => {
  const [feiticos, setFeiticos] = useState([]);

  useEffect(() => {
    async function lerFeiticos() {
      const resposta = await axios.get('/Spells');
      setFeiticos(resposta.data);
    }
    lerFeiticos();
  }, []);

  return (
    <ScreenContent>
      <FlatList
        data={feiticos}
        renderItem={({ item }) => <FeiticoItem feitico={item} />}
        ListEmptyComponent={<Loading />}
      />
    </ScreenContent>
  );
};

export default Feiticos;
