import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
    padding: 10,
    marginTop: "5%",
    marginBottom: 0,
    marginLeft: "3%",
    borderRadius: 2,
  },

  regenRespBtn: {
    padding: 8,
    backgroundColor: "#343541",
    borderRadius: 2,
    borderColor: "#848590",
    borderWidth: 1,
  },
  clearBtn: {
    padding: 8,
    backgroundColor: "#343541",
    borderRadius: 2,
    borderColor: "#848590",
    borderWidth: 1,
  },
  footerWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    marginTop: "6%",
    marginBottom: "2%",
    width: "100%",
  },
  card: {
    borderRadius: 5,
    padding: 20,
    backgroundColor: "#383444",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollToEndWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20%",
    width: "100%",
    backgroundColor: "#40414f",
  },
  animation: { width: "100%", height: 35, aspectRatio: 0.5 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#343541",
    // backgroundColor: '#484454',
  },
  button: {
    width: "10%",
    marginVertical: 20,
  },
  response: {
    color: "black",
    marginVertical: 1,
    padding: 15,
  },
  baseFont: {
    color: "black",
    marginVertical: 3,
    padding: 15,
  },
  example: {
    color: "black",
    padding: 2,
    textAlign: "center",
  },
  textWrapper: {
    padding: 0,
    borderRadius: 0,
    margin: 0,
    borderBottomColor: "#202123",
    borderBottomWidth: 1,
  },
  botUserText: {
    marginLeft: "1%",
    marginRight: "2%",
    marginBottom: "4%",
    paddingHorizontal: "2%",
  },
})
