import React from 'react'
import { Text, StyleSheet, Image, View, TouchableOpacity } from 'react-native'
import { h, w} from '../../../constants'


const ImageBigCard = ({ data }) => {

    const {image } = data

    const { cover,sub, container } = styles
    const img = `https${image.medium.slice(4)}`

    return (
        <View style={container}>
            <View style={sub}>
                <Image 
                style={cover}
                source={{ uri: img}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   
    cover: {
        width: w / 1.67,
        height: w * 0.9,
        borderRadius: 10,
    },
    sub: {
        padding: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.4
    },
    container: {
        //width: w / 2.4,
        paddingVertical: 20,
        
        //backgroundColor: 'gold'
        }
})

export {ImageBigCard}