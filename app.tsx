import "@/global.css"
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto"
import { StatusBar } from "expo-status-bar"
import { Loading } from "./components/loading"
import { GluestackUIProvider } from "./components/ui/gluestack-ui-provider"
import { Signin } from "./src/screens/signin"
import EStyleSheet from "react-native-extended-stylesheet"

EStyleSheet.build({
  $green500: "#00B37E",
  $green600: "#16a34a",
  $green700: "#00875F",
  $gray100: "#E1E1E6",
  $gray200: "#C4C4CC",
  $gray300: "#7C7C8A",
  $gray400: "#323238",
  $gray500: "#29292E",
  $gray600: "#202024",
  $gray700: "#121214",
  $gray900: "#121214",
  $red500: "#F75A68",
  $roundedSm: "0.25rem",
  $roundedMd: "0.375rem",
  $roundedLg: "0.5rem",
  $body: "Roboto_400Regular",
  $heading: "Roboto_700Bold",
})

export default function App() {
  const [loaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <GluestackUIProvider mode="light">
      <StatusBar style="light" translucent />
      {loaded ? <Signin /> : <Loading />}
    </GluestackUIProvider>
  )
}
