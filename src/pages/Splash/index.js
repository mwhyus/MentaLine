import React ,{useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICLogo, ILFirst } from '../../assets'
import { Fire } from '../../config'

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      Fire.auth().onAuthStateChanged((user) => {
        if(user){
          //jika user nya login
          console.log('user: ', user)
          navigation.replace('MainApp')
        } else {
          //user logout
          navigation.replace('GetStarted')
        }
      })
      // navigation.replace('GetStarted')
    }, 2000)
  },[])
  
  return (
    <View style={styles.background}>
      <View style={styles.mainLogo}>
        <ICLogo />
      </View>

      <View style={styles.illustration}>
        <ILFirst />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainLogo: {
    marginTop: 20,
    width: "100%",
    padding: 10
  },

  illustration: {
    alignItems: 'center',
    width: '100%',
    height: '90%',
    marginTop: '35%'
  },

  background: {
    backgroundColor: '#FFFFFF'
  }

})
