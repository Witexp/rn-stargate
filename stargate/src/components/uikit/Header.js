import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { ifIphoneX } from 'react-native-iphone-x-helper'

import {w} from '../../../constants'

import Icon from 'react-native-vector-icons/Ionicons';


const Header = ({title, onPress, leftIcon, leftColor, detail}) => {
    //console.log(props)

    const { viewStyle, textStyle, leftButtonStyle } = styles
    return (
            <View style={viewStyle}>
            <TouchableOpacity onPress={onPress}> 
                <Icon 
                name={leftIcon} 
                style={[leftButtonStyle, {paddingLeft: detail ? 5 : 30}]}
                color={leftColor}
                ></Icon>
               </TouchableOpacity> 
                <Text
                numberOfLines={1} 
                ellipsizeMode='tail'
                style={[textStyle, {paddingLeft: leftIcon ? 0 : 0}]}
                >
                  {title}
                </Text>
            </View>
    )
}


const styles = StyleSheet.create({
    viewStyle: {
      flexDirection: 'row',
      ...ifIphoneX({
          height: 116,
      },{
          height: 90
      }
      ),
      //justifyContent: 'center',
      //alignItems: 'flex-start',
      backgroundColor: '#30d0fe',
     // paddingLeft: 22,
      //paddingTop: 71,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2},
      shadowOpacity: 0.2,
      elevation: 2,
      position: 'relative'
    },
    textStyle: {
      color: '#fff',
      width: w -40,
      fontSize: 28,
      fontFamily: 'AvenirNext-DemiBold',
      //textAlign: 'center',
      //margin: 10
      ...ifIphoneX({
        paddingTop: 75,
    },{
        paddingTop: 50,
    }
    ),
    },
    leftButtonStyle: {
      ...ifIphoneX({
        paddingTop: 75
      },{
        paddingTop: 50
      }),
      fontSize: 35
    }
  })
  

export{ Header }