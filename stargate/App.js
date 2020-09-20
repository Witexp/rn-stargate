import React, { Component } from 'react'
import { View, Dimensions,ScrollView, StyleSheet } from 'react-native'

import { Header, ImageCard, Layout } from './src/components/uikit'
import { STARGATE_DETAILS } from './src/routes'





const url = 'https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json'


export default class App extends Component {
  state = {
      title: 'STAR GATE',
      data: []
    }
  
  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
     // console.log(data)

      this.setState({ data })
      
    } catch (e) {
      throw e
    }
  }
  
  
  
  render() {

    const { title, data } = this.state
    const { navigation } = this.props

    return (
      <View>
        <Header title={title}/>
          <ScrollView>
            <Layout>
            { data.map(item => (
              <ImageCard data={item} key={item.id} 
              onPress={() => navigation.navigate(STARGATE_DETAILS,(data))}
              />
            ))}
            </Layout>
          </ScrollView>
      </View>
      
    )
  }
}




