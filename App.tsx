import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto"
import "@/global.css"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider"
import { Center } from "./components/ui/center"
import { Loading } from "./components/loading"

export default function App() {
  const [loaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider mode="light">
      <StatusBar style="light" />
      {!loaded ? (
        <View>
          <Center>
            <Text className="bg-green600">
              Open up App.tsx to start working on your app!
            </Text>
          </Center>
        </View>
      ) : (
        <Loading />
      )}
    </GluestackUIProvider>
  )
}
