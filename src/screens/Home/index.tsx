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
    if (participants.includes('Naruto')) {
      return Alert.alert(
        'Participante existe',
        'Já existe participante na lista com esse nome.'
      )
    }
  }

  function handleDeleteUser(name: string) {
    Alert.alert('Remover', `Deseja remover o participante ${name} ?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!', `Participante ${name} foi removido com sucesso!!!`),
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
