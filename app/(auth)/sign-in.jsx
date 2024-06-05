import { View, Text ,ScrollView, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants';
const SignIn = () => {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className = "w-full justify-center h-full px-4 my-1">
          <Image source = {images.logo} resizeMode='contain' className="w-[155px] h-[75px]"/>
          <Text className="text-2xl text-white text-semibold mt-1 font-psemibold px-9">Log in to Merve</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn