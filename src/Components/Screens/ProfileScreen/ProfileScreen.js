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
//the 1 here can be anything from 1-7
var skillLevel = 1*30;

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

//This renders each skill takes type of skill and skill number variable
class Skill extends Component {
  render() {

    var iconName = "";
    if(this.props.thisSkill == "grilling")
    {
      iconName = "free-code-camp";
    }
    else if(this.props.thisSkill == "cooking")
    {
      iconName = "cutlery";
    }
    else if(this.props.thisSkill == "bags")
    {
      iconName = "square-o";
    }
    else if(this.props.thisSkill == "golf")
    {
      iconName = "flag-o";
    }
    else if(this.props.thisSkill == "softball")
    {
      iconName = "diamond";
    }
    else if(this.props.thisSkill == "coaching")
    {
      iconName = "comments-o";
    }
    else if(this.props.thisSkill == "generosity")
    {
      iconName = "connectdevelop";
    }
    else if(this.props.thisSkill == "looks")
    {
      iconName = "heartbeat";
    }
    else if(this.props.thisSkill == "dad factor")
    {
      iconName = "hand-spock-o";
    }
    else if(this.props.thisSkill == "fantasy football")
    {
      iconName = "lemon-o";
    }
    else if(this.props.thisSkill == "humor")
    {
      iconName = "smile-o";
    }
    else if(this.props.thisSkill == "emotional stability")
    {
      iconName = "compress";
    }
    else if(this.props.thisSkill == "handiness")
    {
      iconName = "bath";
    }
    else if(this.props.thisSkill == "kid skills")
    {
      iconName = "child";
    }
    else if(this.props.thisSkill == "stealth food prep")
    {
      iconName = "apple";
    }
    else if(this.props.thisSkill == "technology")
    {
      iconName = "mobile";
    }
    else if(this.props.thisSkill == "furniture assembly")
    {
      iconName = "chain-broken";
    }
    
    
    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 30, marginBottom: 10}}>
      {/*This is each icon and skill bar*/}
        <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>

          <View style = {{position: 'relative', paddingRight: 10, justifySelf: 'flex-start', flexBasis: '12%'}}>
            <Icon name = {iconName} style={{fontSize: 25}}></Icon>
          </View>

          <View  style={{float: 'right', width: 250}} >
            <View style={styles.skillBar}>
              <View style={styles.skillBarEmpty}/>
              {/*This is the green space*/}
              <View style={styles.skillBarFill} />
              {/*This is the green space*/}
              <View style={{position:'absolute',left:skillLevel-13, top:2.5}}>
                <Text style={{fontSize:11,color:'black'}}>1</Text>
              </View>   
            </View>       
          </View>

      </View>
    </View>
    );
  }
}

