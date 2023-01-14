import React from "react"
import {  View, TouchableOpacity, Text} from "react-native"




type MyButtonProps = {
	
  onPress: () => void;
  backgroundColor:string;
  icon:React.ReactNode;
  paddingTop:number;
  paddingLeft:number;
   marginLeft:number;
	
}

export const MyButton: React.FC<MyButtonProps> = (props) => {
  const { paddingTop, paddingLeft ,backgroundColor,marginLeft , icon} = props;
	return (
        

		<View>
    <TouchableOpacity style={{borderRadius: 20, backgroundColor:backgroundColor,width:40,height:40 , marginLeft:marginLeft}}>
   <Text style={{paddingLeft:paddingLeft,paddingTop:paddingTop}}>{icon}</Text>
    </TouchableOpacity>

        </View>
        
	)
}

