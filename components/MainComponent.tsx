import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Col, Row, Grid } from "react-native-easy-grid";
import HeaderBar from './HeaderBar';
import NavigationBar from './NavigationBar';
import DefaultBody from './DefaultBody';

function MainComponent(props: any) {
    return (
        <Grid>
            <Row size={10}>
                <HeaderBar />
            </Row>
            <Row size={90} style={{
                borderWidth: 5
            }}>
                <Col size={15}>
                    <NavigationBar />
                </Col>
                <Col size={85}>
                    <DefaultBody />
                </Col>
            </Row>
        </Grid>
    )
}

export default MainComponent

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        // padding: 8,
        height: "100%",

    },
})