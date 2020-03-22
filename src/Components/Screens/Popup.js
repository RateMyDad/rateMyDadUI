import React, {Component} from "react"; 
import {Modal, Text, Alert, View, TextInput, Button, Picker, ScrollView} from "react-native";

export default class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: props.modalVisible,
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
            photography: "1"
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            this.setState({ visibility: this.props.modalVisible })
        }

        else {
            console.log("Previous props:")
            console.log(prevProps); 
            console.log("Current props:")
            console.log(this.props);
        }
    }

    closePopup() {
        this.setState({ visibility: false });

        this.props.updateParent(); 
    }

    render() {
        return (
            <Modal 
                visible = {this.state.visibility}> 
                <View style={{marginTop: 75, height: "100%", alignItems: "center", backgroundColor: "#EFFCCC"}}>
                    <Button
                        onPress={() => this.closePopup()}
                        title="<"
                        color="red"
                        style={{ width: "25%" }}/>
                    <Text style={{ marginTop: 50, fontSize: 30, fontWeight: "bold" }}>Create your dad profile here!</Text>
                    <ScrollView>
                        <View style={{ marginTop: 25, alignItems: "center", overflow: "auto"}}>
                            <Text style={{ fontWeight: "bold" }}>First Name</Text>
                            <TextInput placeholder="First Name Here"
                                placeholderTextColor="black"
                                style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 15, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>

                            <Text style={{ fontWeight: "bold" }}>Last Name</Text>
                            <TextInput placeholder="Last Name Here"
                                placeholderTextColor="black"
                                style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 15, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>

                            <Text style={{ fontSize: 25, fontWeight: "bold", top: 60}}>Skills Ratings</Text>
                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Grilling</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.grilling) || "1"} 
                                    onValueChange={(value) => this.setState({ grilling: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Cooking</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.cooking) || "1"} 
                                    onValueChange={(value) => this.setState({ cooking: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Bags</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.bags) || "1"} 
                                    onValueChange={(value) => this.setState({ bags: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Golf</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.golf) || "1"} 
                                    onValueChange={(value) => this.setState({ golf: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Softball</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.softball) || "1"} 
                                    onValueChange={(value) => this.setState({ softball: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Softball</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.softball) || "1"} 
                                    onValueChange={(value) => this.setState({ softball: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Coaching</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.coaching) || "1"} 
                                    onValueChange={(value) => this.setState({ coaching: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Generosity</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.generosity) || "1"} 
                                    onValueChange={(value) => this.setState({ generosity: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Looks</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.looks) || "1"} 
                                    onValueChange={(value) => this.setState({ looks: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "flex-end"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Dad Factor</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.dad_factor) || "1"} 
                                    onValueChange={(value) => this.setState({ dad_factor: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Fantasy Football</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.fantasy_football) || "1"} 
                                    onValueChange={(value) => this.setState({ fantasy_football: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Humor</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.humor) || "1"} 
                                    onValueChange={(value) => this.setState({ humor: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Emotional Stability</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.emotional_stability) || "1"} 
                                    onValueChange={(value) => this.setState({ emotional_stability: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Handiness</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.hadiness) || "1"} 
                                    onValueChange={(value) => this.setState({ handiness: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Kid Skills</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.kids) || "1"} 
                                    onValueChange={(value) => this.setState({ kids: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Stealth Food Prep</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.stealth_food_preparation) || "1"} 
                                    onValueChange={(value) => this.setState({ stealth_food_preparation: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Technology</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.tech) || "1"} 
                                    onValueChange={(value) => this.setState({ tech: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Furniture Assembly</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.furniture_assembly) || "1"} 
                                    onValueChange={(value) => this.setState({ furniture_assembly: value })}
                                    style={{ height: 100, width: 100 }}>
                                    <Picker.Item label="1" value="1"/>
                                    <Picker.Item label="2" value="2"/>
                                    <Picker.Item label="3" value="3"/>
                                    <Picker.Item label="4" value="4"/>
                                    <Picker.Item label="5" value="5"/>
                                    <Picker.Item label="6" value="6"/>
                                    <Picker.Item label="7" value="7"/>
                                </Picker>
                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center"}}>
                                <Text style={{ fontWeight: "bold", marginTop: "60%", right: "15%" }}>Photography</Text>
                                {/* Inspired by this source: https://stackoverflow.com/questions/37597665/how-to-make-react-native-picker-stay-at-newly-selected-option */}
                                <Picker 
                                    selectedValue={(this.state && this.state.photography) || "1"} 
                                    onValueChange={(value) => this.setState({ photography: value })}
                                    style={{ height: 100, width: 100 }}>
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
                    </ScrollView>
                </View>
            </Modal>
        )
    }
}