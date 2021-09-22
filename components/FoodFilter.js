import React,{useState} from 'react';
import { View } from 'react-native';
import MenuList from './FoodList';
import Chips from './Chips';

const FoodFilter = () =>{
    const [timeChip,setTime] = useState('11:00 am - 12:00 am');
    const [categoryChip,setCategory] = useState('Beef');
    return (
    <View style={{width: '100%',alignItems:'center',flex: 1}}>
        <Chips timeChip = {timeChip} categoryChip = {categoryChip} setTime = {setTime} setCategory = {setCategory}/>
        <MenuList filter = {categoryChip}/>
    </View>
    );
}

export default FoodFilter;