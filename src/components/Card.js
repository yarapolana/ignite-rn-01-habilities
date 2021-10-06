import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function Card({ onPress, title }) {
  return(
    <TouchableOpacity style={styles.buttonHability} onPress={onPress}>
      <Text style={styles.cardText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonHability: {
    marginTop: 20,
    backgroundColor: "#233015",
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 30,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 17,
    color: '#FFF'
  }
})
