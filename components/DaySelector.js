import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { strongYellow } from './ColorPalette';

const DaySelector = () =>{
    const [selected,setSelected] = useState(-1);
    const dias = ['Dom','Lun','Mar','Mier','Jue','Vie','Sáb'];
    const diaDom = 28
    return (
    <View style={styles.daySelector}>
        {dias.map((dia,index) => (
            <Day 
            key={index} 
            dia={dia} 
            numero = {(diaDom-1+index)%30+1} 
            setSelected = {()=>setSelected(index)}
            selected = {selected==index} />
    ))}
    </View>
    );
}

const Day = ({dia, numero, setSelected, selected}) =>{
    
    return (
    <TouchableOpacity 
    onPress={setSelected}
    style={styles.dayContainer}>
        <Text style = {styles.buttonText}>{dia}</Text>
        <View style = {[styles.circleButton, selected? styles.selectedCircle:null]}>
            <Text style = {[styles.buttonText,{color: selected?'white':'black'}]}>{numero}</Text>
        </View>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonText: {
        textAlign: 'center',
        fontSize: 11
    },
    daySelector: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'stretch',
        backgroundColor: 'white',
        paddingHorizontal: '10%'
    },
    dayContainer: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    },
    circleButton:{
        height: 20,
        width: 20,
        borderRadius: 20,
        justifyContent: 'center',
        
    },
    selectedCircle:{
        backgroundColor: strongYellow
    }


})

export default DaySelector;