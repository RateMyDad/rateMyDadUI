import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import { Container, Header, Tab, Tabs, TabHeading, Title, Content, Card, CardItem, Thumbnail, Text, Button, Right, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Left>
        </Left>
        <Body>
          <Title>C. Dog</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="bars" size={21} />
          </Button>
        </Right>
      </Header>

      {/*Content of profile*/}
      <Content style={{backgroundColor:'#EFFCCC'}} >
        <View style={{ backgroundColor: 'white',paddingTop: 5, borderTopWidth: 5, borderTopColor: '#B1CC74'  }}>

        {/** User Photo Stats**/}
        <View style={{ flexDirection: 'row' }}>

         {/**User photo takes 1/3rd of view horizontally **/}
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingBottom:5 }}>
            <Image source={require('C://rateMyDadUI/assets/dog.jpg')}
            style={{ width: 75, height: 75, borderRadius: 37.5 }} />
        </View>

        {/**User Stats take 2/3rd of view horizontally **/}
        <View style={{ flex: 3 }}>

        {/** Stats **/}
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end'
            }}>

            {/**Rating Stat */}
            <View style={{flexDirection:'column', justifyContent:'flex-start',  alignItems:'center' }}>
            <View style={{ alignItems: 'center', flexDirection:"row"}}>
                <Icon name="star" style={{ padding:5, color: '#7BCACE' }} size={20}></Icon>
                <Text>20</Text>
            </View>
            <Text style={{ paddingLeft:20,fontSize: 10, color: 'grey' }}>Rating</Text>
            </View>

            {/**Total Love stat */}
            <View style={{flexDirection:'column', justifyContent:'flex-start', alignItems:'center' }}>
            <View style={{ alignItems: 'center', flexDirection:"row"}}>
                <Icon name="heart" style={{ padding:5, color: '#7BCACE' }} size={17}></Icon>
                <Text>2,000</Text>
            </View>
            <Text style={{ paddingLeft:20,fontSize: 10, color: 'grey' }}>Love</Text>
            </View>
            
            {/**Rank stat */}
            <View style={{flexDirection:'column', justifyContent:'flex-start',  alignItems:'center' }}>
            <View style={{ alignItems: 'center', flexDirection:"row"}}>
                <Icon name="hashtag" style={{ padding:5, color: '#7BCACE' }} size={17}></Icon>
                <Text>3</Text>
            </View>
            <Text style={{ paddingLeft:20,fontSize: 10, color: 'grey' }}>Global</Text>
            </View>
        </View>

        {/**Edit profile and Settings Buttons
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>

            <View
                style={{ flexDirection: 'row' }}>

                {/** Edit profile takes up 3/4th 
                <Button bordered dark
                    style={{ flex: 3, marginLeft: 10, paddingTop:4, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>


                {/** Settings takes up  1/4th place 
                <Button bordered dark style={{
                    flex: 1,
                    height: 30,
                    marginRight: 10, marginLeft: 5,
                    justifyContent: 'center'
                }}>
                    <Icon name="globe" style={{ color: 'black' }} size={17}></Icon></Button>
            </View>
        </View>{/**End edit profile**/}
            </View>
        </View>

        <View style={{ padding: 10, borderTopWidth:1, borderTopColor:'#eae5e5' }}>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ paddingBottom:5, fontWeight: 'bold' }}>Courage T. Dog</Text>
                <Text>This is my dad, Courage. He's pretty cool.</Text>
            </View>
        </View>
        </View>

        {/**Buttonnnns to navigate to different screens: media, quotes, and skills */}
        <View>
        <View style={{ backgroundColor:'#7BCACE', flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
            <Button transparent>
            <Icon name="image" style={{ color: 'white' }} size={25}></Icon>
            </Button>
            <Button transparent>
            <Icon name="comment" style={{ color: 'white' }} size={25}></Icon>
            </Button>
            <Button transparent>
            <Icon name="gavel" style={{ color: 'white' }} size={25}></Icon>
            </Button>
        </View>
        </View>
      </Content>
      </Container>
    );
  }
}