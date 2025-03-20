import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  function handleAddUser() {
    console.log('Você clicou no botão de adicionar!')
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
      <Participant />
    </View>
  )
}
