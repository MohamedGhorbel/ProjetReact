import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { IITCard } from "./Card";
import { Text } from "react-native";
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 
import {MyButton} from "../MyButton/MyButton";

const IITCardMeta: ComponentMeta<typeof IITCard> = {
  title: "Card",
  component: IITCard,
  args: {
  backgroudColor:"#E3EDFB",
  title : <Text style={{marginTop:10,backgroundColor:"white",fontFamily: "Rubik",fontWeight:"bold" ,fontSize:20 ,textAlign:"center"}}>Help the Dogs </Text>,
  source : "https://www.figma.com/file/yeok5btXQmVKR2LUtpIygX/image/76f3b32a220887e939fdfdab3e90bd8f1b3db153?fuid=1194718966728764599"
},
};
const onPress=()=>{
  console.log("press")
  }
export default IITCardMeta;

type IITCardStory = ComponentStory<typeof IITCard>;

export const Basic: IITCardStory = (args) => <IITCard{...args}  />;
export const Card2: IITCardStory = (args) => <IITCard{...args}   />;
export const Card3: IITCardStory = (args) => <IITCard{...args}   />;
Card2.args={
  title : <Text style={{fontFamily: "Inter",fontWeight:"bold" ,fontSize:20 ,textAlign:"center"}}>Polkadot Red Dress </Text>,
  description : <Text style={{textAlign:"center",color:"#757575",fontWeight:"bold"}}>Rs.  1,499.00</Text>,
  icon:<MyButton onPress={onPress} backgroundColor="white" marginLeft={130} paddingTop={5} paddingLeft={8} icon={ <AntDesign name="hearto" size={24} color="red" style={{}} />}/>,
  source : "https://s3-alpha-sig.figma.com/img/d116/b77f/94c47cb34085ecba93d7086e56c30f3f?Expires=1674432000&Signature=IQkPlu~wfNX6FNVC9EEbolz1OKJB~kThoZSEnDS7tTdiu5-8vBXBP-58Mu20z8AliHhgTdI0XhTIyKHEbEGW~oUuafZ423qrDNNhZc3mZji14MT1f07JjRuM9UKN3eZVAU6El96GjkB1Yei1NiVuocl4u4wiJydG0tCRH0QJpbiekkmHw4rRTTK5csmz3vDZb4dM3OL6GlxjXGfsqUtvN7yVFimsoz4bgpanb6CuEQeIXbNa8g5C~Xrc0dWadB3oYlTAfcauOL7386f75M0ZXNU-zFmDKQ3OOeiIycMhpqaXeqwHwWTwFIKNt2euQRMaOu4kRKWEEF9BFhxEKI-Gew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  ,backgroudColor:"transparent",
}
Card3.args={
  title : <Text style={{fontFamily: "Playfair Display",fontWeight:"bold" ,fontSize:20 ,textAlign:"center"}}>Artsy </Text>,
  description : <Text style={{textDecorationLine:"underline",fontFamily: "Work Sans" ,textAlign:"center"}}>Shop Now</Text>,
  icon :  <AntDesign name="hearto" size={24} color="grey" style={{marginLeft:180}} />,
  source : "https://s3-alpha-sig.figma.com/img/beb2/6272/fe2e5236dac7c103162b8799d02356be?Expires=1674432000&Signature=BGicXHImNNhX1Hv0V9VOM3ZdLQot7gy-72KNOR0mRZE-o4Jgarb9nGrlNzII9R7ekx0hggzQ7mtSLRjEq4Ho9LDCfbyiVmdRy3GCH52sVaxqKvbvfLLd5kLw8qmQ9K5S573Oxf~Vy9PK6U6MwOqaMEfuCb9M44rJCRI-eXyyR24nv2v6hbnPo5IG7gIUKFrGne6fMtlOsug8xPftMPcp49okaY1bbmW3VI8qH-mpP2WVfv3yi0JgFd6y75O2uhqTQpDDd22MjZFlutbYvGwA-aeoYCgeDR3CTMSy8xsodHEAjvOX0557NIHfnX-8QNeWhxRKU5Nz9RBClDo0p-OeJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  ,backgroudColor:"transparent",
}