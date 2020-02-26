import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Text, Title, Left, Body, Right, Segment } from 'native-base';
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LocalRanksScreen from './LocalRanksScreen';
import { useNavigation } from '@react-navigation/native';

class RankingCard extends Component {
  render() {
    return(
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
                          <Text>{this.props.name}</Text>
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
      <Button first style={{borderColor:'#545F66', }} >
       <Text style={{color:'#545F66'}}>Local</Text>

      </Button>

      <Button style={{borderColor:'#545F66', }}>
        <Text style={{color:'#545F66'}}>Regional</Text>
      </Button>

      <Button last style={{borderColor:'#545F66', }}>
        <Text style={{color:'#545F66'}}>Global</Text>
      </Button>
    </Segment>

    <Content padder>

      <RankingCard name="Courage T. Dog" rank="3"></RankingCard>
      <RankingCard name="Bob Johnson" rank="1456"></RankingCard>
      <RankingCard name="Nate Norris" rank="12"></RankingCard>
      <RankingCard name="James Jimbotron" rank="98"></RankingCard>
      <RankingCard name="Julia 'Julia Gall' Gall" rank="97"></RankingCard>
      <RankingCard name="Godfrey Muganda" rank="1"></RankingCard>


    </Content>

</Container>
);}
}
