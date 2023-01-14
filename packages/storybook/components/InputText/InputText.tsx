import React from 'react';
import { TextInput, View,StyleSheet} from 'react-native'
type InputProps = {
  icon: React.ReactNode}
  
  export const InputText: React.FC<InputProps> = (props) => {

  return (
    <><View>
      <TextInput placeholder="Type here to search" style={{ color: "#A5A5A5", width: 205, height: 25.15, borderColor: "transparent", backgroundColor: "transparent", fontFamily: "Work Sans", fontWeight: "400"}} />
    </View>
    <View style = {styles.viewStyleForLine}></View>

</>
  );
}

const styles = StyleSheet.create({
  viewStyleForLine: {
      borderBottomColor: "black", 
      borderBottomWidth: StyleSheet.hairlineWidth, 
      alignSelf:'stretch',
      width: 205
    }
  })

