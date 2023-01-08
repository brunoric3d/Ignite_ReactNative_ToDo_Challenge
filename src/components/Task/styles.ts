import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    borderColor: '#333333',
    borderWidth: 1,
    marginBottom: 8
  },

  taskItemText: {
    color: '#FFF',
    flex: 1
  },
  taskItemTextDone: {
    color: '#808080',
    flex: 1,
    textDecorationLine: 'line-through'
  },

  taskItemButton: {
    marginRight: 15,
    width: 20,
    height: 20,

  },
  taskItemButtonUnpressed: {
    width: 20,
    height: 20,
    borderColor: '#4EA8DE',
    borderWidth: 2,
    borderRadius: 20
  }

})