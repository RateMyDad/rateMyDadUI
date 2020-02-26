import React, { Component } from 'react';
import { Image, View, ImageBackground, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Title, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Video } from 'expo';


export default class HomeScreen extends Component 
{
  /*when using a class instead of a function, need to include the 'render()'*/
  render() {
    return (
      
       /*This whole section in container is technically a react base component, 
       no need to over think it though - just look at React Base docs*/
      <Container style={{backgroundColor:"#EFFCCC"}}>
       {/*Header, so the dark top bar of the app*/}
       <Header>
       <Left/>
        <Body>  
        {/*<ImageBackground source={require("C://rateMyDadUI/assets/titleBackground2.jpg")} style={{width: 200, height:40 }}></ImageBackground>*/}
        <Title>RateMyDad</Title>
        </Body>
        <Right/>
      </Header>
      
      {/*This is everything below the header*/}
      <Content>

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
          <Image
                style={{width: 370, height: 200}}
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
          <Text style={{padding:10}}>"The things I do for love"</Text>
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
            <Text style={{padding:5}}>"There's something fishy going on here or my name is Stinky Looloo,thank goodness it's not."
            </Text>
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
          <Image
                style={{width: 370, height: 200}}
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
          <Image
                style={{width: 370, height: 200}}
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


      </Content>
    </Container>
      
    );
  }
}