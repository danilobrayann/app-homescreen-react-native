import { Container, Texto } from "../styles/HomeScreens";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function HomeScreens() {
  return (
    <Container>
      <Feather name="home" size={33} color="#00FA9A" />
      <Texto>Brazil Do Brazil</Texto>
    </Container>
  );
}
