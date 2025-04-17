import EStyleSheet from "react-native-extended-stylesheet"
import { Center } from "./ui/center"
import { Spinner } from "./ui/spinner"

export function Loading() {
  return (
    <Center style={styles.container}>
      <Spinner style={styles.spinner} />
    </Center>
  )
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$gray700",
  },
  spinner: {
    color: "$green500",
  },
})
