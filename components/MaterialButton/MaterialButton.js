import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./MaterialButton.styles";

export class MaterialButton extends React.Component {
    render() {
        return (
            <TouchableOpacity style={[styles.buttonContainer,this.props.buttonStyles]}>
                <Text style={styles.buttonText}>{this.props.buttonText} </Text>
            </TouchableOpacity>
        );
    }
}