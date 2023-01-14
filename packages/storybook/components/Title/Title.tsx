import React from "react"
import {  StyleSheet,View ,Text} from "react-native";

type TitleProps = {
	
	title: string;
 
   
	
}

export const Title: React.FC<TitleProps> = (props) => {
  const { title} = props;
   
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
	
  title:{
    fontWeight:"bold",
    fontSize:40
}
    

  },

)
