import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 
import { IITCard } from "@my-workspace/my-ui";
const HomeShoping = ({ navigation }) => {
    const [listShopping] = useState([{
        backgroudColor:"transparent",
        source: "https://s3-alpha-sig.figma.com/img/beb2/6272/fe2e5236dac7c103162b8799d02356be?Expires=1674432000&Signature=BGicXHImNNhX1Hv0V9VOM3ZdLQot7gy-72KNOR0mRZE-o4Jgarb9nGrlNzII9R7ekx0hggzQ7mtSLRjEq4Ho9LDCfbyiVmdRy3GCH52sVaxqKvbvfLLd5kLw8qmQ9K5S573Oxf~Vy9PK6U6MwOqaMEfuCb9M44rJCRI-eXyyR24nv2v6hbnPo5IG7gIUKFrGne6fMtlOsug8xPftMPcp49okaY1bbmW3VI8qH-mpP2WVfv3yi0JgFd6y75O2uhqTQpDDd22MjZFlutbYvGwA-aeoYCgeDR3CTMSy8xsodHEAjvOX0557NIHfnX-8QNeWhxRKU5Nz9RBClDo0p-OeJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Artsy",
        description: "Shop now",
        icon:<AntDesign name="hearto" size={24} color="grey" style={{marginLeft:180}} />,
    }, {
        backgroudColor:"transparent",
        source: 'https://s3-alpha-sig.figma.com/img/244e/d2f3/2dd2f124d76dc63ccd587db588785f2f?Expires=1674432000&Signature=D8PUouL86bQ1EbqqwyHXXy-cyKd~dmzo8fsSNNuL~a4sNlH~QuB796VMVf0awrItCr6iGzK~VRHH-q6Ec68IySc2uOFXL4ck1oO4m9jRT48nQr4FIFj4BPe56kFGphTodbJim~t8ud5t2vI9lQw-O91M7OgyEZpBCuKg2fjctR~0X4fQpbLp6mgi-GdL5A31wzGzFLP2X6UG9jXHOa5Fst4ZiALR46dz3PokGRL5Db58OdXSnglDatVQCbK8-M181i7fcOaj1PXVC1YiwYHJT7G-KB5svRJLUJL825OSQds7jQ4FeRauZUbyN9NRWaX6MHsIB4MZK-EuaUSA7KMNWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
        title: "Berkely",
        description: "Shop now",
        icon:<AntDesign name="hearto" size={24} color="grey" style={{marginLeft:180}} />

    }, {
        backgroudColor:"transparent",
        source: "https://s3-alpha-sig.figma.com/img/d6cc/f000/c4f573b73b916908f360d5ef71dc7b77?Expires=1674432000&Signature=RA47UKwb3VqDDFpza7lqWHElcKsXAIm8nT2~qUvxx8N~GXQUE5ZBASvMy48wv7D3u7-3WBcf2BwoUgNt5hNB34XK6DY6BYkJa8TwKaY1C5vXnxRA3IYCRhKu1E-KWBpxx3N8DesjFCtzHUu5C12DU7AaMARONLYwDFL9jWOVDngTEZ3TkG~e4qbdXhLc9Qw1ijMFrPBXezzWIPM6u4vJ-0Rgrv0cSODDHTdBkM-gfM00ZWD7tgAG2uW4fJmfUQ2cqzXyOZXUrWGHsMcbc3tOSP9XkODizzvNZXkVY0rFqV51h~mrecSlt30C58U1XuO~osWaczIhUjIfpZefK9pdig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Capucinus",
        description: "Shop now",
        icon:<AntDesign name="hearto" size={24} color="grey" style={{marginLeft:180}} />
    }, {
        backgroudColor:"transparent",
        source: "https://s3-alpha-sig.figma.com/img/4b9f/b72b/6c94781cde52c8738e5dcf16846506e4?Expires=1674432000&Signature=Hu3y0c6z1286nd166tVhw~ibf09VRTQZ8EeKC1d~5gTJqhwwtZSbWTi7NFLckaEosx7jzy~1Jz8lC8iIfXDSsvYLg8GVrZhUhJHq60O3nnp3y21u1U1F0njFPEQeYIR2~rQjl-mqWlFtHCvRcH1v-0gjZSnykCcwoDrVc7k6QGEFeVTBuhH-52nDGMwTwhZS1FZBBd3QXBD0L8Wi2yjzp5gSpHCQ0CWEZ485zOlc7SJh8baSPSMNmZnqzy8pyqVRTVZRBTttYwAaEvpBUTshfw4V2kebcwVD4a9NXaLosguYCUt3pSSNk-hSwV4MXCN5--Ilh197W8T4XQh08NbHMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        title: "Monogram",
        description: "Shop now",
        icon:<AntDesign name="hearto" size={24} color="grey" style={{marginLeft:180}} />
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
                    <View style={{  flexDirection: 'row' , justifyContent:'space-around' }}>
                       

                       <IITCard
                            backgroudColor={listShopping[index].backgroudColor}
                            description={<Text style={{fontFamily: 'Work Sans', textAlign: 'center', textDecorationLine: 'underline'}}>{listShopping[index].description}{' '}</Text>}
                            icon={listShopping[index].icon}
                            source= {listShopping[index].source}
                            title={<Text style={{fontFamily: 'Playfair Display', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{listShopping[index].title}{' '}</Text>}
/>
                        {
                            listShopping [index + 1] ?
                            <IITCard
                            backgroudColor={listShopping[index+1].backgroudColor}
                            description={<Text style={{fontFamily: 'Work Sans', textAlign: 'center', textDecorationLine: 'underline'}}>{listShopping[index + 1].description}{' '}</Text>}
                            icon={listShopping[index + 1].icon}
                            source= {listShopping[index +1].source}
                            title={<Text style={{fontFamily: 'Playfair Display', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>{listShopping[index + 1].title}{' '}</Text>}
                          /> : null
                        }

                    </View> : null

            )
        })
    }
        </View>
    )
}

export default HomeShoping

const styles = StyleSheet.create({
    
})