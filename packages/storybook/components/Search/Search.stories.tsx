import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import {Search} from "./Search";
import { AntDesign , Ionicons , Entypo,FontAwesome} from '@expo/vector-icons'; 
import {  StyleSheet,View ,Text} from "react-native"
const SearchMeta: ComponentMeta<typeof Search> = {
  title: "Search",
  component: Search,
  args: {
    text:"Search ",
    size1:300,
    size2:40,
    size3:40,
    sizeIcon:20,
    bgColor:"#F8F9F9",
    borderColor:"#F8F9F9",
    borderRadius:15,
    fontFamily:"Inter",
    size5:4
  },
};

export default SearchMeta;

type SearchStory = ComponentStory<typeof Search>;

export const Basic: SearchStory = (args) => <Search {...args} />;


export const Search1: SearchStory = (args) => <Search {...args} />;

 Search1.args={
   
  text:"what are you looking for ? ",
  size1:335,
  size2:40,
  size3:40,
  sizeIcon:20,
  bgColor:"#F0F0F0",
  borderColor:"#F2F4F4",
  borderRadius:100,
  fontFamily:"Rubik",
   size5:4
 }