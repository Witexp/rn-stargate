import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import { Header, ImageBigCard  } from '../components/uikit'






export default class DetailsScreen extends Component {
    render() {
        //console.log('detailsScreen props',this.props)
        const { image, name, summary} = this.props.navigation.state.params
        const { navigation } = this.props
        const data = { image }
        const {container, h1, h2, sub}=styles

        return (
            <View style={container}>
                 <Header
                    detail 
                    title={name}
                    onPress={() => navigation.goBack()} 
                    leftIcon="caret-back-outline"
                    leftColor='#fff'
                /> 
                <ScrollView>
                    <View style={sub}>
                        <ImageBigCard data={data}/>
                        <Text style={h1}>{name.toUpperCase()}</Text>
                        <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    sub: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 150,
        backgroundColor: '#fff'
    },
    h1: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 30,
        padding: 15,
        textAlign: 'center'
    },
    h2: {
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 15,
        padding: 15,
        color: 'gray',
        textAlign: 'center',
        paddingHorizontal: 15,
    }
})
