import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
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
      {/* showsVerticalScrollIndicator={false} -> desativa a barra de rolagem */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((value, index) => (
          <Participant
            key={index}
            name={value}
            handleDeleteUser={handleDeleteUser}
          />
        ))}
      </ScrollView>
    </View>
  )
}
