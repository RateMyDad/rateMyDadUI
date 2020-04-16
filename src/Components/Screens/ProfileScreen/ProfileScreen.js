import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
  Alert,
  DevSettings
} from "react-native";
import { Container, Header, Tab, Tabs, TabHeading, Title, Content, Card, CardItem, Thumbnail, Text, Button, Right, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatus } from "../../../model";
import Popup from "../Popup"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import "../../../styles/common.css"

var { height, width } = Dimensions.get('window');
var base64 = require('base64-js');
var description = "error";

//the 1 here can be anything from 1-7
var skillLevel = 1*40;

var server_url = "http://99.60.8.214:82";
//var server_url = "http://192.168.1.76:82"

var buttonColor = {color: 'red'}

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

//determine skill msg
function determineMsg(name)
{
  if(name == "free-code-camp")
  {
    description = "grilling";
  }
  else if(name == "cutlery")
  {
    description = "cooking";
  }
  else if(name == "square-o")
  {
    description = "bags";
  }
  else if(name == "flag-o")
  {
    description = "golf";
  }
  else if(name == "diamond")
  {
    description = "softball";
  }
  else if(name == "comments-o")
  {
    description = "coaching";
  }
  else if(name == "connectdevelop")
  {
    description = "generosity";
  }
  else if(name == "heartbeat")
  {
    description = "looks";
  }
  else if(name == "hand-spock-o")
  {
    description = "dad factor";
  }
  else if(name == "lemon-o")
  {
    description = "fantasy football";
  }
  else if(name == "smile-o")
  {
    description = "humor";
  }
  else if(name == "compress")
  {
    description = "emotional stability";
  }
  else if(name == "bath")
  {
    description = "handiness";
  }
  else if(name == "child")
  {
    description = "kid skills";
  }
  else if(name == "apple")
  {
    description = "stealth food prep";
  }
  else if(name == "mobile")
  {
    description = "technology";
  }
  else if(name == "chain-broken")
  {
    description = "furniture assembly";
  }
}

function createTwoButtonAlert(event, iconName) {
  determineMsg(iconName);
Alert.alert(
  "This skill is:",
  description,
  [
    
    { text: "OK", onPress: () => console.log("OK Pressed") }
  ],
  { cancelable: false })
}

