import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainMenu from './components/screens/MainMenu';
import Carrito from './components/screens/Carrito';
import Perfil from './components/screens/Perfil';
import { colorNotSelected, strongYellow } from './components/ColorPalette';

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
