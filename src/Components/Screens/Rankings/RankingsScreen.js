import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Title, Left, Body, Right, Segment } from 'native-base';
import { Image, View,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

//each ranking card, it takes name, rank, and location variable 
class RankingCard extends Component {
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
      activeIndex:0
    }
 }

 segmentClicked(index) {
  this.setState({
      activeIndex: index
  })
}

renderRanks() {
    return images.map((image, index) => {
      //here we can have an if/else statement that determines 
      //which rankings to render: global/regional/local
        return (
          //returning the global rankings
          <View style={{ flexDirection: 'column' }}>
          <RankingCard name="Courage T. Dog" rank="3" location="Kansas"></RankingCard>
          <RankingCard name="Bob Johnson" rank="1456" location="Illinois"></RankingCard>
          </View>
        )
    })
  }

    renderSection() {
    /**Global Rankings*/
      if (this.state.activeIndex == 0) 
      {
          return (
            <View style={{ flexDirection: 'column' }}>
                {this.renderRanks()}
            </View>)
      }
      /**Regional Rankings */
      else if (this.state.activeIndex == 1) {
        return (
          <View style={{ flexDirection: 'column' }}>
              {this.renderRanks()}
          </View>)
      }
      /**Local Rankings */
      else if (this.state.activeIndex == 2) {
        return (
          <View style={{ flexDirection: 'column' }}>
              {this.renderRanks()}
          </View>)
      }
  }
  //this renders the header and segments
  render(){
  return (
    <Container style={{backgroundColor:"#EFFCCC"}}>
    {/*Header*/}
    <Header hasSegment >
      <Left/>
      <Body>
        <Title>Rankings</Title>
      </Body>
      {/*Search Icon Button */}
      <Right>
        <Button transparent>
        <Icon name="search" style={{ color: '#545F66' }} size={25}></Icon>
        </Button>
      </Right>
    </Header>

    {/**These are the segments..
     * in other words, theyre just buttons*/}
    <Segment>
      {/*Global*/}
      <Button first onPress = {() => this.segmentClicked(0)} active={this.state.activeIndex ==0}  style={{borderColor:'#545F66'}}>
       <Text  style={{color: this.state.seg == 0 ? "white" : "#545F66"}}>Global</Text>  
      </Button>
      {/*Regional*/}
      <Button onPress = {() => this.segmentClicked(1)} active={this.state.activeIndex ==1} style={{borderColor:'#545F66'}}>
        <Text style={{color:'#545F66'}}>Regional</Text>
      </Button>
      {/*Local*/}
      <Button last onPress = {() => this.segmentClicked(2)} active={this.state.activeIndex ==2} style={{borderColor:'#545F66'}}>
        <Text style={{color:'#545F66'}}>Local</Text>
      </Button>
    </Segment>

    <Content padder>
      {this.renderSection()}
    </Content>
</Container>
);}
}
