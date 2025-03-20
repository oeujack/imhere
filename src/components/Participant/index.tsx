import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface ParticipantProps {
  name: string
  handleDeleteUser: (name: string) => void
}

export function Participant({ name, handleDeleteUser }: ParticipantProps) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
          style={styles.buttonDelete}
          onPress={() => handleDeleteUser(name)}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
