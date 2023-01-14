import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import  {Navbar}  from "./Navbar";
import {  Text} from "react-native"
import { FontAwesome,FontAwesome5 ,SimpleLineIcons,Entypo,AntDesign,Feather} from '@expo/vector-icons'; 
import { MyButton } from "../MyButton/MyButton";


const onPress=()=>{
console.log("press")
}
const NavbarMeta: ComponentMeta<typeof Navbar> = {
  title: "Navbar",
  component: Navbar,
  args: {
    icon:<FontAwesome name="home" size={24} color="black" />,
    icon1 : <FontAwesome name="search" size={24} color="black" />,
    icon2 : <FontAwesome name="heart" size={24} color="black" />,
    icon3 : <FontAwesome5 name="shopping-basket" size={24} color="black" />,

},
};

export default NavbarMeta;

type NavbarStory = ComponentStory<typeof Navbar>;

export const Basic: NavbarStory = (args) => <Navbar{...args}  />;
export const Nav2: NavbarStory = (args) => <Navbar{...args}   />;
export const Nav3: NavbarStory = (args) => <Navbar{...args}   />;
Nav2.args={
 
 
  
  icon:<Entypo name="home" size={24} color="#CCD1D1" />,
  icon1 : <SimpleLineIcons name="menu" size={24} color="#F1948A" />,
  icon2 : <Entypo name="shopping-cart" size={24} color="#CCD1D1" />,
  icon3 : <FontAwesome5 name="user-alt" size={24} color="#CCD1D1" />,
 
}
Nav3.args={
 
 
  icon:<AntDesign name="search1" size={24} color="#CCD1D1" />,
  icon1 :<Text style={{fontWeight:"bold" ,fontSize:20 ,textAlign:"center",textDecorationLine:"underline"}}>Explore </Text> ,
  icon2: <MyButton onPress={onPress} paddingLeft={10} marginLeft={0} paddingTop={8}icon={<FontAwesome5 name="plus" size={20} color="white"/> } backgroundColor="black"/> ,
  icon3: <Feather name="bell" size={24} color="#CCD1D1" />,
  icon4 : <AntDesign name="user" size={24} color="#CCD1D1" />
  
  
 
}