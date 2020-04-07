import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Title, Left, Body, Right, Segment } from 'native-base';
import { Image, View,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getStatus } from "../../../model";
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
let server_url = "http://10.0.0.181:82";

//each ranking card, it takes name, rank, and location variable 
class RankingCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: []
    };
  }

  render() {
    return(
      <View style={{paddingBottom:2, alignContent:'stretch'}}>
          <Card>
            <CardItem>
              <Left>
                <View style={{ flexDirection: 'row' }}>
                  {/*Mini profile pic and misc info*/}
                    <View
                      style={{flex: 1, alignItems: 'left', justifyContent: 'flex-start', flexDirection: 'row' }}>

                      <Image source={require('../../../../assets/dog.jpg')}
                      style={{ width: 50, height: 50, borderRadius: 37.5 }} />

                      <View  style={{alignItems: 'flex-start', flexDirection: 'column', justifyContent:'space-around'}} >
                        <Button small dark transparent>
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
      zip: ""
    }
 }

 /*
 componentDidMount() {
    var profileRatings = getRatings();
    this.setState({ ratings: profileRatings });
 }
 */


componentDidMount() {
  this.getInitialRatings()
}

updateProfile() {
  console.log("Updating profile.")
  if(this.state.status  == 1){

    console.log("Retrieving dad profile for user.")
    try {
      fetch(server_url + "/dad_profile/me", {method: 'POST'}).then(response => {
        return response.json()
      }).then(data => {
        this.setState({ zip: data.zip });
      })
    } catch (e) {
      console.log("Unable to parse JSON")
      console.log(e)
    }
  }
}

getInitialRatings() {
  // NOTE: You'll have to change this IP address to get it to work on your machine.
  console.log("[Ranking] Sending request to " + server_url + "/dad_profile/ratings");
  fetch(server_url + "/dad_profile/ratings")
    .then(response => {
      console.log("[Ranking] Recieved server response.")
      return response.json();
    })
    .then(data => {
      this.setState({ globalRatings: data.reverse() });
      console.log("Global ratings:"); 
      console.log(this.state.globalRatings); 
      var filter = "Global";
      this.filterRatings(filter);
    })
}

async getRatings() {
  const response = await fetch(server_url + "/dad_profile/ratings");
  const data = await response.json(); 
  this.setState({ globalRatings: data.reverse() });
}

async checkStatus() {
  const response = await fetch(server_url + "/user/check_status");
  const data = await response.json();
  
  let message = data.message;
  // 0 if not logged in.
  if (message === "You must be logged in to use this feature.") {
      this.setState({ status: 0 })
  }

  // 1 if logged in and dad profile created.
  else if (message === "You already have a profile created!") {
      this.setState({ status: 1 })
      this.updateProfile()
  }

  // 2 if logged in but no dad profile created.
  else {
      this.setState({ status: 2 })
  }

  console.log("Rankings screen status:");
  console.log(this.state.status);
}

 async filterRatings(filter) {
    await this.checkStatus(); 
    await this.getRatings(); 

    console.log("Inside of filterRatings() function"); 
    console.log("----------------------------------");
 
    var ratings = this.state.globalRatings;

    var zip = 6;

    if (this.state.zip !== "") {
      zip = this.state.zip;
    }

    console.log("Current zip:");
    console.log(zip); 
    
    var myFirstZipDigit = String(zip).charAt(0);

    var regionalRatings = []
    var localRatings = []

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

      this.setState({ ratings: regionalRatings, message: "" });
      console.log("Inside of proper condition");
    }

    else if (filter === "Regional" && this.state.status === 0) {
      console.log("Inside of weird condition"); 
      this.setState({ ratings: [], message: "You must be logged in to access this feature."});
    }

    else if (filter === "Local" && this.state.status !== 0) {
      for (var i = 0; i < ratings.length; i++) {
        if (zip === ratings[i].zip) {
          localRatings.push(ratings[i]);
        }
      }

      this.setState({ ratings: localRatings, message: "" });
    }

    else if (filter === "Local" && this.state.status === 0) {
      this.setState({ ratings: [], message: "You must be logged in to access this feature."});
    }

    else {
      console.log("Inside of this thing")
      this.setState({ ratings: ratings, message: "" });
    }
 }
  
 createRankingCard(profile) {
  // let name = profile.name.first + " " + profile.name.last;
  let username = profile.username + "'s" + " Dad"; 
  let rank = profile.meta.rating;
  let id = profile._id;

   return (
     <RankingCard name={username} rank={rank} key={id}/>
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
