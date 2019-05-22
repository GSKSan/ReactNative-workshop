import React, { Component } from 'react'
import {Text, View,TouchableOpacity,StyleSheet } from 'react-native';

export class TestComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            name:this.props.name,
            workshopNo:this.props.workshopNo
        }
    }
  render() {
    return (
      <View>
          <Text style={styles.textStyle}>Hello, {this.state.name}</Text>
          <Text>Workshop {this.state.workshopNo}</Text>
          <TouchableOpacity onPress={this.nextWorkshop}>

            <Text>Click me to change workshop</Text>

          </TouchableOpacity>
      </View>
    )
  }

  nextWorkshop=()=>{
        let currentWorkshop = this.state.workshopNo;
        currentWorkshop++;

        this.setState({
            workshopNo: currentWorkshop

        })

  }

}

const styles = StyleSheet.create({


    textStyle:{
        color:'red',
        fontSize : 25,
        backgroundColor:'green'
    }





})
