import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import  {MyButton}  from "./MyButton";
import { Fontisto,FontAwesome5 } from '@expo/vector-icons';
const MyButtonMeta: ComponentMeta<typeof MyButton> = {
  title: "Button",
  component: MyButton,
  argTypes: {
    onPress: { action: "pressed the button" },
  },
  args: {
    icon:<FontAwesome5 name="plus" size={20} color="white"/>,
    backgroundColor:"black",
    paddingLeft:10,
    paddingTop:8,
  
  },
};

export default MyButtonMeta;

type MyButtonStory = ComponentStory<typeof MyButton>;

export const Button1: MyButtonStory = (args) => <MyButton {...args} />;
export const Button2: MyButtonStory = (args) => <MyButton {...args} />;
Button2.args={
  icon:<Fontisto name="nav-icon-grid" size={20} color="#F1948A" />,

  backgroundColor:"white"
}