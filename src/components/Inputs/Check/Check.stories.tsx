import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
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
            label="Check"
            name="value"
            value={value}
            //@ts-ignore
            onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        />
    )
}

export const Check = Template.bind({})