import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';

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
        <Text>Awesome segment</Text>
      </Content>
     
    </Container>
      
    );
  }
}