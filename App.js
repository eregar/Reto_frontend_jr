import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainMenu from './components/screens/MainMenu';
import Carrito from './components/screens/Carrito';
import Perfil from './components/screens/Perfil';
import { strongYellow } from './components/ColorPalette';
import Icon from 'react-native-vector-icons/Ionicons';

const Nav = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='white' barStyle='dark-content'/>
      <Nav.Navigator 
      initialRouteName="Home"
      screenOptions = { ({route}) =>({
        tabBarActiveTintColor: strongYellow,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'grid-outline';
          } else if (route.name === 'Perfil') {
            iconName = 'person-circle-outline';
          }else{
            iconName = 'cart-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        }
        //tabBarInactiveTintColor: colorNotSelected
      })
      }
      >
        <Nav.Screen name="Carrito" component={Carrito} />
        <Nav.Screen name="Home" component={MainMenu} />
        <Nav.Screen name="Perfil" component={Perfil}/>
      </Nav.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
