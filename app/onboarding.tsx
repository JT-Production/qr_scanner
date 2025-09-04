import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { images } from '@/constants/images'

const Onboarding = () => {
  const handleGetStarted = () => {
    // Navigate to the tabs after onboarding
    router.replace('/(tabs)/home')
  }

  return (
 <View className="bg-white flex-1 justify-center items-center">
      <View className="bg-primary flex-1 w-full rounded-bl-[120px] justify-center items-center">
        <View className="flex- justify-center items-center">
          <Image source={images.logo} className="w-64 h-64" />
        </View>
        
      </View>
      <View className=" flex w-full rounded-[90px] rounded-b-none h-64 justify-center items-center gap-3 p-2">
          <TouchableOpacity className="text-4xl font-medium text-center p-2 text-black bg-orange-400 w-full rounded-3xl" onPress={handleGetStarted}>
            <Text className="text-2xl font-medium text-center p-5 text-black ">Get started</Text>
          </TouchableOpacity>
          <TouchableOpacity className="text-4xl font-medium text-center p-2 text-black bg-orange-300 w-full rounded-3xl">
            <Text className="text-2xl font-medium text-center p-5 text-WHITE ">Create an account</Text>
          </TouchableOpacity>
          
        </View>
    </View>
  )
}

export default Onboarding
