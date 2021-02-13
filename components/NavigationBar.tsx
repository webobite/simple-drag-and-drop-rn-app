import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

// @todo : Add Navigation Bar generic Component

function NavigationBar(props: any) {
    console.log("Props in NavigationBar : : :: ", props);
    
    return (
        <View style={NavigationBarStyle.container}>
            <Text>NavigationBar</Text>
        </View>
    )
}

export default NavigationBar

const NavigationBarStyle = StyleSheet.create({
    container : {
        // borderWidth: 2,
        // borderColor: 'red',
        height: "100%",
        backgroundColor: 'blue',
    }
})
