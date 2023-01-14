import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { SimpleLineIcons,Fontisto } from '@expo/vector-icons';
import {Text} from "react-native";
import {Menu}  from './Menu';
import { Image1 } from '../Images/Images.stories';
import { MyButton } from "../MyButton/MyButton";

const MenuMeta: ComponentMeta<typeof Menu> = {
    title: 'Menu',
    component: Menu,
    args: {
        icon:<SimpleLineIcons name="menu" size={24} color="black" />,
        text:<Text style={{fontWeight:"bold", fontSize:24}}> bagzz</Text>,
        source:<Image1 source=''='https://img.freepik.com/photos-gratuite/portrait-homme-blanc-isole_53876-40306.jpg?w=2000'size1={40} size2={40} borderRaduis={40}/>
    }
}
const onPress=()=>{
    console.log("press")
    }
export default MenuMeta;

type MenuStory = ComponentStory<typeof Menu>
export const Basic : MenuStory = (args) => <Menu {...args} />
export const Menu1 : MenuStory = (args) => <Menu {...args} />
export const Menu2 : MenuStory = (args) => <Menu {...args} />
Menu1.args={
    icon: <MyButton   onPress={onPress} backgroundColor="white" marginLeft={0} paddingLeft={0} paddingTop={0} icon={<Fontisto name="nav-icon-grid" size={20} color="#F1948A" />}/>,
        text:<Image1 source="https://s3-alpha-sig.figma.com/img/516f/e00b/4d3d3381b40bd5112cecfac12caaa17f?Expires=1674432000&Signature=Ah0bL6V8rn~gJl72zfCqx3OnKhiQxSBS5fuz469WAgn1gmGDo57LW3PNneIJ55kmLtDKGwqmbD4Y~yGivLuHSBx3YGm~77sMGLAcbHr0Z7VsCE5CsIbyBgsxAu~pNThaVvAzYb981B~q0E25n-~MuCaCmBmne7v8bGRsmvkWg~61C5i1k4F1YOsbKEYsgR2hxNon6kyc2kDHcjO8I3xlwQ9sRL3QwJ3d5MMjsgsu8BPaxWt-F7yU7QSMq3ZlZsfekmDjPJBvklORFYDTwIRFaTAN1TKyn6z4YIlaefj5UUpwDGF75RaiQvVR0loCI-FjHgLr-PZb~HR2cJyxg7O-nA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"size1={50} size2={50} borderRaduis={50}/>,
      source :<Text style={{fontWeight:"bold", fontSize:24}}> </Text>
  }

  Menu2.args={
    icon: <Text style={{fontWeight:"700", fontSize:30 , fontFamily:"General Sans"}}> Pet .</Text>,
    text:<Text style={{fontWeight:"bold", fontSize:24}}> </Text>,
    source:<Image1 source="https://macstickers.com/wp-content/uploads/2018/07/Letter-A.png"size1={50} size2={50} borderRaduis={50}/> 
    
  }