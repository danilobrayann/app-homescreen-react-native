import { Container, Texto } from "../styles/HomeScreens";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import Button from "../components/button/buttonHomescreen";
import ToggleTheme from "../components/ToggleTheme/ToggleTheme";

export default function HomeScreens() {
  return (
    <Container >
      <ToggleTheme/>
      <Feather name="home" size={33} color="#00FA9A" />
      <Texto>Salvador Bahia</Texto>

      <Button />
    </Container>
  );
}
