import React from "react"
import {  StyleSheet,View ,Text} from "react-native"




type NavbarProps = {
	
	icon: React.ReactNode
  icon1: React.ReactNode
  icon2: React.ReactNode
  icon3: React.ReactNode
  text: React.ReactNode
  icon4:React.ReactNode
   
	
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { icon,icon1,icon2,icon3,icon4} = props;
   
	return (
        

		<View style={styles.view}>
     
      <Text>{icon}</Text>
      <Text>{icon1}</Text>
      <Text>{icon2}</Text>
      <Text>{icon3}</Text>
      <Text>{icon4}</Text>
        </View>
        
	)
}

const styles = StyleSheet.create({
	
  view:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-around", 
   
    

  },

})