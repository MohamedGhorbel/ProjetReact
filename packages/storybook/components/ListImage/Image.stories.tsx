import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { IITImage } from "./Image";

const IITCardMeta: ComponentMeta<typeof IITImage> = {
  title: "LISTImage",
  component: IITImage,
  args: {
  

  },
};

export default IITCardMeta;

type IITCardStory = ComponentStory<typeof IITImage>;

export const Basic: IITCardStory = (args) => <IITImage{...args} />;


