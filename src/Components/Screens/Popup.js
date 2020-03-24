import React, {Component} from "react";
import {Modal, Text, Alert, View, TextInput, ScrollView} from "react-native";
import {Picker, Icon, Button, Body} from "native-base";

class SkillRatingSelection extends Component {

  constructor(props) {
    super(props);
    //this.skill: back-end variable name for the skill
    //this.skillName: front-end display name for the skill
    this.skill = props.skillName.toLowerCase()
    if(props.skill != undefined) {
      this.skill = props.skill
    }
    console.log(this.skill)

  }

  render() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{ fontWeight: "bold" }}>{this.props.skillName}</Text>
            <Picker
                mode="dropdown"
                placeholder="Click here to rate this skill"
                iosIcon={<Icon name="arrow-down"/>}
                borderWidth="10"
                borderColor="1"
                borderRadius="20"
                selectedValue={(this.state && this.state[this.skill]) || "1"}
                onValueChange={(value) => this.setState({ [this.skill]: value })}>

                <Picker.Item label="1" value="1"/>
                <Picker.Item label="2" value="2"/>
                <Picker.Item label="3" value="3"/>
                <Picker.Item label="4" value="4"/>
                <Picker.Item label="5" value="5"/>
                <Picker.Item label="6" value="6"/>
                <Picker.Item label="7" value="7"/>
            </Picker>
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
            grilling: "1",
            cooking: "1",
            bags: "1",
            golf: "1",
            softball: "1",
            coaching: "1",
            generosity: "1",
            looks: "1",
            dad_factor: "1",
            fantasy_football: "1",
            humor: "1",
            emotional_stability: "1",
            handiness: "1",
            kids: "1",
            stealth_food_preparation: "1",
            tech: "1",
            furniture_assembly: "1",
            photography: "1",
            country: "",
            region: "",
            zip: ""
        };
    }

    componentDidUpdate(prevProps, prevState) {
        /*
        fetch("http://10.0.0.180:82/user/check_status")
        .then(response => {
            return response.json();
        })
        .then(data => {
            if (data === "You must be logged in to use this feature.") {
                this.setState({ profileStatus: 0 })
            }

            else if (data === "You already have a profile created!") {
                this.setState({ profileStatus: 1 })
            }

            else {
                this.setState({ profileStatus: 2 })
            }
        })
        */

        if (prevProps.modalVisible !== this.props.modalVisible) {
            this.setState({ visibility: this.props.modalVisible })
        }
    }

    closePopup() {
        this.setState({ visibility: false });

        this.props.updateParent();
    }

    createDadProfile() {
        let dadProfile = {
            name: {
                firstName: this.state.firstName,
                lastName: this.state.lastName
            },

            skills: {
                grilling: parseInt(this.state.grilling),
                cooking: parseInt(this.state.cooking),
                bags: parseInt(this.state.bags),
                golf: parseInt(this.state.golf),
                softball: parseInt(this.state.softball),
                coaching: parseInt(this.state.coaching),
                generosity: parseInt(this.state.generosity),
                looks: parseInt(this.state.looks),
                dad_factor: parseInt(this.state.dad_factor),
                fantasy_football: parseInt(this.state.fantasy_football),
                humor: parseInt(this.state.humor),
                emotional_stability: parseInt(this.state.emotional_stability),
                handiness: parseInt(this.state.handiness),
                kids: parseInt(this.state.kids),
                stealth_food_preparation: parseInt(this.state.stealth_food_preparation),
                tech: parseInt(this.state.tech),
                furniture_assembly: parseInt(this.state.furniture_assembly),
                photography: parseInt(this.state.photography)
            },

            zip: parseInt(this.state.zip),

            location: {
                country: this.state.country,
                region: this.state.region
            }
        }

        console.log("Dad profile:");
        console.log(dadProfile);
    }

    render() {
        return (
            <Modal
                visible = {this.state.visibility}>
                <View style={{marginTop: 75, height: "100%", alignItems: "center", backgroundColor: "#EFFCCC"}}>
                    <Button block danger
                        onPress={() => this.closePopup()}
                        style={{ width: "15%", alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 30}}>{"<"}</Text>
                    </Button>
                    <Text style={{ marginTop: 50, fontSize: 30, fontWeight: "bold" }}>Create your dad profile here!</Text>
                    <ScrollView style={{ width: "100%" }}>
                        <View style={{ marginTop: 25, justifyContent: "center", alignItems: "center", overflow: "auto"}}>
                            <Text style={{ fontWeight: "bold" }}>First Name</Text>
                            <TextInput placeholder="First Name Here"
                                placeholderTextColor="black"
                                onChangeText={(text) => this.setState({ firstName: text })}
                                style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 15, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>

                            <Text style={{ fontWeight: "bold" }}>Last Name</Text>
                            <TextInput placeholder="Last Name Here"
                                placeholderTextColor="black"
                                onChangeText={(text) => this.setState({ lastName: text })}
                                style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 40, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>

                            <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>Skills Ratings</Text>


                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                              <SkillRatingSelection skillName = "Grilling"/>
                              <SkillRatingSelection skillName = "Cooking"/>
                              <SkillRatingSelection skillName = "Bags"/>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                <SkillRatingSelection skillName = "Golf"/>
                                <SkillRatingSelection skillName = "Softball"/>
                                <SkillRatingSelection skillName = "Coaching"/>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                <SkillRatingSelection skillName = "Generosity"/>
                                <SkillRatingSelection skillName = "Looks"/>
                                <SkillRatingSelection skillName = "Dad Factor" skill = "dad_factor"/>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                <SkillRatingSelection skillName = "Fantasy Football" skill = "fantasy_football"/>
                                <SkillRatingSelection skillName = "Humor"/>
                                <SkillRatingSelection skillName = "Emotional Stability" skill = "emotional_stability"/>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                              <SkillRatingSelection skillName = "Handiness"/>
                              <SkillRatingSelection skillName = "Kid Skills" skill="kid_skills"/>
                              <SkillRatingSelection skillName = "Stealth Food Prep" skill="stealth_food_preparation"/>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                              <SkillRatingSelection skillName = "Technology"/>
                              <SkillRatingSelection skillName = "Furniture Assembly" skill="furniture_assembly"/>
                              <SkillRatingSelection skillName = "Photography"/>
                            </View>

                            <Text style={{ fontWeight: "bold", fontSize: 25, marginBottom: 20 }}>Location Info</Text>

                            <Text style={{ fontWeight: "bold" }}>Country</Text>
                            <TextInput placeholder="Country Here"
                                placeholderTextColor="black"
                                onChangeText={(text) => this.setState({ country: text })}
                                style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 40, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>

                            <Text style={{ fontWeight: "bold" }}>Region</Text>
                            <TextInput placeholder=" Region Here"
                                placeholderTextColor="black"
                                onChangeText={(text) => this.setState({ region: text })}
                                style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 40, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>

                            <Text style={{ fontWeight: "bold" }}>Zip Code</Text>
                            <TextInput placeholder="Zip Code Here"
                                placeholderTextColor="black"
                                onChangeText={(text) => this.setState({ zip: text })}
                                style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 40, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>

                            <Body style={{ justifyContent: "center", alignItems: "center"}}>
                                <Button block
                                    onPress={() => this.createDadProfile()}
                                    style={{ marginBottom: 400, width: "50%"}}>
                                        <Text style={{ right: "50%", fontWeight: "bold"}}>Create Dad Profile</Text>
                                </Button>
                            </Body>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
}
