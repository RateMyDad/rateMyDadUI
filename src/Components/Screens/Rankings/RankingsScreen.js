import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Title, Left, Body, Right, Segment } from 'native-base';
import { Image, View,Dimensions, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatus } from "../../../model";
import ProfilePopup from "./ProfilePopup";
var { height, width } = Dimensions.get('window');
var server_url = "http://99.60.8.214:82"

var images = [
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
  require('../../../../assets/emptyProfile.jpg'),
]

// Each ranking card, which includes a dad profile's username and rank.
class RankingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      modalVisible: false
    };

    this.updateParent = this.updateParent.bind(this); 
  }

  // This gets called when the user closes a popup for viewing another user's dad profile.
  updateParent() {
    this.setState({ modalVisible: false })
  }
  
  // This gets called when the user opens a popup for viewing another user's dad profile.  
  showPopup() {
    this.setState( { modalVisible: true })
  }

  render() {
    return(
      <View style={{paddingBottom:2, alignContent:'stretch'}}>
        <ProfilePopup
            modalVisible={this.state.modalVisible}
            updateParent={this.updateParent}
            name={this.props.name}
            rank={this.props.rank}
            skillScore={this.props.skillScore}
            skills={this.props.skills}/>
          <Card>
            <CardItem>
              <Left>
                <View style={{ flexDirection: 'row' }}>
                  {/*Mini profile pic and misc info*/}
                    <View
                      style={{flex: 1, alignItems: 'left', justifyContent: 'flex-start', flexDirection: 'row' }}>

                      <Image source={require('../../../../assets/blankProfile.png')}
                      style={{ width: 50, height: 50, borderRadius: 37.5 }} />

                      <View  style={{alignItems: 'flex-start', flexDirection: 'column', justifyContent:'space-around'}} >
                        <Button small dark transparent
                          onPress={() => this.showPopup()}>
                          <Text>{this.props.name}</Text>
                        </Button>
                        <Text style={{ alignSelf:'flex-start', fontSize: 10,  paddingTop:0, padding:6, color: 'grey'}}>{this.props.location}</Text>
                      </View>
                  </View>
                </View>
              </Left>

              {/** this is the ranking */}
              <Right>
              <View style={{flexDirection:'column', justifyContent:'flex-start',  alignItems:'center' }}>
                <Button iconLeft small transparent>
                  <Icon name="hashtag" style={{ color: '#7BCACE' }} size={20}></Icon>
                  <Text style={{ fontSize: 20,  color: 'black'}}>{this.props.rank}</Text>
                </Button>
                <Text style={{ alignSelf: 'flex-end', fontSize: 10,  color: 'grey'}}>of 7.5 billion</Text>
              </View>
              </Right>
            </CardItem>
          </Card>
      </View>
    );
  }
}

// Represents the entire rankings screen.  
export default class RankingsScreen extends Component {

 constructor(props)
 {
   super(props)
    this.state = {
      activeIndex:0,
      ratings: [],
      globalRatings: [],
      status: 0,
      message: "",
      profile: {
      zip: 0
      }
    }
 }

componentDidMount() {
  this.getInitialRatings()
}

// Get all ratings (global ratings) initially.  
getInitialRatings() {
  AsyncStorage.getItem('id_token').then((token) => {

      console.log("[Ranking] Sending request to " + server_url + "/api/dad_profile/ratings");
      fetch(server_url + "/api/dad_profile/ratings")
      .then(response => {
        console.log("[Ranking] Recieved server response.")
        return response.json();
      })
      .then(data => {
        this.setState({ globalRatings: data.reverse() });
        var filter = "Global";
        this.filterRatings(filter);
      })
  })
}

// Get all ratings.
async getRatings() {
  console.log("[Ranking] Sending request to " + server_url + "/api/dad_profile/ratings");
  AsyncStorage.getItem('id_token').then(async (token) => {
      const response = await fetch(server_url + "/api/dad_profile/ratings")

      const data = await response.json();
      this.setState({ globalRatings: data.reverse() });
  })
}

// Call this method to see if the user is one of three things: 
// 0: not logged in
// 1: logged in and has a dad profile created
// 2: logged in and does not have a dad profile created
async checkStatus() {
  AsyncStorage.getItem('id_token').then(async (token) => {

    if(token != null) {
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
      }

      // 2 if logged in but no dad profile created.
      else {
        console.log("Checking status... 2")
        this.setState({ status: 2 })
      }
    } else  {
      console.log("Not logged in -- not getting rankings.")
      this.setState({status: 0})
    }
  })
}

// Get the user's profile information for geographic filtering
// (if the user is logged in and has a dad profile created).
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

      this.setState({
        zip: data.zip
      })
    })
  }
}

