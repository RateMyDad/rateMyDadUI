import React, {Component} from "react"; 
import {Modal, Text, Alert, View} from "react-native";

export default class Popup extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal 
                animationType="slide"
                visible = {this.props.modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal closed")
                }}> 
                <View style={{marginTop: 50, alignItems: "center"}}>
                    <Text>This is the modal!</Text>
                </View>
            </Modal>
        )
    }
}