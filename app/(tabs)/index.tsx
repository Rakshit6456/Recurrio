import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-destructive">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4">Go To Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4">
      Sign In your Account</Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4">
      Create your Account</Link>
      <Link
        href={{
          pathname:"/subscriptions/[id]",
          params: { id: "claude"},
        }}

      >
        Claude opus Subscription
      </Link>
    </View>
  );
}