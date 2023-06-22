import { View, Text } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';

import ItemContainer from './ItemContainer';
import TituloItem from './TituloItem';
import Label from './Label';
import TextoItem from './TextoItem';

const ElixirItem = ({ elixir }) => {
  return (
    <ItemContainer>
      <TituloItem>{elixir.name}</TituloItem>

      <View style={tw`flex-row flex-wrap`}>
        <Label>Efeitos: </Label>
        <TextoItem>{elixir.effect}</TextoItem>
      </View>

      <View style={tw`flex-row flex-wrap`}>
        <Label>Efeitos colaterais: </Label>
        <TextoItem>{elixir.sideEffects}</TextoItem>
      </View>

      <View style={tw`flex-row flex-wrap`}>
        <Label>Dificuldade: </Label>
        <TextoItem>{elixir.difficulty}</TextoItem>
      </View>

      <View style={tw`flex-row flex-wrap gap-x-2`}>
        <Label>Ingredientes: </Label>
        {elixir.ingredients.map((ingredient) => (
          <View key={ingredient.id} style={tw`flex-row items-center gap-x-1`}>
            <AntDesign name="tags" size={16} style={tw`text-green-400`} />
            <TextoItem>{ingredient.name}</TextoItem>
          </View>
        ))}
      </View>
    </ItemContainer>
  );
};

export default ElixirItem;
