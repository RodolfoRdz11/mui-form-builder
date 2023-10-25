import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SelectInput, SelectInputProps } from '.';

const meta: Meta<typeof SelectInput> = {
    component: SelectInput,
    render: (args: SelectInputProps) => {
        const [value, setValue] = useState('')

        return (
            <SelectInput
                {...args}
                name="value"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                options={[
                    { label: 'Option 1', value: '1' },
                    { label: 'Option 2', value: '2' },
                ]}
            />
        )
    }
};
export default meta;

type Story = StoryObj<any>;

export const Standard: Story = {
    name: 'Standard',
    args: {
        variant: 'standard',
        label: 'Outlined Input',
    }
}