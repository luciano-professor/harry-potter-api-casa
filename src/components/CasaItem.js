import { View, Text } from 'react-native';
import tw from 'twrnc';

import ItemContainer from './ItemContainer';
import TituloItem from './TituloItem';
import Label from './Label';
import TextoItem from './TextoItem';

const CasaItem = ({ casa }) => {
  return (
    <ItemContainer>
      <TituloItem>{casa.name}</TituloItem>

      <View style={tw`flex-row`}>
        <Label>Cores: </Label>
        <TextoItem>{casa.houseColours}</TextoItem>
      </View>

      <View style={tw`flex-row`}>
        <Label>Fundador: </Label>
        <TextoItem>{casa.founder}</TextoItem>
      </View>

      <View style={tw`flex-row`}>
        <Label>Animal: </Label>
        <TextoItem>{casa.animal}</TextoItem>
      </View>

      <View style={tw`flex-row`}>
        <Label>Elemento: </Label>
        <TextoItem>{casa.element}</TextoItem>
      </View>

      <View style={tw`flex-row`}>
        <Label>Fantasma: </Label>
        <TextoItem>{casa.ghost}</TextoItem>
      </View>

      <View style={tw`flex-row`}>
        <Label>Sala comunal: </Label>
        <TextoItem>{casa.commonRoom}</TextoItem>
      </View>

      <View style={tw`flex-row flex-wrap gap-x-2`}>
        <Label>Características: </Label>
        {casa.traits.map((trait) => (
          <TextoItem key={trait.id}>{trait.name}</TextoItem>
        ))}
      </View>
    </ItemContainer>
  );
};

export default CasaItem;
