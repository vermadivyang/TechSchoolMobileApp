import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity, FlatList } from 'react-native';

const Card2 = props => {
    return (
        <View style={styles.Views}>
            <View style={{marginTop: 5, marginLeft: 5, marginBottom: 5,}}>
            <Image source={props.imageSS} />
            </View>
            <Text style={{color: '#e3ecff',}}>.</Text>

                <View style={{width: 190, margin: 5,}}>
                    <Text style={{fontSize: 18,}}>{props.title}</Text>
                    <Text style={{fontSize: 20,}}></Text>
                    <Text style={{fontSize: 15,}}>{props.content}</Text>
                    <Text style={{fontSize: 15, marginTop: 6,}}>{props.content2}</Text>
                    <Text style={{fontSize: 15, marginTop: 6,}}>{props.content3}</Text>
                </View>
        </View>

    );
};

const styles = StyleSheet.create({
Views:{
    flexDirection:'row',
    borderColor: "black",
    borderWidth: 3, 
    height: 140,   
    width: 369,   
    backgroundColor: "#e1eff5",
    marginLeft: 3,
},

});

export default Card2;
//          <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
