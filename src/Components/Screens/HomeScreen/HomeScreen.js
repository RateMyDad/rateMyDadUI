import React, { Component } from 'react';
import { Image, View, ImageBackground, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Title, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

// Represents what a user post would look like on the "feed".
class Post extends Component {
  render() {
 
    if(this.props.content == "text")
    {
      
        <Image
                style={{width: 370, height: 200}}
                source={require('../../../../assets/dog.jpg')}
          />
      
    }
    else
    {
      
        <Image
                style={{width: 370, height: 200}}
                source={require('../../../../assets/dog.jpg')}
          />
      
    }
    return(
      <View>
      {/*React base component
          each 'card' is a post
          within its own view*/}
        <View style={{paddingBottom:2, alignContent:'stretch'}}> 
        <Card>
          <CardItem>
            <Left>
              <View  style={{ flexDirection: 'row' }}>
                {/*Mini profile pic and misc info*/}
                  <View 
                    style={{flex: 1, alignItems: 'left', justifyContent: 'flex-start', flexDirection: 'row' }}>
                    <Image source={require('../../../../assets/blankProfile.png')}
                    style={{ width: 50, height: 50, borderRadius: 37.5 }} />

                    <View  style={{alignItems: 'flex-start', flexDirection: 'column', justifyContent:'space-around'}} >
                      <Button small dark transparent>
                        <Text>Mr. Sample Dad</Text>
                      </Button>
                      <Text style={{ alignSelf:'flex-start', fontSize: 10,  paddingTop:0, padding:6, color: 'grey'}}>Rank Unknown</Text>
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
                      <Text style={{ alignSelf: 'flex-end', fontSize: 10,  paddingRight:3, paddingTop:3, color: 'grey'}}>#</Text>
                </View>
            </Right>
          </CardItem>

          {/*This is where card content goes*/}
          <CardItem cardBody>
          <Text style={{padding:15}}>This is a sample! Feature to post is still in development</Text>
          </CardItem>
          {/*Bottom of the card (left side) */}
          <CardItem>
            {/*Left side contains hearts/comments buttons */}
            <Left>
              <View style={{flexDirection:'row'}}>
              <Button transparent>
              <Icon name="heart" style={{ color: '#7BCACE' }} size={25}></Icon>
                <Text style={{padding:0 ,color:'black'}}>#</Text>
              </Button>
            
              <Button transparent>
                <Icon name="comment" style={{ color: '#7BCACE' }} size={25}></Icon>
                <Text style={{padding:0 ,color:'black'}}>#</Text>
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
      </View>
    );
  }
}

// Represents the home screen, or the "feed", of the app.  
export default class HomeScreen extends Component 
{
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
  /*when using a class instead of a function, need to include the 'render()'*/
  render() {
    return (
      <Container style={{backgroundColor:"#EFFCCC"}}>
       {/*Header, so the dark top bar of the app*/}
       <Header>
       <Left/>
        <Body>  
        {/*I was playing with something here*/}
        {/*<ImageBackground source={require("C://rateMyDadUI/assets/titleBackground2.jpg")} style={{width: 200, height:40 }}></ImageBackground>*/}
        <Title>RateMyDad</Title>
        </Body>
        <Right/>
      </Header>
      
      {/*Here are all the posts*/}
      <Content>

      <Post> content="text" </Post>
      

      </Content>
    </Container>
      
    );
  }
}