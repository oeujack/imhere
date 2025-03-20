import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Home() {
  function handleAddUser() {
    console.log('Você clicou no botão de adicionar!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.dayName}>Domingo, 16 de Março de 2025.</Text>
      <View style={styles.viewAdd}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6B6B6B'}
          // serve para alterar o type do TextInput
          keyboardType="default"
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddUser}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
