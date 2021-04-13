import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Linking, Button, TouchableOpacity } from 'react-native';
import Card2 from "./Components/ContactCard";
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const image = {
    uri: "https://media.istockphoto.com/vectors/student-id-card-university-school-college-identity-card-vector-vector-id1154987560" ,
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
  
  

const ContactScreen = props => {
    return (
        <View style ={{flex: 1,}}>

<ScrollView style={{backgroundColor:'#e3ecff',}}>

    <View>

    <ImageBackground source={image} style={styles.image}>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
            <Text style={styles.HeaderT}>Contacts</Text>
      <Text style={{fontSize: 30,}}></Text>
      <Text style={{fontSize: 30,}}></Text>
      </ImageBackground>

      <Text></Text>
      <Text></Text>
      <Text></Text>
      

      <Card2 title="Contact Tech School at:" imageSS={require('./Assets/TechSchoolImage.jpg')} content="123-456-7890" content2="TechSchool.Suport@gmail.com" content3="Tech.teachers@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mrs. Principle at:" imageSS={require('./Assets/TechSchoolPic2.png')} content="321-654-0987" content2="Principle.Tech@gmail.com" content3="Principle.Suport@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mr. Math&Sci\ at:" imageSS={require('./Assets/MathChalk.jpg')} content="314-195-5091" content2="MathScience.Tech@gmail.com" content3="Math.Science@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mrs. English at:" imageSS={require('./Assets/BooksEnlish.jpg')} content="877-788-8787" content2="English.Tech@gmail.com" content3="English.Teach@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mrs. Art&Music at:" imageSS={require('./Assets/TvArt.jpg')} content="111-222-2633" content2="ArtMusic.Tech@gmail.com" content3="Art.Music@yahoo.com"/>
      <Text></Text>
      <Card2 title="Contact Mr. Gym at:" imageSS={require('./Assets/Gym.jpg')} content="882-777-5559" content2="Gym.Tech@gmail.com" content3="Gym.Teach@yahoo.com"/>


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
       <Image source={require('./Assets/Line.png')} style={{marginLeft:24,}}/>
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
        color: 'gray',
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

export default ContactScreen;
//975-263-6031 = Mrs.English, omg-whe-yqca