import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

type ImagesProps = {
	
  borderRaduis: number
   source: string
  size1 :number
  size2:number
 
   
	
}
export const Images: React.FC<ImagesProps> = (props) =>{
    const { source , size1,size2,borderRaduis} = props;
  return (
    <View>
        <Image style={[styles.img,{width : size1, height : size2,borderRadius:borderRaduis}]}
        source={{
          uri: source,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width: 100,
        height: 100,
        borderRadius: 100,
    }
})