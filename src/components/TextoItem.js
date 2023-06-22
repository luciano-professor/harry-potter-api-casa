import { Text } from 'react-native';
import tw from 'twrnc';

const TextoItem = ({ children }) => {
  return <Text style={tw`text-gray-100`}>{children}</Text>;
};

export default TextoItem;
