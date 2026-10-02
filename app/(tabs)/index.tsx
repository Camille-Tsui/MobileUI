import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Home Page</Text>
      {/* TODO: Compare with Link */}
      <Pressable onPress={() => router.push({ pathname: "/" })}>
        <Text>Go to...</Text>
      </Pressable>
    </View>
  );
}
