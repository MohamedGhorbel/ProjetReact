import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import  {Title}  from "./Title";
import { Text } from "react-native";

const TitleMeta: ComponentMeta<typeof Title> = {
  title: "Title",
  component: Title,
  args: {
   
   title:"match your style"
},
};

export default TitleMeta;

type TitleStory = ComponentStory<typeof Title>;

export const Basic: TitleStory = (args) => <Title{...args}  />;
export const Title2: TitleStory = (args) => <Title{...args}   />;
export const Title3: TitleStory = (args) => <Title{...args}   />;
Title2.args={
 
 
    title:"match your style"
  
 
}
Title3.args={
 
    title: "match your style"
  
  
 
}