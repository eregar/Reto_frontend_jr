import React from 'react';
import {Text, View } from 'react-native';
import DaySelector from '../DaySelector';
import MenuList from '../FoodList';

const MainMenu = () =>{
    return (
    <View style={{alignItems: 'center',flex: 1}}>
        <Text style={{fontFamily: 'Gotham'}} >main menuw</Text>
        <Text >main menuw</Text>
        <DaySelector/>
        <MenuList/>
    </View>
    );
}

export default MainMenu;