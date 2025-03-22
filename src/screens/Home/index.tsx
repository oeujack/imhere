import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  const [participants, setParticipants] = useState([''])
  const [participantName, setParticipantName] = useState('')

  function handleAddUser() {
    if (!participantName.trim()) {
      return Alert.alert('Erro', 'O nome do participante não pode estar vazio.')
    }

    if (participants.includes(participantName)) {
      return Alert.alert('Erro', 'Este participante já está na lista.')
    }

    setParticipants((prev) => [...prev, participantName])
    setParticipantName('')
  }

  function handleDeleteUser(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((prev) => prev.filter((p) => p !== name))
          Alert.alert('Deletado!', `Participante ${name} foi removido.`)
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ])
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
          value={participantName}
          onChangeText={setParticipantName}
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
            Adicione participantes à sua lista de presença.
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
