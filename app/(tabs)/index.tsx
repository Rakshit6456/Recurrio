import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center p-5 justify-center bg-background">
      <Text className="text-7xl text-primary font-sans-extrabold">
        HOME
      </Text>
      <Link href="/onboarding" className="mt-4 font-sand-bold rounded bg-primary text-white p-4">Go To Onboarding</Link>
      <Link href="/(auth)/sign-in" className="mt-4 font-sand-bold rounded bg-primary text-white p-4">
      Sign In your Account</Link>
      <Link href="/(auth)/sign-up" className="mt-4 font-sand-bold rounded bg-primary text-white p-4">
      Create your Account</Link>
      
    </SafeAreaView>
  );
}