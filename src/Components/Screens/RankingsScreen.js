import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Title, Left, Body, Right, Segment } from 'native-base';
import { Image } from 'react-native';

export default class RankingsScreen extends Component {
  render() {
    return (
   
      <Container>
      <Header hasSegment>
        <Left>

        </Left>
        <Body>
          <Title>Rankings</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="search" />
          </Button>
        </Right>
      </Header>
      <Segment>
        <Button first>
          <Text>Local</Text>
        </Button>
        <Button>
          <Text>Regional</Text>
        </Button>
        <Button last active>
          <Text>Global</Text>
        </Button>
        
      </Segment>
      <Content padder>
      <Card>
          <CardItem>
            <Left>

            </Left>
          </CardItem>
          <CardItem cardBody>
          <Image source={require('C://rateMyDadUI/assets/dog.jpg')}
            style={{ width: 75, height: 75, borderRadius: 37.5 }} />

            
            <Body>
            <Button transparent>
                
                <Text>#3 of 7.3 billion</Text>
              </Button>
            </Body>
            
          </CardItem>
         
        </Card>
      </Content>
     
    </Container>
      
    );
  }
}