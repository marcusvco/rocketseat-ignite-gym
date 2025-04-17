import { ComponentProps } from "react"
import {
  Input as GluestackInput,
  InputField,
  InputIcon,
  InputSlot,
} from "./ui/input"
import EStyleSheet from "react-native-extended-stylesheet"

type Props = ComponentProps<typeof InputField>

export function Input({ ...rest }: Props) {
  return (
    <GluestackInput style={styles.container}>
      <InputField style={styles.input} {...rest} />
      <InputSlot>
        <InputIcon>{/* Some Icon Component */}</InputIcon>
      </InputSlot>
    </GluestackInput>
  )
}

const styles = EStyleSheet.create({
  container: {
    height: "3.5rem",
    borderWidth: "0rem",
    borderRadius: "$roundedMd",
    backgroundColor: "$gray700",
    paddingHorizontal: "1rem",
  },
  input: {
    color: "white",
    fontFamily: "$body",
    placeHolderTextColor: "$gray300",
  },
})
