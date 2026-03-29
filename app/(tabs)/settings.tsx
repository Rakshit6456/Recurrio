import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView as RNSafeReaView } from "react-native-safe-area-context";
import {styled} from "nativewind"

const SafeAreaView = styled(RNSafeReaView);

const settings = () => {
  return (
    <SafeAreaView className="flex-1 r p-5 bg-background">
      <Text>settings</Text>
    </SafeAreaView>
  )
}

export default settings