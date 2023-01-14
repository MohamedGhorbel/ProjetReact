import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import {InputText}  from './InputText'
const InputTextMeta: ComponentMeta<typeof InputText> = {
    title: 'InputText',
    component: InputText,
    argTypes:{

    },
    args: {

    }
}
export default InputTextMeta;

type InputTextStory = ComponentStory<typeof InputText>
export const Basic : InputTextStory = (args) => <InputText {...args} />