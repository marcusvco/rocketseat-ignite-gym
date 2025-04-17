import BackgroundImage from "@/assets/background.png"
import Logo from "@/assets/logo.svg"
import { Input } from "@/components/input"
import { Center } from "@/components/ui/center"
import { Heading } from "@/components/ui/heading"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { ImageBackground } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { SafeAreaView } from "react-native-safe-area-context"

export function Signin() {
  return (
    <ImageBackground
      alt="Pessoas treinando"
      source={BackgroundImage}
      defaultSource={BackgroundImage}
      style={styles.container}
    >
      <SafeAreaView>
        <VStack style={styles.content}>
          <Center style={styles.header}>
            <Logo />
            <Text style={styles.text} size="sm">
              Treine sua mente e o seu corpo.
            </Text>
          </Center>

          <Center style={styles.form}>
            <Heading style={styles.text}>Acesse a conta</Heading>
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
          </Center>
        </VStack>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "$gray700",
  },
  content: {
    paddingBottom: "4rem",
    paddingHorizontal: "2.5rem",
  },
  header: {
    marginVertical: "6rem",
  },
  text: {
    color: "$gray100",
  },
  form: {
    gap: "0.5rem",
  },
})
