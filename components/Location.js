import React from 'react';
import {Text, TextInput, View } from 'react-native';
import { weakGray } from './ColorPalette';


const Location = () =>{
    return (
        <View style={{borderBottomWidth: 1,width:'100%',backgroundColor: 'white', borderBottomColor: weakGray}}>
            <TextInput placeholder="Select location..."/>
        </View>
    );
}

export default Location;