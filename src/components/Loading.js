import { ActivityIndicator } from 'react-native';
import tw from 'twrnc';

const Loading = () => {
  return <ActivityIndicator size={24} style={tw`text-green-500`} />;
};

export default Loading;
