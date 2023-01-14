import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 
import { IITCard } from "@my-workspace/my-ui";
const HomeShoping2 = ({ navigation }) => {
    const [listShopping] = useState([{
        backgroudColor:"#E3EDFB",
        source: "https://www.figma.com/file/yeok5btXQmVKR2LUtpIygX/image/76f3b32a220887e939fdfdab3e90bd8f1b3db153?fuid=1194718966728764599",
        title: "Help the Dogs",
       
    }, {
        backgroudColor:"#F4E8F9",
        source: 'https://www.figma.com/file/yeok5btXQmVKR2LUtpIygX/image/33414ae71a7f118b6717b392727ae064f9035a2a?fuid=1194718966728764599',
        title: "Help the Cows",
      

    }, {
        backgroudColor:"#F6EEC4",
        source: "https://s3-alpha-sig.figma.com/img/87f4/e1a3/1a8d58ca25c8e1ab74abb0470e19f623?Expires=1674432000&Signature=OlVkJZg5nBoBonnMzEhQ~xo-WMa4dCmyWmlxTVN~iMt~x37WfbXJfSvM5Cn6AFFoVK2poUNTgGS88xlIJWRSpOEJkEWLvJzuu1Mb4H7Kru01herSruHSuPgzof79SwUvU53E40WGBqJfcLSOw~WQH-ucc8NTcb8QhgyyiOOmbCPH6A1IidpzRNWc9YoMV21SodK4yIV1nHZ~AX9pPG62gofIA7qXIS8AbPSD-~YLqCl2A3X~1V7lLFcTwvunpBspG4T1BIITtYRCZlU9yKEh-DegEGXljI~qVfmVp6PSL-1IPLxYcKNfW7iLMXR35gJdhEC8~7XAv0N2CGusP4zqSA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Help the Ponies",
     
    }, {
        backgroudColor:"#FEE0E0",
        source: "https://s3-alpha-sig.figma.com/img/c786/2f19/4ef256d39d0f6fa43f65bbd4497166ee?Expires=1674432000&Signature=UVT1-~swNNzrlnb-U8wDIMBM0I9gDwXN0kABsgf8PajPHKCo1GMZpAmNLclhlr~XOjLnXB5QXUxFoshfBbgT7R9-QoHowNmoMeVKtim93C3F1FfO3x4DCmS-Lt0U561lgUcebPQmVXK9Gpu1H2cb5pBdTwVC~Qs~IITWC0GHsDJ7tgr9AaTO4GGaOuJkiSN-dD2NH~y7kB-yPcjsKy-jFsUWjhLHB5jwuATkMKzUf7HQShTc~RaUki8vF2h3huEP0C8Ahy-3OcaUfs6IS6Y3weOzGCN2vpq5sJ3xtY1hXEf~Oq2l77DzKNgm~n0RrbFRDBu8Cxikp~UCVwG2KqPG3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Help the Cat",
   
    }])
    return (

        <View>
    
    <Button title="GO BACK" onPress={() => {
                navigation.goBack()
            }} />

       {
        listShopping .map((food, index) => {
            return (
                index % 2 === 0 ?
                    <View style={{ flexDirection: 'row' , justifyContent:'space-around'}}>
                       

                       <IITCard
  backgroudColor={listShopping[index].backgroudColor}
  source={listShopping[index].source}
  title={<Text style={{backgroundColor: 'white', fontFamily: 'Rubik', fontSize: 20, fontWeight: 'bold', marginTop: 10, textAlign: 'center'}}>{listShopping[index].title}</Text>}
/>
                        {
                            listShopping [index + 1] ?
                            <IITCard
                            backgroudColor={listShopping[index +1].backgroudColor}
                            source={listShopping[index+1].source}
                            title={<Text style={{backgroundColor: 'white', fontFamily: 'Rubik', fontSize: 20, fontWeight: 'bold', marginTop: 10, textAlign: 'center'}}>{listShopping[index+1].title}</Text>}
                          /> : null
                        }

                    </View> : null

            )
        })
    }
        </View>
    )
}

export default HomeShoping2

const styles = StyleSheet.create({
   
})