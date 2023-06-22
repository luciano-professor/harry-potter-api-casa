import { View } from 'react-native';
import tw from 'twrnc';

const ItemContainer = ({ children }) => {
  return <View style={tw`pb-4 mb-4 border-b border-gray-700`}>{children}</View>;
};

export default ItemContainer;
