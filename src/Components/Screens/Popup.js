import React, {Component} from "react"; 
import {Modal, Text, Alert, View, TextInput, ScrollView} from "react-native";
import {Picker, Icon, Button, Body} from "native-base";

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
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Grilling</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.grilling) || "1"} 
                                        onValueChange={(value) => this.setState({ grilling: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Cooking</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.cooking) || "1"} 
                                        onValueChange={(value) => this.setState({ cooking: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Bags</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.bags) || "1"} 
                                        onValueChange={(value) => this.setState({ bags: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Golf</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.golf) || "1"} 
                                        onValueChange={(value) => this.setState({ golf: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Softball</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.softball) || "1"} 
                                        onValueChange={(value) => this.setState({ softball: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Coaching</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.coaching) || "1"} 
                                        onValueChange={(value) => this.setState({ coaching: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Generosity</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.generosity) || "1"} 
                                        onValueChange={(value) => this.setState({ generosity: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Looks</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.looks) || "1"} 
                                        onValueChange={(value) => this.setState({ looks: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Dad Factor</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.dad_factor) || "1"} 
                                        onValueChange={(value) => this.setState({ dad_factor: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Fantasy Football</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.fantasy_football) || "1"} 
                                        onValueChange={(value) => this.setState({ fantasy_football: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Humor</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.humor) || "1"} 
                                        onValueChange={(value) => this.setState({ humor: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Emotional Stability</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.emotional_stability) || "1"} 
                                        onValueChange={(value) => this.setState({ emotional_stability: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Handiness</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.handiness) || "1"} 
                                        onValueChange={(value) => this.setState({ handiness: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Kid Skills</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.kids) || "1"} 
                                        onValueChange={(value) => this.setState({ kids: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Stealth Food Prep</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.stealth_food_preparation) || "1"} 
                                        onValueChange={(value) => this.setState({ stealth_food_preparation: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Technology</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.tech) || "1"} 
                                        onValueChange={(value) => this.setState({ tech: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Furniture Assembly</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.furniture_assembly) || "1"} 
                                        onValueChange={(value) => this.setState({ furniture_assembly: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>

                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{ fontWeight: "bold" }}>Photography</Text>
                                    <Picker
                                        mode="dropdown"
                                        placeholder="Click here to rate this skill"
                                        iosIcon={<Icon name="arrow-down"/>}
                                        borderWidth="10"
                                        borderColor="1"
                                        borderRadius="20"
                                        selectedValue={(this.state && this.state.photography) || "1"} 
                                        onValueChange={(value) => this.setState({ photography: value })}>
                                        
                                        <Picker.Item label="1" value="1"/>
                                        <Picker.Item label="2" value="2"/>
                                        <Picker.Item label="3" value="3"/>
                                        <Picker.Item label="4" value="4"/>
                                        <Picker.Item label="5" value="5"/>
                                        <Picker.Item label="6" value="6"/>
                                        <Picker.Item label="7" value="7"/>
                                    </Picker>
                                </View>
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