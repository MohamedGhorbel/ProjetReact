import React from "react"
import { View ,TextInput} from "react-native"
import { Ionicons } from '@expo/vector-icons';



type SearchProps = {
  icon: React.ReactNode
  text: string
  size1:number
  size2:number
  size3:number
  sizeIcon:number
  borderColor:string
  bgColor: string
  borderRadius:number
  fontFamily:string
  size5:number
  
}

export const Search: React.FC<SearchProps> = (props) => {
  const { text, size1,size2 ,borderColor,bgColor, borderRadius,fontFamily ,size3,sizeIcon, size5} = props;
	return (
        
    <View>
      <Ionicons name="search" style={{ color: '#A5A5A5', position: 'absolute', left: "10px", right: "14.63px", top: "10px", bottom: "14.63px", fontSize:sizeIcon}} />
      <TextInput placeholder={text} style={{ color:"#A5A5A5",width: size1, height: size2, borderColor: borderColor, borderRadius: borderRadius, backgroundColor: bgColor, fontFamily: fontFamily, paddingLeft: size3 ,paddingTop:size5}} />
    </View>
	)
}

