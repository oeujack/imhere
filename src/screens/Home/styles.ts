import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131016',
    flex: 1,
    padding: 24,
  },
  eventName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  dayName: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#1F1E25',
    height: 56,
    flex: 1,
    borderRadius: 5,
    color: '#ffffff',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
  buttonAdd: {
    width: 56,
    height: 56,
    borderRadius: 56,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewForm: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 36,
    marginBottom: 42,
  },
})
