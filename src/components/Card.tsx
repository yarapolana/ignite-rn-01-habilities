import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text, Platform, StyleSheet } from 'react-native'

interface CardProps extends TouchableOpacityProps {
  title: string
}

export function Card({ title, ...rest }: CardProps) {
  return(
    <TouchableOpacity style={styles.buttonHability} {...rest}>
      <Text style={styles.cardText}>
        {title}
      </Text>
      <Text style={[styles.cardText, {fontWeight: 'bold'}]}>
        ❌
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonHability: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7.5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cardText: {
    fontSize: 17
  }
})
