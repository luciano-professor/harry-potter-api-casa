import { Text } from 'react-native';
import tw from 'twrnc';

const Label = ({ children }) => {
  return <Text style={tw`text-gray-500`}>{children}</Text>;
};

export default Label;
