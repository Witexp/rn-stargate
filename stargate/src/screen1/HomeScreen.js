import React, { Component } from 'react'
import { View, Dimensions,ScrollView, StyleSheet } from 'react-native'

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

    console.log('this.props', this.props)
    const { title, data } = this.state
    return (
      <View>
        <Header title={title}/>
          <ScrollView>
            <Layout>
            { data.map(item => (
              <ImageCard data={item.show} key={item.show.id} />
            ))}
            </Layout>
          </ScrollView>
      </View>
      
    )
  }
}




