import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { DateInput } from './Date';
import { onChangeEventType } from 'src/types';

const meta: ComponentMeta<typeof DateInput> = {
    component: DateInput,
};
export default meta;

const Template: ComponentStory<typeof DateInput> = args => {
    const [value, setValue] = useState('')

    return (
        <DateInput
            {...args}
            label="Date"
            name="value"
            value={value}
            onChange={(event) => {
                setValue(event.target.value)
            }}
        />
    )
}

export const Date = Template.bind({})