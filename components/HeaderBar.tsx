import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";

function HeaderBar() {
    return (
        <View style={HeaderBarStyle.container}>
            <Text>HeaderBar</Text>
        </View>
    )
}

export default HeaderBar

const HeaderBarStyle = StyleSheet.create({
    container : {
        // borderWidth: 2,
        // borderColor: 'black',
        height: "100%",
        width: "100%",
        backgroundColor : 'orange'
    }
})

