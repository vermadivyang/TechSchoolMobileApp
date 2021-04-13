import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity } from 'react-native';
import Card3 from "./Components/FestCard";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkaotLwoMiR0LVpf33N5GcOSan7pXTrf6pvA&usqp=CAU" ,
   width: 375 ,
   height: 100
};




const home = {
    uri:'https://lh3.googleusercontent.com/proxy/NGjsMIIc9acP4oUGbFsqIG-WaWfsGU7jZaA4A-Whq4pgg6CeUghyakVGCZRS-dTI_uw1rys_jgV05iWzMXYVijwtN6Jx3aOqsr3kmm7b8Di2Lg-4DHJCotiG6ZgxvdMt9vE4HA',
    width: 30,
    height: 30,  
    justifyContent: 'center',
  };
  
  const about = {
    uri:'https://p.kindpng.com/picc/s/21-211168_transparent-person-icon-png-png-download.png',
    width: 30,
    height: 30,  
    justifyContent: 'center',
  };
  
  const contact = {
    uri:'https://icon-library.com/images/phone-icon-transparent-background/phone-icon-transparent-background-0.jpg',
    width: 30,
    height: 30,  
    justifyContent: 'center',
  };
  
  const fest = {
    uri:'https://i.pinimg.com/originals/e3/a6/28/e3a6286575945e680d473313ba2b2a5d.png',
    width: 40,
    height: 30,  
    justifyContent: 'center',
  };
  
  const others = {
    uri:'https://p7.hiclipart.com/preview/1015/72/40/cartoon-map-euclidean-vector-tourist-map-vector-map.jpg',
    width: 30,
    height: 31,  
    justifyContent: 'center',
  };
  
  const Sech = {
    uri:'https://www.vhv.rs/dpng/d/199-1994720_calendar-icons-deadline-vector-transparent-calendar-icon-hd.png',
    width: 30,
    height: 31,  
    justifyContent: 'center',
  };
  

  const link = {
    uri:'https://www.pinclipart.com/picdir/middle/451-4511115_the-media-school-for-creative-content-background-online.png',
    width: 30,
    height: 31,  
    justifyContent: 'center',
  };
  

