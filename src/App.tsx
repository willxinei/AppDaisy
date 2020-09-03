import React from 'react'
import { View, StatusBar } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import AuthRoutes from './routes'
import { ScrollView } from 'react-native-gesture-handler'

const App: React.FC = () => (
   <NavigationContainer>
      <StatusBar barStyle='light-content' backgroundColor='#000000' />
        <View style={{ flex: 1, backgroundColor: '#000000'}}>
          <AuthRoutes />
        </View>
   </NavigationContainer>
)

export default App
