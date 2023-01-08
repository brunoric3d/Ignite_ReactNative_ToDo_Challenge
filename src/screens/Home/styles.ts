import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A'
  },

  header: {
    width: '100%',
    height: 175,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    justifyContent: 'center'
  },

  counterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  tasksContainer: {
    padding: 20,
    flex: 1
  },
  taskItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 1
  },

  taskItemText: {
    color: '#FFF',
    flex: 1
  },
  taskItemButton: {
    width: 50,
    height: 50,
  },
  input: {
    height: 56,
    flex: 1,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 14,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 40
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    marginTop: -50,
    marginBottom: 40,
    width: '100%',
    flexDirection: 'row'
  },
  emptyListContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#333333',
    marginBottom: 40,
  }

})