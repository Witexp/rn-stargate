import React, { Component } from 'react'
import { View, Dimensions,ScrollView, StyleSheet } from 'react-native'
import { h, w } from './constants'
import { Header, ImageCard } from './src/components/uikit'





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
      console.log(data)

      this.setState({ data })
      
    } catch (error) {
      throw error
    }
    
    
  }
  
  
  
  render() {

    const { title, data } = this.state
    const {container} = styles
   // console.log('h =', h , 'w=', w)
    return (
      <View>
        <Header title={title}/>
        <ScrollView>
          <View style={container}>
            { data.map(item => (
              <ImageCard data={item} key={item.id} />
            ))
            }
          </View>
        </ScrollView>
      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexShrink: 2,
    justifyContent: 'space-around',
    marginBottom: 150,
  }
})



