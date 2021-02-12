import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

// @todo: Add Grid Generator in body part

function DefaultBody() {
    return (
        <View style={DefaultBodyStyle.container}>
            <Text>DefaultBody</Text>
        </View>
    )
}

export default DefaultBody

const DefaultBodyStyle = StyleSheet.create({
    container : {
        // borderWidth: 2,
        // borderColor: 'blue',
        height: "100%",
        backgroundColor : "grey"
    }
})
