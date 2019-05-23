import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { ScrollView, SafeAreaView } from 'react-native';

// Pages
import Main from './pages/main';
import Historic from './pages/historic';
  
  
const AppNavigator = createBottomTabNavigator({
    Main,
    Historic
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Main') {
        iconName = `md-home`;
        // Sometimes we want to add badges to some icons. 
        // You can check the implementation below.
        // IconComponent = HomeIconWithBadge; 
      } else if (routeName === 'Historic') {
        iconName = `md-clipboard`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#0a54cc',
    inactiveTintColor: 'gray',
  },
});

export default createAppContainer(AppNavigator);