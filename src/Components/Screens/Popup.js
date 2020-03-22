import React, {Component} from "react"; 
import {Modal, Text, Alert, View, TextInput, Button} from "react-native";

export default class Popup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visibility: props.modalVisible
        };
    }

    componentDidMount() {
        console.log("Visibility:");
        console.log(this.state.visibility); 
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            this.setState({ visibility: this.props.modalVisible })
        }

        else {
            console.log(prevProps); 
            console.log(this.props);
        }
    }

    render() {
        console.log("State of this component's visibility:");
        console.log(this.state.visibility); 
        //console.log(this.props.modalVisible); 
        
        return (
            <Modal 
                visible = {this.state.visibility}> 
                <View style={{marginTop: 75, alignItems: "center", backgroundColor: "#EFFCCC"}}>
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