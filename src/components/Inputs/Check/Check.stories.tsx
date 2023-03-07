import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { onChangeEventType } from 'src/types';
import { CheckInput } from './Check';

const meta: ComponentMeta<typeof CheckInput> = {
    component: CheckInput,
};
export default meta;

const Template: ComponentStory<typeof CheckInput> = args => {
    const [value, setValue] = useState(false)

    return (
        <CheckInput
            {...args}
            name="value"
            value={value}
            onChange={(event: onChangeEventType) => setValue(event.target.value)}
        />
    )
}

export const CheckStandard = Template.bind({})
CheckStandard.args = {
    variant: 'standard',
    label: 'Standard check'
}