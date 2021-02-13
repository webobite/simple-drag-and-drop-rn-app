import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const CreateForm = (props: any) => {
    return (
        <View style={CreateFormStyle.container}>
            <Text>NavigationBar</Text>
            <Button
                onPress={()=>{
                    props.navigation.toggleDrawer();
                }}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

const CreateFormStyle = StyleSheet.create({
    container: {
        // borderWidth: 2,
        // borderColor: 'red',
        height: "100%",
        // backgroundColor: 'R',
    }
})