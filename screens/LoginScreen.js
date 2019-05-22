import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import styles from "./LoginScreen.styles";
import { MaterialButton } from "../components/MaterialButton/MaterialButton";

export class LoginScreen extends React.Component {
    render() {
        return (
          <View style={styles.loginContainer}>
                <View style = {styles.headerContainer}>
                    <Image style={styles.imageStyle} source={require("../assets/logo.png")}/>
                    <Text style={styles.headerText}>Lets swipe to the dream job!</Text>
                </View>
                <View style={styles.formContainer}>
                <TextInput style={styles.inputContainer} placeholder="Username"/>
                <TextInput style={styles.inputContainer} placeholder="Password" secureTextEntry={true} />

                   <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>SIGN IN </Text>
                   </TouchableOpacity>

                   
                </View>

          </View>
        )
    }
}