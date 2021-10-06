import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function Button({ onPress, title }) {
  return(
    <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: "#A370F7",
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7.5,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 17,
    color: '#FFF'
  }
})
