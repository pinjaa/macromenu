import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  form: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#FFDd1d',
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 15
  },
  errorText: {
    color: 'red',
  },
  centerText: {
    fontSize: 18,
    padding: 16,
  },
  foodItem: {
    padding: 10,
  },
  foodText: {
    fontSize: 16,
  },
  foodName: {
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});