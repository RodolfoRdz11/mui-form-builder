import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { TextInput, TextInputProps } from '.';

const meta: Meta<typeof TextInput> = {
    component: TextInput,
    render: (args: TextInputProps) => {
        const [value, setValue] = useState('')

        return (
            <TextInput
                {...args}
                name="value"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
        )
    }
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    name: 'Standard',
    args: {
        variant: 'standard',
        label: 'Outlined Input',
        placeholder: 'Text'
    }
}

export const Error: Story = {
    name: 'Error',
    args: {
        disabled: false,
        label: 'Input with error',
        touched: true,
        error: 'Field required'
    }
}