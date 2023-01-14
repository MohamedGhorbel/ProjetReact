import React from "react"
import {  StyleSheet, Text, TextInput, View ,Image} from "react-native"
import {Images }from "../Images/Images"

type IITImageProps = {
	
image: string
   
	
}

export const IITImage: React.FC<IITImageProps> = (props) => {
	
	return (
        

		<View style={styles.view}>
     <Images image="https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000"  size1={50} size2={50} borderRaduis={50} />
     <Images image="https://img.freepik.com/photos-gratuite/jeune-belle-femme-pull-chaud-rose-aspect-naturel-souriant-portrait-isole-cheveux-longs_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.834768853.1665494950"  size2={80} size1={80} borderRaduis={80}/>
     <Images image="https://macstickers.com/wp-content/uploads/2018/07/Letter-A.png" size1={70}  size2={70} borderRaduis={20}/>

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