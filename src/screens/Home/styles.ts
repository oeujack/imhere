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
    width: 300,
    // width: "75px",
    borderRadius: 5,
    color: '#ffffff',
    padding: 16,
    fontSize: 16,
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
  viewAdd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 13,
  },
})
