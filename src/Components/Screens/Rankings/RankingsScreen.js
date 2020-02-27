import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Title, Left, Body, Right, Segment } from 'native-base';
import { Image, View,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LocalRanksScreen from './LocalRanksScreen';
import { useNavigation } from '@react-navigation/native';
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
  render(){
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
      <Button first onPress = {() => this.segmentClicked(0)} active={this.state.activeIndex ==0}  style={{borderColor:'#545F66', }} >
       <Text style={{color:'#545F66'}}>Local</Text> 
        
      </Button>

      <Button onPress = {() => this.segmentClicked(1)} active={this.state.activeIndex ==1} style={{borderColor:'#545F66', }}>
        <Text style={{color:'#545F66'}}>Regional</Text>
      </Button>

      <Button onPress = {() => this.segmentClicked(2)} active={this.state.activeIndex ==2} last style={{borderColor:'#545F66', }}>
        <Text style={{color:'#545F66'}}>Global</Text>
      </Button>      
    </Segment>

    <Content padder>
   
    {/**These are the individual dads, ranked 
     * (presented in cards which are react-base
     * componenets)
    */}
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
                      <Text style={{ fontSize: 20,  color: 'black'}}>3</Text>
                   </Button>
                   <Text style={{ alignSelf: 'flex-end', fontSize: 10,  color: 'grey'}}>of 7.5 billion</Text>
                     
                </View>
            </Right>
          </CardItem> 
        </Card>
        </View>

         {/**These are the individual dads, ranked 
     * (presented in cards which are react-base
     * componenets)
    */}
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
                      <Text style={{ fontSize: 20,  color: 'black'}}>3</Text>
                   </Button>
                   <Text style={{ alignSelf: 'flex-end', fontSize: 10,  color: 'grey'}}>of 7.5 billion</Text>
                     
                </View>
            </Right>
          </CardItem> 
        </Card>
        </View>

       {/**These are the individual dads, ranked 
     * (presented in cards which are react-base
     * componenets)
    */}
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
                      <Text style={{ fontSize: 20,  color: 'black'}}>3</Text>
                   </Button>
                   <Text style={{ alignSelf: 'flex-end', fontSize: 10,  color: 'grey'}}>of 7.5 billion</Text>
                     
                </View>
            </Right>
          </CardItem> 
        </Card>
        </View>
        {this.renderSection()}
    </Content>
    
</Container>
);}
}


