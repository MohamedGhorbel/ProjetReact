import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign , Ionicons ,FontAwesome5, Entypo,Fontisto,SimpleLineIcons} from '@expo/vector-icons'; 
import { IITCard,Menu,Images,Title ,Navbar,Search} from "@my-workspace/my-ui";
import  {MyButton}  from "@my-workspace/my-ui";

const HomeShoping3 = ({ navigation }) => {
    const onPress=()=>{
        console.log("press")
        }
    const [listShopping] = useState([{
        backgroudColor:"transparent",
        source: "https://s3-alpha-sig.figma.com/img/d116/b77f/94c47cb34085ecba93d7086e56c30f3f?Expires=1674432000&Signature=IQkPlu~wfNX6FNVC9EEbolz1OKJB~kThoZSEnDS7tTdiu5-8vBXBP-58Mu20z8AliHhgTdI0XhTIyKHEbEGW~oUuafZ423qrDNNhZc3mZji14MT1f07JjRuM9UKN3eZVAU6El96GjkB1Yei1NiVuocl4u4wiJydG0tCRH0QJpbiekkmHw4rRTTK5csmz3vDZb4dM3OL6GlxjXGfsqUtvN7yVFimsoz4bgpanb6CuEQeIXbNa8g5C~Xrc0dWadB3oYlTAfcauOL7386f75M0ZXNU-zFmDKQ3OOeiIycMhpqaXeqwHwWTwFIKNt2euQRMaOu4kRKWEEF9BFhxEKI-Gew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title:"Polkadot Red Dress" ,
        description:  "Rs.  1,499.00",
        icon:<AntDesign color="red" name="hearto" size={20} style={{paddingLeft:150 , paddingTop:30}} />
    
      
    }, {
        backgroudColor:"transparent",
        source: "https://s3-alpha-sig.figma.com/img/d116/b77f/94c47cb34085ecba93d7086e56c30f3f?Expires=1674432000&Signature=IQkPlu~wfNX6FNVC9EEbolz1OKJB~kThoZSEnDS7tTdiu5-8vBXBP-58Mu20z8AliHhgTdI0XhTIyKHEbEGW~oUuafZ423qrDNNhZc3mZji14MT1f07JjRuM9UKN3eZVAU6El96GjkB1Yei1NiVuocl4u4wiJydG0tCRH0QJpbiekkmHw4rRTTK5csmz3vDZb4dM3OL6GlxjXGfsqUtvN7yVFimsoz4bgpanb6CuEQeIXbNa8g5C~Xrc0dWadB3oYlTAfcauOL7386f75M0ZXNU-zFmDKQ3OOeiIycMhpqaXeqwHwWTwFIKNt2euQRMaOu4kRKWEEF9BFhxEKI-Gew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title:"Striped Pink Dress" ,
        description:  "Rs.  1,299.00",
        icon:<AntDesign color="red" name="hearto" size={20} style={{paddingLeft:150 , paddingTop:30}} />

    }, {
        backgroudColor:"transparent",
        source: "https://s3-alpha-sig.figma.com/img/d116/b77f/94c47cb34085ecba93d7086e56c30f3f?Expires=1674432000&Signature=IQkPlu~wfNX6FNVC9EEbolz1OKJB~kThoZSEnDS7tTdiu5-8vBXBP-58Mu20z8AliHhgTdI0XhTIyKHEbEGW~oUuafZ423qrDNNhZc3mZji14MT1f07JjRuM9UKN3eZVAU6El96GjkB1Yei1NiVuocl4u4wiJydG0tCRH0QJpbiekkmHw4rRTTK5csmz3vDZb4dM3OL6GlxjXGfsqUtvN7yVFimsoz4bgpanb6CuEQeIXbNa8g5C~Xrc0dWadB3oYlTAfcauOL7386f75M0ZXNU-zFmDKQ3OOeiIycMhpqaXeqwHwWTwFIKNt2euQRMaOu4kRKWEEF9BFhxEKI-Gew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title:"Polkadot Red Dress" ,
        description:  "Rs.  1,499.00",
        icon:<AntDesign color="red" name="hearto" size={20} style={{paddingLeft:150 , paddingTop:30}} />
    }, {
        backgroudColor:"transparent",
        source: "https://s3-alpha-sig.figma.com/img/d116/b77f/94c47cb34085ecba93d7086e56c30f3f?Expires=1674432000&Signature=IQkPlu~wfNX6FNVC9EEbolz1OKJB~kThoZSEnDS7tTdiu5-8vBXBP-58Mu20z8AliHhgTdI0XhTIyKHEbEGW~oUuafZ423qrDNNhZc3mZji14MT1f07JjRuM9UKN3eZVAU6El96GjkB1Yei1NiVuocl4u4wiJydG0tCRH0QJpbiekkmHw4rRTTK5csmz3vDZb4dM3OL6GlxjXGfsqUtvN7yVFimsoz4bgpanb6CuEQeIXbNa8g5C~Xrc0dWadB3oYlTAfcauOL7386f75M0ZXNU-zFmDKQ3OOeiIycMhpqaXeqwHwWTwFIKNt2euQRMaOu4kRKWEEF9BFhxEKI-Gew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Striped Pink Dress",
        description:  "Rs.  1,299.00",
        icon:<AntDesign color="red" name="hearto" size={20} style={{paddingLeft:150 , paddingTop:30}} />
    }])
    return (

        <View>
      
    <Button title="GO BACK" onPress={() => {
                navigation.goBack()
            }} />
     
        <Menu
        icon={<Fontisto name="nav-icon-grid" size={20} color="#F1948A" />} 
        image={<Text style={{fontSize: 24, fontWeight: 'bold'}}>{' '}</Text>}
        text={<Images borderRaduis={50} image="https://s3-alpha-sig.figma.com/img/516f/e00b/4d3d3381b40bd5112cecfac12caaa17f?Expires=1674432000&Signature=Ah0bL6V8rn~gJl72zfCqx3OnKhiQxSBS5fuz469WAgn1gmGDo57LW3PNneIJ55kmLtDKGwqmbD4Y~yGivLuHSBx3YGm~77sMGLAcbHr0Z7VsCE5CsIbyBgsxAu~pNThaVvAzYb981B~q0E25n-~MuCaCmBmne7v8bGRsmvkWg~61C5i1k4F1YOsbKEYsgR2hxNon6kyc2kDHcjO8I3xlwQ9sRL3QwJ3d5MMjsgsu8BPaxWt-F7yU7QSMq3ZlZsfekmDjPJBvklORFYDTwIRFaTAN1TKyn6z4YIlaefj5UUpwDGF75RaiQvVR0loCI-FjHgLr-PZb~HR2cJyxg7O-nA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" size1={50} size2={50}/>}
      />
      <Title title="match your style" />
        <Search
  bgColor="#F8F9F9"
  borderColor="#F8F9F9"
  borderRadius={15}
  fontFamily="Inter"
  size1={300}
  size2={40}
  size3={40}
  size5={4}
  sizeIcon={20}
  text="Search "
/>
          {listShopping .map((food, index) => {
            return (
                index % 2 === 0 ?
                    <View style={{  flexDirection: 'row' , justifyContent:'space-around' }}>
                       
                       <IITCard
                            backgroudColor={listShopping[index].backgroudColor}
                            description={<Text style={{color: '#757575', fontWeight: 'bold', textAlign: 'center'}}>{listShopping[index].description}{' '}</Text>}
                            icon={listShopping[index].icon}
                            source={listShopping[index].source}
                            title={<Text style={{fontFamily: 'Inter', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{listShopping[index].title}{' '}</Text>}
                        />
                                        {
                            listShopping [index + 1] ?
                            <IITCard
                            backgroudColor={listShopping[index+1].backgroudColor}
                            description={<Text style={{color: '#757575', fontWeight: 'bold', textAlign: 'center'}}>{listShopping[index+1].description}{' '}</Text>}
                            icon={listShopping[index+1].icon}
                            source={listShopping[index+1].source}
                            title={<Text style={{fontFamily: 'Inter', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{listShopping[index+1].title}{' '}</Text>}
                        /> : null
                        }

                    </View> : null

            )
        })
    } 
<Navbar
  icon={<Entypo name="home" size={24} color="#CCD1D1" />}
  icon1={<SimpleLineIcons name="menu" size={24} color="#F1948A" />}
  icon2={<Entypo name="shopping-cart" size={24} color="#CCD1D1"/>}
  icon3={<FontAwesome5 name="user-alt" size={24} color="#CCD1D1"/>}
/>
        </View>
    )
}


export default HomeShoping3

const styles = StyleSheet.create({
   
})