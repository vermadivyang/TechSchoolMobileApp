import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity } from 'react-native';
import Card3 from "./Components/FestCard";
import Icon from 'react-native-vector-icons/SimpleLineIcons';


const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUq3AKNa_IDmcpQ9VXSTiCEJ2SU_ddfeSKOA&usqp=CAU" ,
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
  

const FestScreen = props => {
    return (
        <View style ={{flex: 1,}}>

<ScrollView style={{backgroundColor:'#e3ecff',}}>

    <View>

    <ImageBackground source={image} style={styles.image}>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
            <Text style={styles.HeaderT}>Festivals</Text>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
      </ImageBackground>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      

      <Card3 title="Arts & Craft Fest" imageSS={require('./Assets/TechSchoolImage.jpg')} content="      The Arts and Crafts festival was founded by Mr. ArtFounder 10 years ago. It is normaly in May. During classes, students do there subject in a crafty way. After lunch, everybody goes outside and makes art and crafts!" content2="This year it is suported by: 'Tech makers museum'." content3="Click here to volenter!"/>
      <Text></Text>
      <Card3 title="Music Fest" imageSS={require('./Assets/TechSchoolImage.jpg')} content="     The two Music festivals was founded by Mr. MusicFounder 15 years ago. It is normaly in february or in November. Before school ends, sudents go to the Cafiteria, where the tables are put away, and sit. One half of 5th grade and one half of 4th grade play drums or recorders on a stage in Febary. The other half of the two grades play in November" content2="This year it is suported by: 'Ari-Tech finders'." content3="Click here to volenter!"/>
      <Text></Text>
      <Card3 title="End of year Fest" imageSS={require('./Assets/TechSchoolImage.jpg')} content="      The End of year festival was here from the beginning of the schools life. It is the end of the year in june. After lunch, students go have fun ouside in the playground. There are free snacks, and fun games made by the teachers!" content2="This year it is suported by: 'Cool Duck Slides'." content3="Click here to volenter!"/>
      <Text></Text>
      
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
       <Image source={require('./Assets/Line.png')} style={{marginLeft:14,}}/>
       </TouchableOpacity>

       </View>

       <View>
       <TouchableOpacity onPress={() => props.navigation.navigate('Sub')}>

       <Button title="Others" onPress={() => props.navigation.navigate('Sub')}/> 
       <Image source={require('./Assets/Question.png')} style={{marginLeft:15,}}/>
       <Image source={require('./Assets/Line2.png')} style={{marginLeft:13,}}/>
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

export default FestScreen;
//975-263-6031 = Mrs.Enlish, omg-whe-yqca