const SubScreen = props => {
    return (
        <View style ={{flex: 1,}}>

<ScrollView style={{backgroundColor:'#e3ecff',}}>

    <View>

    <ImageBackground source={image} style={styles.image}>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
            <Text style={styles.HeaderT}>Others</Text>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
      </ImageBackground>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      
      <Text style={{fontSize: 23, marginLeft: 10,}}>Are any teachers gone?</Text>

      <Text></Text>

      <Greeting1 isHere={false} />
      <Greeting2 isHere2={true} />
      <Greeting3 isHere3={false} />
      <Greeting4 isHere4={false} />

      <Text></Text>
      <Text></Text>
      
      <Text style={{fontSize: 23, marginLeft: 10,}}>Are there any festivals today?</Text>

      <Text></Text>

      <NoA fest={false} />
      

      <Text></Text>
      <Text></Text>
      
      <Text style={{fontSize: 23, marginLeft: 10,}}>Are there any Holidays today?</Text>

      <Text></Text>

      <NoA2 fest2={false} />

      <View style={{height:200,}}></View>

    </View>

</ScrollView>

<ScrollView horizontal showsHorizontalScrollIndicator={false}>
       <View style={styles.navi2}>
       <View>
         <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
       <Button title="Home" onPress={() => props.navigation.navigate('Home')}/>
       <Icon name='home' size={30} color='black' style={{marginLeft:12,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:10,}}/>
         </TouchableOpacity>
       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('About')}>

       <Button title="Staff" onPress={() => props.navigation.navigate('About')}/> 
       <Image source={about} style={{marginLeft:9,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:7,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Contacts')}>

       <Button title="Contacts" onPress={() => props.navigation.navigate('Contacts')}/> 
       <Image source={contact} style={{marginLeft:24,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:24,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Fest')}>

       <Button title="Events" onPress={() => props.navigation.navigate('Fest')}/> 
       <Image source={fest} style={{marginLeft:13,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:14,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Sub')}>

       <Button title="Others" onPress={() => props.navigation.navigate('Sub')}/> 
       <Image source={require('./Assets/Question.png')} style={{marginLeft:15,}}/>
       <Image source={require('./Assets/Line.png')} style={{marginLeft:13,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Sech')}>

       <Button title="Sche" onPress={() => props.navigation.navigate('Sech')}/> 
       <Image source={Sech} style={{marginLeft:10,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:7,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Map')}>

       <Button title="Map" onPress={() => props.navigation.navigate('Map')}/> 
       <Image source={others} style={{marginLeft:10,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:7,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Link')}>

       <Button title="Media" onPress={() => props.navigation.navigate('Link')}/> 
       <Image source={link} style={{marginLeft:15,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:12,}}/>
       </TouchableOpacity>

       </View>
 
       </View>
       </ScrollView>
</View>

);

    function Othersitute(props) {
       
    const QuestionMark = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png',
        width: 17,
        height: 17,
        marginLeft: 10,
      };

    return <View style={{flexDirection: 'row',  borderColor: "black", marginBottom: 1, width: 355, borderWidth: 2, marginLeft: 10}}>
    <Text style={{fontSize: 19, }}> Mr. Math&Science is Not here today </Text>

        <Image  onPress={() => Linking.openURL('http://google.com')} style={{marginLeft:67}} source={QuestionMark}/>

</View>}
  
  function Greeting1(props) {
    const isHere = props.isHere;
    if (isHere) {
      return <Othersitute />;
    }
    return null
}




  
  function Othersitute2(props) {
   
    const QuestionMark = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png',
        width: 17,
        height: 17,
        marginLeft: 10,
      };

    return <View style={{flexDirection: 'row',  borderColor: "black", marginBottom: 1, width: 355, borderWidth: 2, marginLeft: 10}}>
    <Text style={{fontSize: 19, }}> Mrs. Enlish is Not here today </Text>

        <Image  onPress={() => Linking.openURL('http://google.com')} style={{marginLeft:120,}} source={QuestionMark}/>

</View>}

function Greeting2(props) {
const isHere2 = props.isHere2;
if (isHere2) {
  return <Othersitute2 />;
}
return null
}






function Othersitute3(props) {
    
    const QuestionMark = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png',
        width: 17,
        height: 17,
        marginLeft: 10,
      };

    return <View style={{flexDirection: 'row',  borderColor: "black", marginBottom: 1, width: 355, borderWidth: 2, marginLeft: 10}}>
    <Text style={{fontSize: 19, }}> Mrs. Arts&Music is Not here today </Text>

        <Image  onPress={() => Linking.openURL('http://google.com')} style={{marginLeft:80,}} source={QuestionMark}/>

</View>
}

function Greeting3(props) {
const isHere3 = props.isHere3;
if (isHere3) {
  return <Othersitute3 />;
}
return null
}






function Othersitute4(props) {

    const QuestionMark = {
        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/200px-Question_mark_%28black%29.svg.png',
        width: 17,
        height: 17,
        marginLeft: 10,
      };

    return <View style={{flexDirection: 'row',  borderColor: "black", marginBottom: 1, width: 355, borderWidth: 2, marginLeft: 10}}>
    <Text style={{fontSize: 19, }}> Mr. Gym is Not here today </Text>

        <Image  onPress={() => Linking.openURL('http://google.com')} style={{marginLeft:140,}} source={QuestionMark}/>

</View>
}

function Greeting4(props) {
const isHere4 = props.isHere4;
if (isHere4) {
  return <Othersitute4 />;
}
return null
}



function FEST(props) {
    return <Text style={{fontSize: 17, marginLeft: 10,}}>Yes, today is the Arts&Crafts festival.</Text>;
}

function NoA (props) {
    
    if (props.fest) {
        return <FEST />
    }
    return <Text>No</Text>
    

}



function FEST2(props) {
    return <Text style={{fontSize: 17, marginLeft: 10,}}>Yes, today is Halloween.</Text>;
}

function NoA2 (props) {
    
    if (props.fest2) {
        return <FEST2 />
    }
    return <Text>No</Text>
    

}

};


const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      HeaderT: {
        color: '#e3ecff',
        fontWeight: 'bold',
        fontSize: 44,
        marginTop: 0,
        width: 475,
        marginLeft: 115,
    
      },
      navi2:{
        height: 90,
    flexDirection:'row',
    backgroundColor: "white",
      },
      

});

export default SubScreen;
