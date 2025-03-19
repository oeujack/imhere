import { View, Text, TextInput } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.dayName}>Domingo, 16 de Março de 2025.</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do participante"
        placeholderTextColor={'#6B6B6B'}
        keyboardType='numeric'
      />
    </View>
  )
}
