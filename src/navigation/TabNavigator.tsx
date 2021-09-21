import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CharacterScreen, HistoryScreen } from '../screens';
import HomeStack from './HomeStack';

import { colors } from '../utils/theme';

type Route = RouteProp<Record<string, object | undefined>, string>;

const Tab = createBottomTabNavigator();

const getIconName = (routeName: string) => {
  let iconName = '';
  switch (routeName) {
    case 'BookTab':
      iconName = 'menu-book';
      break;
    case 'CharacterTab':
      iconName = 'account-box';
      break;
    case 'HistoryTab':
      iconName = 'history';
      break;
    default:
      iconName = 'help-outline';
      break;
  }

  return iconName;
};

const navigatorScreenOptions = ({ route }: { route: Route }) => ({
  tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
    const iconName = getIconName(route.name);
    const iconSize = focused ? size * 1.2 : size;
    return <MaterialIcon name={iconName} size={iconSize} color={color} />;
  },
  tabBarInactiveBackgroundColor: colors.maroon,
  tabBarActiveBackgroundColor: colors.maroonDark,
  tabBarAllowFontScaling: false,
  tabBarActiveTintColor: colors.YellowDarker,
  tabBarInactiveTintColor: colors.yellow,
  tabBarLabelStyle: {
    fontSize: 12,
  },
  headerShown: false,
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={navigatorScreenOptions}>
      <Tab.Screen name="BookTab" component={HomeStack} options={{ title: 'Libros' }} />
      <Tab.Screen
        name="CharacterTab"
        component={CharacterScreen}
        options={{ title: 'Personajes' }}
      />
      <Tab.Screen name="HistoryTab" component={HistoryScreen} options={{ title: 'Historial' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
