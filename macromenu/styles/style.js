import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  formContainer: {
    flex: 1,
    marginBottom: 10,
  },
  listContainer: {
    flex: 1, // Adjust this to give more or less space to the list
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#FFDd1d',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15, 
    marginBottom: 10,
    marginTop: 10
  },
  buttonText: {
    color: 'black'
  }
})
