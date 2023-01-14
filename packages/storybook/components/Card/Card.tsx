import React from "react"
import {  StyleSheet,View, ImageBackground} from "react-native"




type IITCardProps = {
	
	icon: React.ReactNode
  backgroudColor: string
  title: React.ReactNode
  description : React.ReactNode
  source : string
   
	
}

export const IITCard: React.FC<IITCardProps> = (props) => {
  const { title, description , source,icon ,backgroudColor} = props;
	return (
        

		<View style={styles.view}>
       <ImageBackground   source={{uri:source}} style={{width:200,height:200,backgroundColor:backgroudColor}}>
       {icon}
        </ImageBackground>
    <View>{title}</View>
      <View>{description}</View>
     

        </View>
        
	)
}

const styles = StyleSheet.create({
	
  view:{
    display:'flex',
    flexDirection:"column",
    justifyContent:"space-around",
    width:200
    
  },
})