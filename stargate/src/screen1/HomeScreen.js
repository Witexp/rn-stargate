import React, { Component } from 'react'
import { View, Dimensions,ScrollView, StyleSheet } from 'react-native'
//import {} from 'react-navigation'

import { STARGATE_DETAILS} from '../routes'

import { Header, ImageCard, Layout } from '../components/uikit'





const url = 'http://api.tvmaze.com/search/shows?q=stargate'


export default class HomeScreen extends Component {
  state = {
      title: 'STAR GATE',
      data: []
    }
  
  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      

      this.setState({ data })
      
    } catch (e) {
      throw e
    }
  }
  
  
  
  render() {

    //console.log('this.props', this.props)
    const { title, data } = this.state
    const { navigation } = this.props
    return (
      <View>
          <Header title={title}/> 
          <ScrollView>
            <Layout>
            { data.map(item => (
              <ImageCard data={item.show} 
              key={item.show.id}
              onPress={() => navigation.navigate(STARGATE_DETAILS,(item.show))} 
              />
            ))}
            </Layout>
          </ScrollView>
      </View>
      
    )
  }
}




