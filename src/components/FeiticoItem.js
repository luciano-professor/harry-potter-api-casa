import { View } from 'react-native';
import tw from 'twrnc';

import ItemContainer from './ItemContainer';
import TituloItem from './TituloItem';
import Label from './Label';
import TextoItem from './TextoItem';

const FeiticoItem = ({ feitico }) => {
  return (
    <ItemContainer>
      <TituloItem>{feitico.name}</TituloItem>

      <View style={tw`flex-row`}>
        <Label>Tipo: </Label>
        <TextoItem>{feitico.type}</TextoItem>
      </View>

      <View style={tw`flex-row`}>
        <Label>Efeito: </Label>
        <TextoItem>{feitico.effect}</TextoItem>
      </View>

      <View style={tw`flex-row`}>
        <Label>Cor da luz: </Label>
        <TextoItem>{feitico.light}</TextoItem>
      </View>

      <View style={tw`flex-row`}>
        <Label>Pode ser verbal: </Label>
        <TextoItem>{feitico.canBeVerbal ? 'Sim' : 'Não'}</TextoItem>
      </View>
    </ItemContainer>
  );
};

export default FeiticoItem;
