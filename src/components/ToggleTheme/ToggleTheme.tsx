import React, { useState } from "react";
import { View, Text, Switch } from "react-native";
import { Container, Texto, Texto1 } from "../../styles/ToggleThemeStyles";

export default function ToggleTheme() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <Container >
      <Texto>Dark</Texto>
      <Switch
        trackColor={{ true: "black ", false: "white" }}
        thumbColor={isEnabled ? "white" : "black"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Texto1>Light</Texto1>
    </Container>
  );
}
