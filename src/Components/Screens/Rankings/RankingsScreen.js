import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Title, Left, Body, Right, Segment } from 'native-base';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LocalRanksScreen from './LocalRanksScreen';
import { useNavigation } from '@react-navigation/native';

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
                <View  style={{ flexDirection: 'row' }}>
                  {/*Mini profile pic and misc info*/}
                    <View
                      style={{flex: 1, alignItems: 'left', justifyContent: 'flex-start', flexDirection: 'row' }}>

                      <Image source={require('../../../../assets/dog.jpg')}
                      style={{ width: 50, height: 50, borderRadius: 37.5 }} />

                      <View  style={{alignItems: 'flex-start', flexDirection: 'column', justifyContent:'space-around'}} >
                        <Button small dark transparent>
                          <Text>{this.props.name}</Text>
                        </Button>
                        <Text style={{ alignSelf:'flex-start', fontSize: 10,  paddingTop:0, padding:6, color: 'grey'}}>from Kansas</Text>
                      </View>
                  </View>
                </View>
              </Left>
              {/** this is the ranking */}
              <Right>
              <View
                      style={{flexDirection:'column', justifyContent:'flex-start',  alignItems:'center' }}>

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
      globalRatings: []
    }
 }

 /*
 componentDidMount() {
    var profileRatings = getRatings();

    this.setState({ ratings: profileRatings });
 }
 */

componentDidMount() {
  var server_url = "http://99.60.8.214:82"
  // NOTE: You'll have to change this IP address to get it to work on your machine.
  console.log("[Ranking] Sending request to " + server_url + "/dad_profile/ratings")
  fetch(server_url + "/dad_profile/ratings")
    .then(response => {
      console.log("[Ranking] Recieved server response.")
      return response.json();
    })
    .then(data => {
      this.setState({ globalRatings: data.reverse() });

      var filter = "Global";
      this.filterRatings(filter);
    })
}

 filterRatings(filter) {
    console.log("Inside of filterRatings() function"); 
 
    var ratings = this.state.globalRatings;

    var zip = 60491;
    var myFirstZipDigit = String(zip).charAt(0);

    var regionalRatings = []
    var localRatings = []

    if (filter === "Regional") {
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

      this.setState({ ratings: regionalRatings })
    }

    else if (filter === "Local") {
      for (var i = 0; i < ratings.length; i++) {
        if (zip === ratings[i].zip) {
          localRatings.push(ratings[i]);
        }
      }

      this.setState({ ratings: localRatings });
    }

    else {
      console.log("Ratings:"); 
      console.log(ratings); 
      this.setState({ ratings: ratings });
      console.log("Inside of 'Global' condition"); 
    }
 }

 createRankingCard(profile) {
  let name = profile.name.first + " " + profile.name.last;
  let rank = profile.meta.rating;
  let id = profile._id;

   return (
     <RankingCard name={name} rank={rank} key={id}/>
   )
 }

  render() {
    let ratings = this.state.ratings;
    console.log("Profile ratings: ");
    console.log(ratings);

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

        </Content>

      </Container>
      );
    }
  }
}
