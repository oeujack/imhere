import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Participant() {
  const array = Array.from({ length: 5 }, (_, index) => index + 1)

  return (
    <>
      {array.map((index) => (
        <View style={styles.container} key={index}>
          <Text style={styles.name}>Jackson dos Santos</Text>
          <TouchableOpacity style={styles.buttonDelete}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  )
}
