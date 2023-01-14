import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import {Images }from "./Images";
import { AntDesign , Ionicons , Entypo} from '@expo/vector-icons'; 


const ImagesMeta: ComponentMeta<typeof Images> = {
  title: "Images",
  component: Images,
  args: {
  size1:80,
  size2:80,
  borderRaduis:80,
  source : "https://s3-alpha-sig.figma.com/img/516f/e00b/4d3d3381b40bd5112cecfac12caaa17f?Expires=1674432000&Signature=Ah0bL6V8rn~gJl72zfCqx3OnKhiQxSBS5fuz469WAgn1gmGDo57LW3PNneIJ55kmLtDKGwqmbD4Y~yGivLuHSBx3YGm~77sMGLAcbHr0Z7VsCE5CsIbyBgsxAu~pNThaVvAzYb981B~q0E25n-~MuCaCmBmne7v8bGRsmvkWg~61C5i1k4F1YOsbKEYsgR2hxNon6kyc2kDHcjO8I3xlwQ9sRL3QwJ3d5MMjsgsu8BPaxWt-F7yU7QSMq3ZlZsfekmDjPJBvklORFYDTwIRFaTAN1TKyn6z4YIlaefj5UUpwDGF75RaiQvVR0loCI-FjHgLr-PZb~HR2cJyxg7O-nA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
},
};

export default ImagesMeta;

type ImagesStory = ComponentStory<typeof Images>;

export const Basic: ImagesStory = (args) => <Images{...args}  />;
export const Image1: ImagesStory = (args) => <Images{...args}  />;
export const Image2: ImagesStory = (args) => <Images{...args}  />;

Image1.args={
    size1:50,
    size2:50,
    borderRaduis:50,
    source : "https://macstickers.com/wp-content/uploads/2018/07/Letter-A.png"
  }
  Image2.args={
    size1:70,
    size2:70,
    borderRaduis:70,
    source : "https://s3-alpha-sig.figma.com/img/ab0e/1e90/276243e028bdc420ddf417a947394241?Expires=1674432000&Signature=mq0BA-k4iynFuNph9AAF9XYu9L6ejujkqp-wScoRl1BJPWpSbgJGq-aPJ50a1yvZyde499BGtYAKzP6nMsC2qlPlEWmvhpuJwXU6sjMmQ29hyPaAeF5NIgnl31PO1yHtGCITqBI88-NvfHSJSFrVUX2Jvmdl~u4ts64gRJdR06GHKooAwR~bDrWWm6acxHZHqJiBuK7xeLlEKnCYJ4XH3b7~yI93geMeAF1OUarKPZEWkxu3YI~GZzYUXAwydi-5b~UCuUAHEaGMJpg1QISzIBAmsIUH7CYREIzYDmdUPFAoLcW5jikWk2KxeBXysLXXjFPE8oxbBxO2K4lIFu5eeQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
  }
