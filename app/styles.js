import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 100,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 2,
    width: '60%',
  },

  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },

  buttonContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '30%',
  },
  button: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '50%',
  },



});