// Filter the ratings globaly, regionally (same first digit in zip code as your dad profile),
// or locally (same zip code as your dad profile). 
async filterRatings(filter) {
  await this.checkStatus();
  await this.getRatings();
  await this.updateProfile();
  
  var ratings = this.state.globalRatings;


  var zip = this.state.zip;
  var myFirstZipDigit = String(zip).charAt(0);

  var regionalRatings = []
  var localRatings = []

  // Filter regionally if the user is logged in and dad profile created.
  if (filter === "Regional" && this.state.status !== 0) {
    for (var i = 0 ; i < ratings.length; i++) {
      var currentZip = ratings[i].zip;

      var currentFirstZipDigit = undefined;
      if (currentZip !== undefined) {
        currentFirstZipDigit = String(currentZip).charAt(0);
      }

      if (myFirstZipDigit === currentFirstZipDigit) {
        regionalRatings.push(ratings[i]);
      }
    }

    this.setState({ ratings: regionalRatings, message: "" })
  }

  // Can't access regional ratings is not logged in.
  else if (filter === "Regional" && this.state.status === 0) {
    this.setState({ ratings: [], message: "You must be logged in to access this feature."});
  }

  // Filter locally if the user is logged in and dad profile created. 
  else if (filter === "Local" && this.state.status !== 0) {
    for (var i = 0; i < ratings.length; i++) {
      if (zip === ratings[i].zip) {
        localRatings.push(ratings[i]);
      }
    }

    this.setState({ ratings: localRatings, message: "" });
  }

  // Can't access local ratings if not logged in.  
  else if (filter === "Local" && this.state.status === 0) {
    this.setState({ ratings: [], message: "You must be logged in to access this feature."});
  }

  else {
    this.setState({ ratings: ratings, message: "" });
  }
}

// Create ranking card for each user to display on the screen.  
createRankingCard(profile) {
let name = profile.username + "'s Dad";
let rank = profile.meta.rating;
let skillScore = profile.meta.skillScore; 
let id = profile._id;
let skills = profile.skills; 

  return (
    <RankingCard name={name} rank={rank} skillScore={skillScore} skills={skills} key={id}/>
  )
}

  render() {
    let ratings = this.state.ratings;

    // Need this b/c the component re-renders once the state is set in componentDidMount().
    if (ratings.length !== 0) {
      return (
        <Container style={{backgroundColor:"#EFFCCC"}}>
        {/**This is the header (native-base)
         * You should be able to navigate
         * using these 'segments'
         */}
        <Header hasSegment >
          <Left/>
          <Body>
            <Title>Rankings</Title>
          </Body>
          {/**Search Icon Button */}
          <Right>
            <Button transparent>
            <Icon name="search" style={{ color: '#545F66' }} size={25}></Icon>
            </Button>
          </Right>
        </Header>

        {/**These are the segments...
         * in other words, theyre just buttons
         * but i want to use them to navigate
         * not to a new screen (because this isnt
         * the look we're going for though) but just
         * to change the content area of this screen
        */}
        <Segment>
          <Button first style={{borderColor:'#545F66'}}
           onPress={() => this.filterRatings("Local")}>
           <Text style={{color:'#545F66'}}>Local</Text>

          </Button>

          <Button style={{borderColor:'#545F66'}}
            onPress={() => this.filterRatings("Regional")}>
            <Text style={{color:'#545F66'}}>Regional</Text>
          </Button>

          <Button last style={{borderColor:'#545F66'}}
            onPress={() => this.filterRatings("Global")}>
            <Text style={{color:'#545F66'}}>Global</Text>
          </Button>
        </Segment>

        {/* Show each dad profile's rating. */}
        <Content padder>
          {ratings.map(this.createRankingCard)}
        </Content>

      </Container>
      );
    }

    // If the data from the fetch is not present (first time component renders).
    else {
      return (
        <Container style={{backgroundColor:"#EFFCCC"}}>
        {/**This is the header (native-base)
         * You should be able to navigate
         * using these 'segments'
         */}
        <Header hasSegment >
          <Left/>
          <Body>
            <Title>Rankings</Title>
          </Body>
          {/**Search Icon Button */}
          <Right>
            <Button transparent>
            <Icon name="search" style={{ color: '#545F66' }} size={25}></Icon>
            </Button>
          </Right>
        </Header>

        {/**These are the segments...
         * in other words, theyre just buttons
         * but i want to use them to navigate
         * not to a new screen (because this isnt
         * the look we're going for though) but just
         * to change the content area of this screen
        */}
        <Segment>
          <Button first style={{borderColor:'#545F66'}}
           onPress={() => this.filterRatings("Local")}>
           <Text style={{color:'#545F66'}}>Local</Text>

          </Button>

          <Button style={{borderColor:'#545F66'}}
            onPress={() => this.filterRatings("Regional")}>
            <Text style={{color:'#545F66'}}>Regional</Text>
          </Button>

          <Button last style={{borderColor:'#545F66'}}
            onPress={() => this.filterRatings("Global")}>
            <Text style={{color:'#545F66'}}>Global</Text>
          </Button>
        </Segment>

        <Content padder>
          <Text style={{ color: "red" }}>{this.state.message}</Text>
        </Content>

      </Container>
      );
    }
  }
}
