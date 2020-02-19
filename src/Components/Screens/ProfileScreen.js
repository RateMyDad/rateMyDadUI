
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Card, CardItem, Thumbnail, Text, Button, Right, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { yellow100 } from 'react-native-paper/lib/typescript/src/styles/colors';


export default class ProfileScreen extends Component
 {
  render() {
    return (
      <Container>
      <Header style={{padding:5, alignContent:"center" }}>
        <Left>
          <Button transparent>
            <Icon name='user' size={23} />
          </Button>
        </Left>
        <Body>
          <Title>Courage T.</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name = 'bars' size={23} />
          </Button>
        </Right>
      </Header>
      <Content>
      <Card style={{flex: 0}}>
            <CardItem>
              <Left>
              <Image
                style={{width: 90, height: 90}}
                source={require('C://rateMyDadUI/assets/dog.jpg')}
              />
                <Body>
                  <Text note>This is my dad, Courage, he's great.</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
              <CardItem>
              <Left>
                <Icon name = "star" size={20}  ></Icon>
                <Text></Text>
                <Icon name = "star" size={20} ></Icon>
                <Text></Text>
                <Icon name = "star" size={20} ></Icon>
              </Left>
              </CardItem>
              <CardItem >
              <Left>
                <Text>#3 Global</Text>
                <Text>                    </Text>
                <Icon name = "heart" size={20} ></Icon>
                <Text>1,000,000</Text>
              </Left>
            </CardItem>
              </Body>
            </CardItem>

          </Card>
      </Content>
    </Container>
      
    );
  }
}
