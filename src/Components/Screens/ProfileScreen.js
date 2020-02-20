import React, { Component } from 'react';
import {
  View,

  StyleSheet,
  Image,
  Dimensions,
  FlatList
} from "react-native";
import { Container, Header, Tab, Tabs, TabHeading, Title, Content, Card, CardItem, Thumbnail, Text, Button, Right, Left, Body } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header>
        <Left>

        </Left>
        <Body>
          <Title>Courage T.</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="bars" size={21} />
          </Button>
        </Right>
      </Header>

        <Content>
        <View style={{ paddingTop: 10 }}>

{/** User Photo Stats**/}
<View style={{ flexDirection: 'row' }}>

    {/**User photo takes 1/3rd of view horizontally **/}
    <View
        style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Image source={require('C://rateMyDadUI/assets/dog.jpg')}
            style={{ width: 75, height: 75, borderRadius: 37.5 }} />
    </View>

    {/**User Stats take 2/3rd of view horizontally **/}
    <View style={{ flex: 3 }}>

        {/** Stats **/}
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'flex-end'
            }}>
            <View style={{ alignItems: 'center' }}>
                <Text>20</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text>205</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text>167</Text>
                <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
            </View>
        </View>

        {/**Edit profile and Settings Buttons **/}
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>

            <View
                style={{ flexDirection: 'row' }}>

                {/** Edit profile takes up 3/4th **/}
                <Button bordered dark
                    style={{ flex: 3, marginLeft: 10, paddingTop:4, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>


                {/** Settings takes up  1/4th place **/}
                <Button bordered dark style={{
                    flex: 1,
                    height: 30,
                    marginRight: 10, marginLeft: 5,
                    justifyContent: 'center'
                }}>
                    <Icon name="globe" style={{ color: 'black' }} size={17}></Icon></Button>
            </View>
        </View>{/**End edit profile**/}
    </View>
</View>

<View style={{ paddingBottom: 10 }}>
    <View style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>Courage T. Dog</Text>
        <Text>This is my dad, Courage. He's pretty cool.</Text>
    </View>
</View>


</View>


<View >
<View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
    <Button>
    <Icon name = "camera-retro" size={23} />
    </Button>
    <Button>
    <Icon name = "comment" size={23}/>
    </Button>
    <Button>
       <Icon name = "bars" size={23}/>
    </Button>
</View>



{/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}



</View>
      </Content>
      </Container>
    );
  }
}