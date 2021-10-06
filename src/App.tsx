import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Platform, TextInput, FlatList } from 'react-native'

import { Button } from './components/Button'
import { Card } from './components/Card'

interface Hability {
  id: string
  name: string
}

export default function App() {
  const [newHability, setNewHability] = useState('')
  const [habilities, setHabilities] = useState<Hability[]>([])
  const [greeting, setGreeting] = useState('')

  function handleAddHability() {
    if (newHability === "") return
    
    const data: Hability = {
      id: String(new Date().getTime()),
      name: newHability
    }

    setHabilities(oldState => [...oldState, data])
    setNewHability('')
  }

  function handleRemoveHability(id: string) {
    setHabilities(oldState => oldState.filter(hability => hability.id !== id))
  }

  useEffect(() => {
    const currentHour = new Date().getHours()
    const greetingState = currentHour < 12 ? 'Good Morning' : currentHour >= 12 && currentHour < 18 ? 'Good Afternoon' : 'Good Evening'

    setGreeting(greetingState)
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>You are amazing Yara</Text>
        <Text style={[styles.title, { fontSize: 14, fontWeight: 'normal' }]}>{greeting}</Text>

        <TextInput
          style={styles.input}
          placeholder="New hability"
          placeholderTextColor="#555"
          onChangeText={setNewHability}
        />

        <Button title="App" onPress={handleAddHability} />

        <Text style={[styles.title, { marginTop: 50 }]}>My Skills</Text>

        <FlatList
          data={habilities}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Card onPress={() => handleRemoveHability(item.id)} title={item.name} />
          )}
        />

        <StatusBar style="light" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
    paddingHorizontal: 30,
    backgroundColor: '#121015',
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1F1E25',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7.5,
    color: '#FFF'
  }
})