export default class ProfileScreen extends Component {
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
  //these will be the grid of photos
  renderPictures() {

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

//renders each section based on button clicked
renderSection() {
  //show grid of pictures
  if (this.state.activeIndex == 0) {
    return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {this.renderPictures()}
    </View>)
  }
  //show dad posts
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
      
                    <Image source={images[0]} style={{ width: 50, height: 50, borderRadius: 37.5 }} />

                    <View  style={{alignItems: 'flex-start', flexDirection: 'column', justifyContent:'space-around'}} >
                      <Button small dark transparent>
                        <Text>Courage T. Dog</Text>
                      </Button>
                      <Text style={{ alignSelf:'flex-start', fontSize: 10,  paddingTop:0, padding:6, color: 'grey'}}>Rank #8 Global</Text>
                    </View>
                </View>
              </View>
            </Left>
            {/** this is the 'up-vote' button */}
            <Right>

            <View style={{paddingTop:5,flex:1, alignItems: 'flex-end',  justifyContent: 'flex-start', flexDirection: 'column' }}>

                   <Button iconLeft small transparent>
                      <Icon name="arrow-circle-up" style={{ color: '#829399' }} size={30}></Icon>
                   </Button>
                      <Text style={{ alignSelf: 'flex-end', fontSize: 10,  paddingRight:3, paddingTop:3, color: 'grey'}}>300</Text>
                </View>
            </Right>
          </CardItem>

          {/*This is where post content goes*/}
          <CardItem cardBody>
          <Image style={{width: 370, height: 200}}
                source={require('../../../../assets/dog.jpg')}/>
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
    //if the skill tab is selected
    else if (this.state.activeIndex == 2) {
      return(
        <View style={{paddingBottom:2, alignContent:'stretch', flexDirection:'column'}}>
        <Card>
          <CardItem>
            <View style={{flexDirection:'column'}}>
            {/*Show Skills*/}
            <Skill thisSkill="grilling" level="56"></Skill>
            <Skill thisSkill="cooking"></Skill>
            <Skill thisSkill="bags"></Skill>
            <Skill thisSkill="golf"></Skill>
            <Skill thisSkill="softball"></Skill>
            <Skill thisSkill="coaching"></Skill>
            <Skill thisSkill="generosity"></Skill>
            <Skill thisSkill="looks"></Skill>
            <Skill thisSkill="dad factor"></Skill>
            <Skill thisSkill="fantasy football"></Skill>
            <Skill thisSkill="humor"></Skill>
            <Skill thisSkill="emotional stability"></Skill>
            <Skill thisSkill="handiness"></Skill>
            <Skill thisSkill="kid skills"></Skill>
            <Skill thisSkill="stealth food prep"></Skill>
            <Skill thisSkill="technology"></Skill>
            <Skill thisSkill="furniture assembly"></Skill>
            </View>
          </CardItem>
        </Card>
    </View>)
    }
}
  render() {

    var profileHeaderStatsViewStyle = {
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center'
    }

    var profileHeaderStatsIconStyle = {
      padding:5,
      color: '#7BCACE',
      fontSize: 20
    }
    
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
        <View style={{ backgroundColor: 'white', borderTopWidth: 5, borderTopColor: '#B1CC74'  }}>

        {/** User Photo Stats**/}
        <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>

         {/**User photo takes 1/3rd of view horizontally **/}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 0 }}>
            <Image source={images[0]} style={{ width: 75, height: 75, borderRadius: 37.5 }} />
        </View>

        {/**User Stats take 2/3rd of view horizontally **/}
        <View style={{ flex: 3, backgroundColor: 'white', flexDirection: "row", alignItems: 'center'}}>

        {/** Stats **/}
        <View
            style={{
                flex: 3,
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>

            {/**Rating Stat */}
            <View style={profileHeaderStatsViewStyle}>
              <View style={{ alignItems: 'center', flexDirection:"row"}}>
                  <Icon name="star" style={profileHeaderStatsIconStyle}></Icon>
                  <Text style={{fontSize: 20}}>20</Text>
              </View>
              <Text style={{ paddingLeft:0, fontSize: 10, color: 'grey'}}>Rating</Text>
            </View>

            {/**Total Love stat */}
            <View style={profileHeaderStatsViewStyle}>
              <View style={{ alignItems: 'center', flexDirection:"row"}}>
                  <Icon name="heart" style={profileHeaderStatsIconStyle}></Icon>
                  <Text style={{fontSize: 20}}>2,000</Text>
              </View>
              <Text style={{ paddingLeft:0,fontSize: 10, color: 'grey' }}>Love</Text>
            </View>

            {/**Rank stat */}
            <View style={profileHeaderStatsViewStyle}>
            <View style={{ alignItems: 'center', flexDirection:"row"}}>
                <Icon name="hashtag" style={profileHeaderStatsIconStyle}></Icon>
                <Text style={{fontSize: 20}}>3560</Text>
            </View>
            <Text style={{ paddingLeft:0,fontSize: 10, color: 'grey' }}>Global</Text>
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

        <View style={{ padding: 10, paddingTop: 30, paddingBottom: 15, borderTopWidth:1, borderTopColor:'#eae5e5' }}>
            <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ paddingBottom:5, fontWeight: 'bold' }}>Courage T. Dog</Text>
                <Text>This is my dad, Courage. He's pretty cool.</Text>
            </View>
        </View>
        </View>

        {/**Buttons to navigate to different screens: media, quotes, and skills */}
        <View>

        <View style={{ flexDirection: 'row', justifyContent: 'stretch', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>

            <Button transparent onPress = {() => this.segmentClicked(0)} active={this.state.activeIndex == 0} style = {this.state.activeIndex == 0 ? styles.profileNavButtonActive : styles.profileNavButtonInactive}>
            <Icon name="gavel" style={[this.state.activeIndex == 0 ? {color:'#000058'} : {color: 'white'}] } size={25}></Icon>
            </Button>

            <Button transparent onPress = {() => this.segmentClicked(1)} active={this.state.activeIndex == 1} style = {this.state.activeIndex == 1 ? styles.profileNavButtonActive : styles.profileNavButtonInactive}>
            <Icon name="image" style={[this.state.activeIndex == 1 ? {color:'#000058'} : {color: 'white'}] } size={25}></Icon>
            </Button>

            <Button transparent onPress = {() => this.segmentClicked(2)} active={this.state.activeIndex == 2} style = {this.state.activeIndex == 2 ? styles.profileNavButtonActive : styles.profileNavButtonInactive}>
            <Icon name="comment" style={[this.state.activeIndex == 2 ? {color:'#000058'} : {color: 'white'}] } size={25}></Icon>
            </Button>

        </View>
        {this.renderSection()}
        </View>
      </Content>
      </Container>
    );
  }
}
