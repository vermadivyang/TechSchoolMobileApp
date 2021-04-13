import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity, FlatList } from 'react-native';

const Card = props => {
    return (
        <View style={styles.Row}>
            <Image source={props.imageS} />
            <Text style={{color: '#e3ecff',}}>yy</Text>

                <View style={{width: 190,}}>
                    <Text style={{fontSize: 20,}}>{props.title}</Text>
                    <Text style={{fontSize: 20,}}></Text>
                    <Text style={{fontSize: 18,}}>{props.content}</Text>
                </View>

        </View>

    );
};

const styles = StyleSheet.create({
Row:{
    flexDirection:'row',

},

});

export default Card;
//          <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
