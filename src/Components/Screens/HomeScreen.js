import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Title, Left, Body, Right } from 'native-base';


export default class HomeScreen extends Component {
  render() {
    return (
   
      <Container>
       <Header style={{padding:5, alignContent:"center" }}>
        <Left>
  
        </Left>
        <Body>
          <Title>Dad Feed</Title>
        </Body>
        <Right>
     
        </Right>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Left>

            </Left>
          </CardItem>
          <CardItem cardBody>
          <Image
                style={{width: 400, height: 300}}
                source={require('C://rateMyDadUI/assets/dog.jpg')}
          />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>

            </Left>
          </CardItem>
          <CardItem cardBody>
          <Image
                style={{width: 400, height: 300}}
                source={require('C://rateMyDadUI/assets/dog.jpg')}
          />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>

            </Left>
          </CardItem>
          <CardItem cardBody>
          <Image
                style={{width: 400, height: 300}}
                source={require('C://rateMyDadUI/assets/dog.jpg')}
          />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>

            </Left>
          </CardItem>
          <CardItem cardBody>
          <Image
                style={{width: 400, height: 300}}
                source={require('C://rateMyDadUI/assets/dog.jpg')}
          />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>

            </Left>
          </CardItem>
          <CardItem cardBody>
          <Image
                style={{width: 400, height: 300}}
                source={require('C://rateMyDadUI/assets/dog.jpg')}
          />
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="chatbubbles" />
                <Text>4 Comments</Text>
              </Button>
            </Body>
            <Right>
              <Text>11h ago</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Container>
      
    );
  }
}