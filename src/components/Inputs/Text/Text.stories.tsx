import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TextInput } from './Text';

const meta: ComponentMeta<typeof TextInput> = {
    component: TextInput,
};
export default meta;

export const Standard: ComponentStoryObj<typeof TextInput> = {
    args: {
        variant: 'standard',
        label: 'Standard Input',
        placeholder: 'Type'
    },
};

export const Outlined: ComponentStoryObj<typeof TextInput> = {
    args: {
        variant: 'outlined',
        label: 'OutlinedInput',
        placeholder: 'Type'
    },
};

export const Error: ComponentStoryObj<typeof TextInput> = {
    args: {
        disabled: false,
        label: 'Input with error',
        touched: true,
        error: 'Field required'
    },
};