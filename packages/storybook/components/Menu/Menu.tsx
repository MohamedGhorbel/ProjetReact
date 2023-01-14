import React from "react"
import {  StyleSheet,View ,Text} from "react-native"




type MenuProps = {
	
	icon: React.ReactNode
  text: React.ReactNode
  source:React.ReactNode
   
	
}

export const Menu: React.FC<MenuProps> = (props) => {
  const { icon,source,text } = props;
	return (
        

		<View style={styles.view}>
     
      <Text>{icon}</Text>
      <Text>{text}</Text>
      <Text>{source}</Text>
      
        </View>
        
	)
}

const styles = StyleSheet.create({
	
  view:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-around"
    

  },

})