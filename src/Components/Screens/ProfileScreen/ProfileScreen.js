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

import Popup from "../Popup"
// import "../../../styles/common.css"

var { height, width } = Dimensions.get('window');

var images = [
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
  require('../../../../assets/dog.jpg'),
]

export default class TabsExample extends Component {
  constructor(props)
  {
    super(props)

    this.updateParent = this.updateParent.bind(this);

     this.state = {
       activeIndex: 0,
       modalVisible: false
     }
  }

  segmentClicked(index) {
    this.setState({
        activeIndex: index
    })
  }

  updateParent() {
    this.setState({ modalVisible: false });
  }

  showPopup(){
    this.setState({ modalVisible: true });
  }

  renderSectionOne() {
    return images.map((image, index) => {
        return (
            <View key={index} style={[{ width: (width) / 3 }, { height: (width) / 3 }, { marginBottom: 2 }, index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }]}>
                <Image style={{
                    flex: 1,
                    alignSelf: 'stretch',
                    width: undefined,
                    height: undefined,

                }}
                    source={image}>
                </Image>

            </View>
        )
    })

}
  renderSection() {

    if (this.state.activeIndex == 0) {

        return (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

          {this.renderSectionOne()}
        </View>
        
        )

    }
    else if (this.state.activeIndex == 1) {
        return (
        <View style={{paddingBottom:2, alignContent:'stretch'}}> 
        <Card>
          <CardItem>
            <Left>
              <View  style={{ flexDirection: 'row' }}>
                {/*Mini profile pic and misc info*/}
                  <View 
                    style={{flex: 1, alignItems: 'left', justifyContent: 'flex-start', flexDirection: 'row' }}>
            
                    <Image source={require('../../../../assets/dog.jpg')}
                    style={{ width: 50, height: 50, borderRadius: 37.5 }} />

                    <View  style={{alignItems: 'flex-start', flexDirection: 'column', justifyContent:'space-around'}} >
                      <Button small dark transparent>
                        <Text>Courage T. Dog</Text>
                      </Button>
                      <Text style={{ alignSelf:'flex-start', fontSize: 10,  paddingTop:0, padding:6, color: 'grey'}}>Rank #3 Global</Text>
                    </View>
                </View>
              </View>
            </Left>
            {/** this is the 'up-vote' button */}
            <Right>
            <View 
                    style={{paddingTop:5,flex:1, alignItems: 'flex-end',  justifyContent: 'flex-start', flexDirection: 'column' }}>
            
                   <Button iconLeft small transparent>
                      <Icon name="arrow-circle-up" style={{ color: '#829399' }} size={30}></Icon>
                   </Button>
                      <Text style={{ alignSelf: 'flex-end', fontSize: 10,  paddingRight:3, paddingTop:3, color: 'grey'}}>300</Text>
                </View>
            </Right>
          </CardItem>

          {/*This is where card content goes*/}
          <CardItem cardBody>
          <Image style={{width: 370, height: 200}}
                source={require('../../../../assets/dog.jpg')}
          />
          </CardItem>
          {/*Bottom of the card (left side) */}
          <CardItem>
            {/*Left side contains hearts/comments buttons */}
            <Left>
              <View style={{flexDirection:'row'}}>
              <Button transparent>
              <Icon name="heart" style={{ color: '#7BCACE' }} size={25}></Icon>
                <Text style={{padding:0 ,color:'black'}}>4 million</Text>
              </Button>
            
              <Button transparent>
                <Icon name="comment" style={{ color: '#7BCACE' }} size={25}></Icon>
                <Text style={{padding:0 ,color:'black'}}>1.2 million</Text>
              </Button>
              </View>
            </Left>

            {/**Just the downvote button (right side) */}
            <Right>
            <View 
                    style={{paddingTop:5,flex:1, alignItems: 'flex-end',  justifyContent: 'flex-start', flexDirection: 'column' }}>
            
                   <Button iconLeft small transparent>
                      <Icon name="arrow-circle-down" style={{ color: '#829399' }} size={30}></Icon>
                   </Button>
                </View>
            </Right>
          </CardItem>
        </Card>
        </View>
        )
    }
    else if (this.state.activeIndex == 2) {
      return(
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

      {this.renderSectionOne()}
      </View>)
    }
}
  render() {
    return (
      <Container>
        <Popup 
          modalVisible={this.state.modalVisible}
          updateParent={this.updateParent}/>
        <Header>
        <Left>
        </Left>
        <Body>
          <Title>C. Dog</Title>
        </Body>
        <Right>
          <Button transparent
            onPress = {() => this.showPopup()}>
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
            <Image source={require('../../../../assets/dog.jpg')}
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
            <Button transparent onPress = {() => this.segmentClicked(0)} active={this.state.activeIndex ==0}  >
            <Icon name="image" style={[this.state.activeIndex == 0 ? {color:'#000058'} : {color: 'white'}] } size={25}></Icon>
                
            </Button>
            <Button transparent onPress = {() => this.segmentClicked(1)} active={this.state.activeIndex ==1}>
            <Icon name="comment" style={[this.state.activeIndex == 1 ? {color:'#000058'} : {color: 'white'}] } size={25}></Icon>
            </Button>
            <Button transparent onPress = {() => this.segmentClicked(2)} active={this.state.activeIndex ==2}>
            <Icon name="gavel" style={[this.state.activeIndex == 2 ? {color:'#000058'} : {color: 'white'}] } size={25}></Icon>
            </Button>
        </View>
        {this.renderSection()}
        </View>
      </Content>
      </Container>
    );
  }
}