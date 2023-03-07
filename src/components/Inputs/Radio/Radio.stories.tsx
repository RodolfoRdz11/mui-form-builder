import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { onChangeEventType } from 'src/types';
import { RadioInput } from './Radio'

const meta: ComponentMeta<typeof RadioInput> = {
    component: RadioInput,
};
export default meta;

const Template: ComponentStory<typeof RadioInput> = args => {
    const [value, setValue] = useState('')

    return (
        <RadioInput
            {...args}
            name="value"
            value={value}
            onChange={(e: onChangeEventType) => setValue(e.target.value)}
            options={['Option 1', 'Option 2', 'Option 3']}
        />
    )
}

export const RadioStandard = Template.bind({})
RadioStandard.args = {
    variant: 'standard',
    label: 'Standard radio',
    row: false
}