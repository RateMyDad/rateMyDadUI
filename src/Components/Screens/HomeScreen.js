import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Title } from 'native-base';


export default class HomeScreen extends Component {
  render() {
    return (
   
        <Container>
        <Header>
          <Left/>
          <Body>
            <Title>RateMyDad</Title>
          </Body>
          <Right />
        </Header>
      </Container>
      
    );
  }
}