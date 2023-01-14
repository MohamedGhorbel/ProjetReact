import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { IITCard } from "@my-workspace/my-ui";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
          <IITCard
  backgroudColor="#E3EDFB"
  source="https://s3-alpha-sig.figma.com/img/76f3/b32a/220887e939fdfdab3e90bd8f1b3db153?Expires=1672617600&Signature=aEY2clntlgERFDTQEDdm1d4ow2HRMVMoT9sDaO77c2Z3fVTSDqS5KfhvFukybxz4dBO7XGG8V3A17QN~BUdFLDuimPCUyikorz~4eCqrkDHs9ldw19GgPPwNV0zMqlu87NFgbZrEgIVb6yUNTOOsI-aMrLwZi0e0BNddnUoiphpNCAxThr0bVRiMoB4ZIzXFXiIuz05Hfjst4aYwwUc~U6n-3Vq2gtthtBGcL~0vsE6UIAmd5eS~xOaLGVJ-Nk7bEBDmNwc7APNqvuBiwqjRjzLHjnnD0Vf8nxg-s6BGyKqhYiVG1xD7ImRGjSPA5G3yLsvPxwRTuwSDFHoEsDBu2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  title={<Text style={{backgroundColor: 'white', fontFamily: 'Rubik', fontSize: 20, fontWeight: 'bold', marginTop: 10, textAlign: 'center'}}>Help the Dogs{' '}</Text>}
/>
<Button title="GO BACK" color={"red"} onPress={() => {
                navigation.goBack()
            }} />
            <Text>HomeScreen</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})