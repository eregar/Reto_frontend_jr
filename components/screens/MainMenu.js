import React from 'react';
import {Text, View } from 'react-native';
import DaySelector from '../DaySelector';
import MenuList from '../FoodList';
import Chips from '../Chips';
import FoodFilter from '../FoodFilter';
import Location from '../Location';

const MainMenu = () =>{
    return (
    <View style={{alignItems: 'center',flex: 1}}>
        <Location/>
        <DaySelector/>
        <FoodFilter/>
    </View>
    );
}

export default MainMenu;