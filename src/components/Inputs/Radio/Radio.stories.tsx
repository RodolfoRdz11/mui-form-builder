import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioInput, RadioInputProps } from '.';

const meta: Meta<typeof RadioInput> = {
    component: RadioInput,
    render: (args: RadioInputProps) => {
        const [value, setValue] = useState('')

        return (
            <RadioInput
                {...args}
                name="value"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={['Option 1', 'Option 2', 'Option 3']}
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