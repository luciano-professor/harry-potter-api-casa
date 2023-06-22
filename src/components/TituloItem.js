import { Text } from 'react-native';
import tw from 'twrnc';

const TituloItem = ({ children }) => {
  return (
    <Text style={tw`text-green-500 text-center text-xl mb-2`}>{children}</Text>
  );
};

export default TituloItem;
