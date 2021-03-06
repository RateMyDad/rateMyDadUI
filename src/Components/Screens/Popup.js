import React, {Component} from "react";
import {Modal, Text, Alert, View, TextInput, ScrollView, Slider, AsyncStorage} from "react-native";
import {Picker, Icon, Button, Body, Header, Left, Right, Title} from "native-base";
var server_url = "http://99.60.8.214:82"

// Represents each slider for the user to rate each skill.  
class SkillRatingSelection extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var _this = this.props._this;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>{this.props.skillName}</Text>
            <Text>{_this.state[this.props.skill]}</Text>
            <Slider
                width={"90%"}
                minimumValue={1}
                maximumValue={66}
                step={1}
                onValueChange={(value) => _this.setState({ [this.props.skill]: Math.floor(value/11) + 1})}
            />
        </View>
    )
  }
}

export default class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: props.modalVisible,

            profileStatus: 0,

            firstName: "",
            lastName: "",
            grilling: 1,
            cooking: 1,
            bags: 1,
            golf: 1,
            softball: 1,
            coaching: 1,
            generosity: 1,
            looks: 1,
            dad_factor: 1,
            fantasy_football: 1,
            humor: 1,
            emotional_stability: 1,
            handiness: 1,
            kids: 1,
            stealth_food_preparation: 1,
            tech: 1,
            furniture_assembly: 1,
            photography: 1,
            country: "",
            region: "",
            zip: "",

            bottomMessage: ""
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            this.setState({ visibility: this.props.modalVisible })
        }
    }

    closePopup() {
        this.setState({ visibility: false });

        this.props.updateParent();
    }

    // Call this function once the user is finished creating their account's dad profile.  
    async createDadProfile() {
        var dadProfile = {
            username: this.props.username, 
          
            name: {
                first: this.state.firstName,
                last: this.state.lastName
            },

            skills: {
                grilling: this.state.grilling,
                cooking: this.state.cooking,
                bags: this.state.bags,
                golf: this.state.golf,
                softball: this.state.softball,
                coaching: this.state.coaching,
                generosity: this.state.generosity,
                looks: this.state.looks,
                dad_factor: this.state.dad_factor,
                fantasy_football: this.state.fantasy_football,
                humor: this.state.humor,
                emotional_stability: this.state.emotional_stability,
                handiness: this.state.handiness,
                kids: this.state.kids,
                stealth_food_preparation: this.state.stealth_food_preparation,
                tech: this.state.tech,
                furniture_assembly: this.state.furniture_assembly,
                photography: this.state.photography
            },

            zip: parseInt(this.state.zip),

            location: {
                country: this.state.country,
                region: this.state.region
            }
        }
      
        const skillValues = Object.values(dadProfile.skills); 

        // Got this from this source: https://stackoverflow.com/questions/19395257/how-to-count-duplicate-value-in-an-array-in-javascript
        var valueCounts = {};
        skillValues.forEach(function(x) { valueCounts[x] = (valueCounts[x] || 0) + 1; });

        // Limit the amount of skills rated 7 to six.  
        if (valueCounts[7] > 6) {
            this.setState({ bottomMessage: "You can only have up to 6 skills with ratings of 7." });

            return 
        }

        else if (isNaN(dadProfile.zip)) {
            this.setState({ bottomMessage: "You must enter a valid zip code" });

            return 
        }

        AsyncStorage.getItem('id_token').then(async (token) => {

            const response = await fetch(server_url + "/api/protected/dad_profile/create", {
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer ' + token ,
                  'Content-Type': 'application/json'},
                body: JSON.stringify(dadProfile)
            })

            const data = await response.json();
        })

        await this.props.checkStatus();
    }

    render() {
        let status = this.props.status;

        // If the current user already has a dad profile created, then don't let them create another one.  
        if (status === 1) {
            return (
                <Modal
                    visible = {this.state.visibility}>
                    <Header>
                        <Left style={{flex:1}}>
                          <Button transparent
                            onPress = {() => this.closePopup()}>
                            <Icon name="ios-arrow-back" style={{color: "black", fontSize: 25, paddingLeft: 15}} />
                          </Button>
                        </Left>
                        <Body style = {{flex: 2}}>
                          <Title>Profile already created!</Title>
                        </Body>
                        <Right style = {{flex: 1}}>
                        </Right>
                    </Header>
                </Modal>
            )
        }

        // Let the user createa a dad profile for their account if they have not already.  
        else if (status === 2) {
            var inputBoxStyle = {
                backgroundColor: "#f3fcd9",
                height: 45,
                marginTop: 10,
                width: 300,
                marginBottom: 15,
                borderLeftWidth: 5,
                borderRadius: 0,
                padding: 10,
                fontSize: 18,
                textAlign: "center",
                borderColor: "#dae6ba",
                color: "#aaa",
              }

              return (
                  <Modal
                      visible = {this.state.visibility}>
                      <Header>
                        <Left style={{flex:1}}>
                          <Button transparent
                            onPress = {() => this.closePopup()}>
                            <Icon name="ios-arrow-back" style={{color: "black", fontSize: 25, paddingLeft: 15}} />
                          </Button>
                        </Left>
                        <Body style = {{flex: 2}}>
                          <Title>Create a Dad Profile</Title>
                        </Body>
                        <Right style = {{flex: 1}}>
                        </Right>
                      </Header>
                      <View style={{marginTop: 0, height: "100%", alignItems: "center", backgroundColor: "#EFFCCC"}}>
                          <ScrollView style={{ width: "100%" }}>
                              <View style={{ marginTop: 25, justifyContent: "center", alignItems: "center", overflow: "auto"}}>
                                  <Text style={{ fontWeight: "bold" }}>First Name</Text>
                                  <TextInput placeholder="First Name"
                                      placeholderTextColor="#ccc"
                                      onChangeText={(text) => this.setState({ firstName: text })}
                                      style={inputBoxStyle}/>

                                  <Text style={{ fontWeight: "bold" }}>Last Name</Text>
                                  <TextInput placeholder="Last Name"
                                      placeholderTextColor="#ccc"
                                      onChangeText={(text) => this.setState({ lastName: text })}
                                      style={inputBoxStyle}/>

                                  <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>Skills Ratings</Text>

                                  <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                      <SkillRatingSelection skillName = "Grilling" skill = "grilling" _this = {this}/>
                                      <SkillRatingSelection skillName = "Cooking" skill = "cooking" _this = {this}/>
                                  </View>

                                  <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                      <SkillRatingSelection skillName = "Bags" skill = "bags" _this = {this}/>
                                      <SkillRatingSelection skillName = "Softball" skill = "softball" _this = {this}/>
                                  </View>

                                  <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                      <SkillRatingSelection skillName = "Coaching" skill = "coaching" _this = {this}/>
                                      <SkillRatingSelection skillName = "Generosity" skill = "generosity" _this = {this}/>
                                  </View>

                                  <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                      <SkillRatingSelection skillName = "Looks" skill = "looks" _this = {this}/>
                                      <SkillRatingSelection skillName = "Dad Factor" skill = "dad_factor" _this = {this}/>
                                  </View>

                                  <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                      <SkillRatingSelection skillName = "Fantasy Football" skill = "fantasy_football" _this = {this}/>
                                      <SkillRatingSelection skillName = "Humor" skill = "humor" _this = {this}/>
                                  </View>

                                  <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                      <SkillRatingSelection skillName = "Emotional Stability" skill = "emotional_stability" _this = {this}/>
                                      <SkillRatingSelection skillName = "Handiness" skill = "handiness" _this = {this}/>
                                  </View>

                                  <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                    <SkillRatingSelection skillName = "Kid Skills" skill = "kids" _this = {this}/>
                                    <SkillRatingSelection skillName = "Stealth Food Prep" skill= "stealth_food_preparation" _this = {this}/>
                                  </View>

                                  <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                    <SkillRatingSelection skillName = "Technology" skill = "tech" _this = {this}/>
                                    <SkillRatingSelection skillName = "Furniture Assembly" skill = "furniture_assembly" _this = {this}/>
                                  </View>

                                  <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>Location Info</Text>

                                  <Text style={{ fontWeight: "bold" }}>Country</Text>
                                  <TextInput placeholder="Country Here"
                                    placeholderTextColor="#ccc"
                                    onChangeText={(text) => this.setState({ country: text })}
                                    style={inputBoxStyle}/>

                                  <Text style={{ fontWeight: "bold" }}>Region</Text>
                                  <TextInput placeholder=" Region Here"
                                    placeholderTextColor="#ccc"
                                    onChangeText={(text) => this.setState({ region: text })}
                                    style={inputBoxStyle}/>

                                  <Text style={{ fontWeight: "bold" }}>Zip Code</Text>
                                  <TextInput placeholder="Zip Code Here"
                                      placeholderTextColor="#ccc"
                                      onChangeText={(text) => this.setState({ zip: text })}
                                      style={inputBoxStyle}/>
                                  <Body style={{ justifyContent: "center", alignItems: "center"}}>
                                      <Button block
                                          onPress={() => {
                                              this.createDadProfile();}}
                                          style={{ marginBottom: 40, width: "50%"}}>
                                              <Text style={{ right: "50%", fontWeight: "bold"}}>Create Dad Profile</Text>
                                      </Button>
                                  </Body>
                                  <Text style={{ marginBottom: 400, color: "red" }}>{ this.state.bottomMessage }</Text>
                              </View>
                          </ScrollView>
                      </View>
                  </Modal>
               )
        }
    }
}