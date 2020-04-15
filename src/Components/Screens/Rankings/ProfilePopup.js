import React, {Component} from "react";
import {Modal, Text, View, StyleSheet, Image} from "react-native";
import {Content, Container, Button, Body, Header, Left, Right, Title} from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create
({

  skillBar: {
  },

  skillBarEmpty: {
    width: '100%',
    height: '100%',
    borderRadius:5,
    borderWidth:1,
    borderColor: 'black',
  },

  skillBarFill: {
    position: 'absolute',
    zIndex: -1,
    height: '100%',
    borderRadius:3,
    borderWidth:0,
    backgroundColor: '#B1CC74',
  },

  yinyangAfter: {
    position: 'absolute',
    left: 28,
    top:2,
    width: 3,
    height: 16,
    backgroundColor: 'gray',
    opacity:0.5,
  },

  profileNavButton: {

  },

  profileNavButtonActive: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 0,
    backgroundColor: '#70b8bc'
  },

  profileNavButtonInactive: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 0,
    backgroundColor: '#7BCACE'
  }

});

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

var profileHeaderStatsIconStyle = {
    padding:5,
    color: '#7BCACE',
    fontSize: 20
  }

  var profileHeaderStatsViewStyle = {
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center'
  }

//the 1 here can be anything from 1-7
var skillLevel = 1*40;

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
  
      var barWidth = (this.props.skillAmt/10) * 100 + "%"
  
      return(
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 30, marginBottom: 10, paddingLeft:20}}>
        {/*This is each icon and skill bar*/}
          <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>
  
            <View style = {{position: 'relative', justifySelf: 'flex-start', flexBasis: '12%'}}>
            <Icon name = {iconName} style={{paddingRight:10}} size={25}></Icon>
            </View>
  
            <View  style={{float: 'right', width: 250}} >
              <View style={styles.skillBar}>
                <View style={styles.skillBarEmpty}/>
                {/* Had trouble using the styles object and only changing the width style inline */}
                <View style={
                  { position: 'absolute',
                    zIndex: -1,
                    height: '100%',
                    width: barWidth,
                    borderRadius:3,
                    borderWidth:0,
                    backgroundColor: '#B1CC74'
                  }} />
                <View style={{position:'absolute',left:skillLevel - 13, top:2.5}}>
                  <Text style={{fontSize:15, color:'black'}}>{this.props.skillAmt}</Text>
                </View>
              </View>
            </View>
        </View>
      </View>
      );
    }
  }

  export default class ProfilePopup extends Component {
    constructor(props) {
        super(props); 
       
        this.closePopup = this.closePopup.bind(this);

        this.state = {
            visibility: props.modalVisible
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            this.setState({ visibility: this.props.modalVisible })
        }
    }

    
    closePopup() { 
        this.setState({ visibility: false });

        this.props.updateParent();
    }
    
      render() {
        return(
        <Modal
            visible={this.state.visibility}>
        <Container>
          <Header>
            <Left style={{flex:1}}>
                <Button transparent
                    onPress = {() => this.closePopup()}>
                    <Text style={{color: "black", fontSize: 25, paddingLeft: 15}}>{"<"}</Text>
                </Button>
            </Left>
            <Body style = {{flex: 2}}>
                <Title>Dad Profile</Title>
            </Body>
            <Right style = {{flex: 1}}>
            </Right>
          </Header>

      {/*Content of profile*/}
      <Content style={{backgroundColor:'#EFFCCC'}} >
        <View style={{ backgroundColor: 'white', borderTopWidth: 10, borderTopColor: '#B1CC74'  }}>

          {/**User photo takes 1/3rd of view horizontally **/}
          <View style={{ paddingTop: 20, flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 0 }}>
              <Image source={images[0]} style={{ width: 150, height: 150, borderRadius: 100 }} />
          </View>

          <View style={{ padding: 10, paddingTop: 10, paddingBottom: 15, alignItems:'center' }}>
              <View style={{ paddingHorizontal: 10 }}>
                  <Text style={{ paddingBottom:5, fontWeight: 'bold' }}>{this.props.name}</Text>
              </View>
          </View>

          {/** User Photo Stats**/}
          <View style={{ flexDirection: 'row',  paddingBottom: 10}}>

            {/**User Stats take 2/3rd of view horizontally **/}
            <View style={{ flex: 3, backgroundColor: 'white', flexDirection: "row", alignItems: 'center'}}>


            {/** Stats **/}
            <View style={{
              flex: 3,
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}>

            {/**Rating Stat */}
            <View style={profileHeaderStatsViewStyle}>
              <View style={{ alignItems: 'center', flexDirection:"row"}}>
                  <Icon name="star" style={profileHeaderStatsIconStyle}></Icon>
                  <Text style={{fontSize: 20}}>{this.props.skillScore}</Text>
              </View>
              <Text style={{ paddingLeft:0, fontSize: 10, color: 'grey'}}>Rating</Text>
            </View>

            {/**Rank stat */}
            <View style={profileHeaderStatsViewStyle}>
            <View style={{ alignItems: 'center', flexDirection:"row"}}>
                <Icon name="hashtag" style={profileHeaderStatsIconStyle}></Icon>
                <Text style={{fontSize: 20}}>{this.props.rank}</Text>
            </View>
            <Text style={{ paddingLeft:0,fontSize: 10, color: 'grey' }}>Global</Text>
            </View>
          </View>

            </View>
        </View>

        </View>
            {/**Buttons to navigate to different screens: media, quotes, and skills */}
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'stretch', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
            </View>
            <View style={{paddingBottom:2, paddingLeft: '5%', paddingTop: '10%', alignContent:'flex-start', flexDirection:'column'}}>
                  {/*Show Skills*/}
                  <Skill thisSkill="grilling" skillAmt = {this.props.skills["grilling"]}></Skill>
                  <Skill thisSkill="cooking" skillAmt = {this.props.skills["cooking"]}></Skill>
                  <Skill thisSkill="bags" skillAmt = {this.props.skills["bags"]}></Skill>
                  <Skill thisSkill="softball" skillAmt = {this.props.skills["softball"]}></Skill>
                  <Skill thisSkill="coaching" skillAmt = {this.props.skills["coaching"]}></Skill>
                  <Skill thisSkill="generosity" skillAmt = {this.props.skills["generosity"]}></Skill>
                  <Skill thisSkill="looks" skillAmt = {this.props.skills["looks"]}></Skill>
                  <Skill thisSkill="dad factor" skillAmt = {this.props.skills["dad_factor"]}></Skill>
                  <Skill thisSkill="fantasy football" skillAmt = {this.props.skills["fantasy_football"]}></Skill>
                  <Skill thisSkill="humor" skillAmt = {this.props.skills["humor"]}></Skill>
                  <Skill thisSkill="emotional stability" skillAmt = {this.props.skills["emotional_stability"]}></Skill>
                  <Skill thisSkill="handiness" skillAmt = {this.props.skills["handiness"]}></Skill>
                  <Skill thisSkill="kid skills" skillAmt = {this.props.skills["kids"]}></Skill>
                  <Skill thisSkill="stealth food prep" skillAmt = {this.props.skills["stealth_food_preparation"]}></Skill>
                  <Skill thisSkill="technology" skillAmt = {this.props.skills["tech"]}></Skill>
                  <Skill thisSkill="furniture assembly" skillAmt = {this.props.skills["furniture_assembly"]}></Skill>
            </View>
          </View>
        </Content>
        </Container>
        </Modal>
        );
      }
  }

