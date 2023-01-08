import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  nameColor: string;
  counter: number;
}

export function NamedCounter({ name, nameColor, counter }: Props) {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 14,
        color: nameColor,
        marginRight: 10,
        fontWeight: 'bold'
      }}>{name}</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counter}>{counter}</Text>
      </View>

    </View>
  )
}

