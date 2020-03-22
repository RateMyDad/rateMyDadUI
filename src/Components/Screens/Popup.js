import React, {Component} from "react"; 
import {Modal, Text, Alert, View, TextInput, Button} from "react-native";

export default class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: props.modalVisible,
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
                    <View style={{ marginTop: 25, alignItems: "center" }}>
                        <Text style={{ fontWeight: "bold" }}>First Name</Text>
                        <TextInput placeholder="First Name Here"
                            placeholderTextColor="black"
                            style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 15, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>

                        <Text style={{ fontWeight: "bold" }}>Last Name</Text>
                        <TextInput placeholder="Last Name Here"
                            placeholderTextColor="black"
                            style={{ backgroundColor: "white", height: 20, width: 300, marginBottom: 15, borderWidth: 1, borderRadius: 20, fontSize: 12, textAlign: "center", borderColor: "black" }}/>
                    </View>
                </View>
            </Modal>
        )
    }
}