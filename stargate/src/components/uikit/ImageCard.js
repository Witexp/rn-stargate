import React from 'react'
import { Text, StyleSheet, Image, View } from 'react-native'
import { h, w} from '../../../constants'


const ImageCard = ({ data }) => {

    const {image, name } = data

    const { h1, cover,sub, container } = styles
    const img = `https${image.medium.slice(4)}`

    return (
        <View style={container}>
            <View style={sub}>
                <Image 
                style={cover}
                source={{ uri: img}}
                />
            </View>
            <Text style={h1}>{name.toUpperCase()}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    h1: {
        paddingTop: 5,
        fontFamily: 'AvenirNext-DemiBold',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,
    },
    sub: {
        padding: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4},
    container: {
        width: w / 2.4,
        paddingVertical: 10,
        
        //backgroundColor: 'gold'
        }
})

export {ImageCard}