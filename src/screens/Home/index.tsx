import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  const participants = [
    'Naruto',
    'Sakura',
    'Kakashi',
    'Sasuke',
    'Jiraya',
    'Itachi',
    'Gaara',
    'Shikamaru',
    'Konan',
    'Temari',
    'Tsunade',
    'Gamakichi',
    'Minato',
    'Kabuto',
  ]

  function handleAddUser() {
    console.log('Adiciona!!')
  }

  function handleDeleteUser(name: string) {
    console.log(`Participante ${name} excluido!`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.dayName}>Quarta-feira, 19 de Março de 2025.</Text>
      <View style={styles.viewForm}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6B6B6B'}
          keyboardType="default"
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddUser}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Adicione participantes a sua lista de presença.
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            handleDeleteUser={handleDeleteUser}
          />
        )}
      />
    </View>
  )
}
