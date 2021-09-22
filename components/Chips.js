import React, { useState, useEffect } from 'react';
import {FlatList,
    Text,
    TouchableOpacity,
    View, StyleSheet,
    ActivityIndicator,Dimensions,
    TouchableWithoutFeedback } from 'react-native';
import { buttonGray, weakGray } from './ColorPalette';


const Chips = ({timeChip,categoryChip,setTime,setCategory}) =>{
    const [display,setDisplay] = useState(-1);
    const [paneOptions,setOptions] = useState([]);

    const pressed = (chipNum,opciones) =>{
        setDisplay(chipNum);
        setOptions(opciones);
    }
    const closeAndSetTime = (value) =>{
        setTime(value);
        setDisplay(-1);
    }
    const closeAndSetCategory = (value) =>{
        setCategory(value);
        setDisplay(-1);
    }

    return(
        <View>
            <View style={styles.chiplist}>
                <Chip selectedOption = {timeChip}
                onPress = {()=>pressed(0,<ClockOptions onSelected = {closeAndSetTime} />)} />
                <Chip selectedOption = {categoryChip}
                 onPress = {()=>pressed(1,<CategoryOptions onSelected = {closeAndSetCategory}/>)}/>
                <Chip selectedOption = 'Platillos' onPress ={() => alert("selecciono platillos!")} />
            </View>
            {display==-1? null:<BlackScreen onPress = {()=>setDisplay(-1)}/>}
            {display==-1? null:<OptionsPane opciones={paneOptions}/>}
        </View>
    );
}

const BlackScreen = ({onPress}) =>{
    return (
        <TouchableWithoutFeedback onPress={onPress} style={styles.blackScreen}>
            <View style={styles.blackScreen}/>
        </TouchableWithoutFeedback>
    );
}

const Chip = ({selectedOption,onPress}) =>{
    return(
        <View style={{alignItems:'center'}}>
            <TouchableOpacity 
            style={styles.chipelem}
            onPress={onPress}>
                <Text >i</Text>
                <Text >{selectedOption}</Text>
        </TouchableOpacity>
        </View>
    );
}

const OptionsPane = ({opciones}) =>{
    return(
            <View style={styles.optionsPane}>
                {opciones}
            </View>
    );
}

const ClockOptions = ({onSelected}) => {
    const horarios = [
        {val: '11:00 am - 12:00 am', key: '1'},
        {val: '1:00 pm - 2:00 pm', key: '2'},
        {val: '2:00 pm - 3:00 pm', key: '3'}];

    const renderoptions = ({item}) =>{
        return(
        <TouchableOpacity 
        style={styles.optionButton}
        onPress={()=>onSelected(item.val)}>
            <Text>{item.val}</Text>
        </TouchableOpacity>
    )};

    return (
        <View>
            <Text style={{ margin: 10 }}>Elige un horario de entrega</Text>
            <View>
                <FlatList style={styles.optionList}
                    renderItem={renderoptions}
                    keyExtractor={item => item.key}
                    data={horarios}
                />
            </View>
        </View>
    );
}

const CategoryOptions = ({onSelected}) =>{
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState([]);

    const categorias = async () => await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                        .then((response) => (response.json()))
                        .then((json) => json.categories)
                        .then((res) => {setLoading(false);setData(res)})
                        .catch(error => console.error(error));

    const renderoptions = ({item}) =>{
        //console.log(item);
        return(
        <TouchableOpacity 
        style={styles.optionButton}
        onPress={()=>onSelected(item.strCategory)}>
            <Text>{item.strCategory}</Text>
        </TouchableOpacity>
    )};

    useEffect(() => {
        setLoading(true);
        categorias();
    },[]);

    return (
        <View>
            <Text style={{ margin: 10 }}>Elige un Servicio</Text>
            {loading ? <ActivityIndicator /> :
                <FlatList style={styles.optionList}
                    renderItem={renderoptions}
                    keyExtractor={item => item.idCategory}
                    data={data}
                />}
        </View>
    );
}


const styles = StyleSheet.create({
    blackScreen:{
        position: 'absolute',
        zIndex: 0.5,
        backgroundColor: 'black',
        width: '100%',
        top:'100%',
        alignSelf:'center',
        height: Dimensions.get('window').height,
        opacity:0.4,
    },
    chiplist: {
        flexDirection: 'row',
        alignContent: 'center',
        width: '100%'

    },
    chipelem: {
        backgroundColor: buttonGray,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: weakGray,
        margin: 5
    },
    optionsPane:{
        position: 'absolute',
        zIndex:1,
        top: '100%',
        backgroundColor:'white',
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
        elevation:5,
        padding:10,
        maxHeight:300
    },
    optionList:{
        maxHeight: 200,
        paddingRight: '10%'
    },
    optionButton:{
        borderColor: weakGray,
        borderWidth: 0.5,
        borderRadius: 3,
        justifyContent: 'center',
        margin: 5,
        backgroundColor: buttonGray,
        elevation: 3,
        paddingVertical: 3
    }

});

export default Chips;