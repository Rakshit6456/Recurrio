import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'

const SubscriptionDetails = () => {
    const {id} = useLocalSearchParams<{id:string}>();
  return (
    <View>
      <Text>Subscription Details: {id}</Text>
      <Link href="/">Go back</Link>
    </View>
  )
}

export default SubscriptionDetails