var images = [
  require('../../../../assets/blankProfile.png'),
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

    var barWidth = (this.props.skillAmt/10) * 100 + "%"

    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', height: 30, marginBottom: 10, paddingLeft:20}}>
      {/*This is each icon and skill bar*/}
        <View style={{justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>

          <View style = {{position: 'relative', justifySelf: 'flex-start', flexBasis: '12%'}}>
          <Button transparent onPress={(event) => createTwoButtonAlert(event, iconName)}>
            <Icon name = {iconName} style={{paddingRight:10}} size={25}></Icon>
          </Button>

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

export default class ProfileScreen extends Component {
  constructor(props)
  {
    super(props)

    this.updateParent = this.updateParent.bind(this);
    this.checkStatus = this.checkStatus.bind(this);

     this.state = {
       activeIndex: 0,
       modalVisible: false,
       status: 0,
       username: "",
       password: "",
       bottomMessage: "",
       postLoginUsername: "",
       hasToken: false,
       isLoaded: false,
       profile : {
         name : "",
         skills: {
          "grilling": 0,
          "cooking": 0,
          "bags": 0,
          "softball": 0,
          "coaching": 0,
          "generosity": 0,
          "looks": 0,
          "dad_factor": 0,
          "fantasy_football": 0,
          "humor": 0,
          "emotional_stability": 0,
          "handiness": 0,
          "kids": 0,
          "stealth_food_preparation": 0,
          "tech": 0,
          "furniture_assembly": 0,
          "photography": 0,
         },
         meta: {
          "rating": 0,
          "skillScore": 0
         }
       }
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

  componentDidMount() {
    AsyncStorage.getItem('id_token').then(async (token) => {
      var status = 0

      if(token !== null)
      {
        status = 1
      }

      this.setState({ hasToken: token !== null, isLoaded: true, status: status})
    })
    .then(this.checkStatus()).then(this.updateProfile())

    //this.checkStatus();
  }

  async getRatings() {
    console.log("[Ranking] Sending request to " + server_url + "/api/dad_profile/ratings");
    AsyncStorage.getItem('id_token').then(async (token) => {
        await fetch(server_url + "/api/dad_profile/ratings")
    })
  }

  async checkStatus() {
    AsyncStorage.getItem('id_token').then(async (token) => {  

      await this.getRatings(); 

      const response = await fetch(server_url + "/api/protected/user/check_status", {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + token }
      });

      const data = await response.json(); 

      let message = data.message;
      // 0 if not logged in.

      // 1 if logged in and dad profile created.
      if (message === "You already have a profile created!") {
        console.log("Checking status... 1")
        this.setState({ status: 1 })
        console.log("Going to update profile:")
        await this.updateProfile()
      }

      // 2 if logged in but no dad profile created.
      else {
        console.log("Checking status... 2")
        this.setState({ status: 2 })
      }
    })

  }

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  async logout() {
    console.log("Logging out user.");
    AsyncStorage.removeItem("id_token");
    this.setState({status : 0});
    this.setState({
      status : 0, 
      profile: {
        skills: {
          "grilling": 0,
          "cooking": 0,
          "bags": 0,
          "softball": 0,
          "coaching": 0,
          "generosity": 0,
          "looks": 0,
          "dad_factor": 0,
          "fantasy_football": 0,
          "humor": 0,
          "emotional_stability": 0,
          "handiness": 0,
          "kids": 0,
          "stealth_food_preparation": 0,
          "tech": 0,
          "furniture_assembly": 0,
          "photography": 0
         },
         meta: {
           "rating": 0,
           "skillScore": 0
         }
      }
    });
  }

  async updateProfile() {
    console.log("Updating profile -- current state " + this.state.status)
    if(this.state.status  === 1) {

      console.log("Retrieving dad profile for user.")
      AsyncStorage.getItem('id_token').then(async (token) => {
        const response = await fetch(server_url + "/api/protected/dad_profile/me", {
          method: 'GET',
          headers: { 'Authorization': 'Bearer ' + token }
        });

        const data = await response.json(); 

        console.log("Update profile data:")
        console.log(data)
        this.setState({
          profile: {
            name: data.name.first + " " + data.name.last,
            skills: data.skills,
            meta: data.meta
          }
        })
      })
    }
  }

  async login() {
    let data = {
      "username": this.state.username,
      "password": this.state.password
    };

    console.log("Inside of login function:")
    console.log(data); 

    const response = await fetch(server_url + "/user/login", {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (response.status === 400) {
      this.setState({ username: "", password: "", bottomMessage: "Invalid login. Please try again." });
      return 
    }

    else {
      const responseData = await response.json(); 

      var id_token = responseData.id_token
      var username = this.state.username
      this.saveItem("id_token", id_token)
      //this.checkStatus();
      this.setState({
        postLoginUsername: username,
        id_token: id_token,
        access_token: responseData.access_token
      });
  
      console.log("Post-login username:");
      console.log(this.state.postLoginUsername);
      await this.checkStatus();
      await this.updateProfile();
      this.setState({ username: "", password: "", bottomMessage: "" });
      return responseData;
    } 
  }

  async createAccount() {
    let data = {
      "username": this.state.username,
      "password": this.state.password
    };

    if (data["username"].length < 8 || data["password"].length < 8) {
      this.setState({ bottomMessage: "Username/Password must be at least 8 characters long." });
      return
    }

    const response = await fetch(server_url + "/user/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.status === 201) {
      console.log("Profile created!");
      await this.login();
    }

    else {
      console.log("Something went wrong.");
      this.setState({ username: "", password: "", bottomMessage: "Username already exists." })
    }
  }


//renders each section based on button clicked
renderSection() {
  //show grid of pictures
  if (this.state.activeIndex == 1) {
    return (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text>This feature is coming soon!</Text>
      </View>)
  }
  //show dad posts
  else if (this.state.activeIndex == 2) {
    return (
      <View style={{paddingBottom:2, alignContent:'stretch'}}>
        <Text>This feature is coming soon!</Text>
      </View>)
    }
    //if the skill tab is selected
    else if (this.state.activeIndex == 0) {
      return(

        <View style={{paddingBottom:2, paddingLeft: '5%', paddingTop: '10%', alignContent:'flex-start', flexDirection:'column'}}>

              {/*Show Skills*/}
              <Skill thisSkill="grilling" skillAmt = {this.state.profile.skills["grilling"]}></Skill>
              <Skill thisSkill="cooking" skillAmt = {this.state.profile.skills["cooking"]}></Skill>
              <Skill thisSkill="bags" skillAmt = {this.state.profile.skills["bags"]}></Skill>
              <Skill thisSkill="softball" skillAmt = {this.state.profile.skills["softball"]}></Skill>
              <Skill thisSkill="coaching" skillAmt = {this.state.profile.skills["coaching"]}></Skill>
              <Skill thisSkill="generosity" skillAmt = {this.state.profile.skills["generosity"]}></Skill>
              <Skill thisSkill="looks" skillAmt = {this.state.profile.skills["looks"]}></Skill>
              <Skill thisSkill="dad factor" skillAmt = {this.state.profile.skills["dad_factor"]}></Skill>
              <Skill thisSkill="fantasy football" skillAmt = {this.state.profile.skills["fantasy_football"]}></Skill>
              <Skill thisSkill="humor" skillAmt = {this.state.profile.skills["humor"]}></Skill>
              <Skill thisSkill="emotional stability" skillAmt = {this.state.profile.skills["emotional_stability"]}></Skill>
              <Skill thisSkill="handiness" skillAmt = {this.state.profile.skills["handiness"]}></Skill>
              <Skill thisSkill="kid skills" skillAmt = {this.state.profile.skills["kids"]}></Skill>
              <Skill thisSkill="stealth food prep" skillAmt = {this.state.profile.skills["stealth_food_preparation"]}></Skill>
              <Skill thisSkill="technology" skillAmt = {this.state.profile.skills["tech"]}></Skill>
              <Skill thisSkill="furniture assembly" skillAmt = {this.state.profile.skills["furniture_assembly"]}></Skill>
        </View>
      )
    }
}
  render() {
    if(!this.state.isLoaded){
      return (
        <ActivityIndicator />
      )
    }
    let status = this.state.status;
    console.log("Status in render: " + status);

    if (status === 0) {
      var inputBoxStyle = {
        backgroundColor: "#f3fcd9",
        height: 45,
        marginTop: 10,
        width: 300,
        marginBottom: 15,
        borderLeftWidth: 5,
        borderRadius: 0,
        padding: 10,
        fontSize: 18,
        textAlign: "center",
        borderColor: "#dae6ba",
        color: "#aaa",
      }

      return (
        <Container>
          <Header>
            <Body>
              <Title>You must be logged in to use this feature.</Title>
            </Body>
          </Header>

          <Content>
            <View style={{ alignItems: "center", marginTop: 30 }}>
              <Text style={{ fontWeight: "bold", fontSize: 30, marginBottom: 15 }}>Login</Text>

              <Text style={{ fontWeight: "bold" }}>Username</Text>
                <TextInput placeholder="Username"
                    placeholderTextColor="#ccc"
                    onChangeText={(text) => this.setState({ username: text })}
                    style={inputBoxStyle}
                    value={this.state.username}/>

              <Text style={{ fontWeight: "bold" }}>Password</Text>
                <TextInput placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ccc"
                    onChangeText={(text) => this.setState({ password: text })}
                    style={inputBoxStyle}
                    value={this.state.password}/>

              <Body style={{ marginTop: 15, flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Button success
                    style={{ marginBottom: 20, width: "40%"}}
                    onPress={async () => await this.login()}>
                    <Text style={{ fontWeight: "bold", left: 45}}>Login</Text>
                </Button>
                <Text> </Text>
                <Button block
                    style={{ marginBottom: 20, width: "40%"}}
                    onPress={async () => await this.createAccount()}>
                    <Text style={{ fontWeight: "bold"}}>Create Account</Text>
                </Button>
              </Body>

              <Text style={{ color: "red" }}>{this.state.bottomMessage}</Text>
            </View>
          </Content>
        </Container>
      )
    }

    else {

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

      return (
        <Container>
          <Popup
            modalVisible={this.state.modalVisible}
            updateParent={this.updateParent}
            checkStatus={this.checkStatus}
            status={this.state.status}
            username={this.state.postLoginUsername}/>
          <Header>
            <Left>
              <Button transparent onPress = {() => this.logout()}>
                <Icon name="cog" size={21} />
              </Button>
            </Left>
          <Body>
            <Title>Dad Profile</Title>
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
        <View style={{ backgroundColor: 'white', borderTopWidth: 10, borderTopColor: '#B1CC74'  }}>

          {/**User photo takes 1/3rd of view horizontally **/}
          <View style={{ paddingTop: 20, flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingBottom: 0 }}>
              <Image source={images[0]} style={{ width: 150, height: 150, borderRadius: 100 }} />
          </View>

          <View style={{ padding: 10, paddingTop: 10, paddingBottom: 15, alignItems:'center' }}>
              <View style={{ paddingHorizontal: 10 }}>
                  <Text style={{ paddingBottom:5, fontWeight: 'bold' }}>{this.state.profile.name}</Text>
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
                  <Text style={{fontSize: 20}}>{this.state.profile.meta["skillScore"]}</Text>
              </View>
              <Text style={{ paddingLeft:0, fontSize: 10, color: 'grey'}}>Rating</Text>
            </View>

            {/**Total Love stat */}
            {/* 
            <View style={profileHeaderStatsViewStyle}>
              <View style={{ alignItems: 'center', flexDirection:"row"}}>
                  <Icon name="heart" style={profileHeaderStatsIconStyle}></Icon>
                  <Text style={{fontSize: 20}}>2,000</Text>
              </View>
              <Text style={{ paddingLeft:0,fontSize: 10, color: 'grey' }}>Love</Text>
            </View>
            */}

            {/**Rank stat */}
            <View style={profileHeaderStatsViewStyle}>
            <View style={{ alignItems: 'center', flexDirection:"row"}}>
                <Icon name="hashtag" style={profileHeaderStatsIconStyle}></Icon>
                <Text style={{fontSize: 20}}>{this.state.profile.meta["rating"]}</Text>
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
}