import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tw from 'twrnc';
import { Ionicons } from '@expo/vector-icons';

import Casas from './screens/Casas';
import Feiticos from './screens/Feiticos';
import Elixires from './screens/Elixires';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: tw`bg-green-500`,
        headerTitleStyle: tw`text-gray-950 font-bold text-2xl`,
        headerTitleAlign: 'center',
        tabBarStyle: tw`bg-green-500`,
        tabBarActiveTintColor: tw`text-gray-950`.color,
        tabBarInactiveTintColor: tw`text-gray-700`.color,
      }}
      backBehavior="history"
      sceneContainerStyle={tw`bg-green-500`}
    >
      <Tab.Screen
        name="Casas"
        component={Casas}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Feiticos"
        component={Feiticos}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'aperture' : 'aperture-outline'}
              size={24}
              color={color}
            />
          ),
          title: 'Feitiços',
        }}
      />

      <Tab.Screen
        name="Elixires"
        component={Elixires}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'beaker' : 'beaker-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
