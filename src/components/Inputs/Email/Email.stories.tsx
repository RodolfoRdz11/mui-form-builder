import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { EmailInput } from './Email';

const meta: ComponentMeta<typeof EmailInput> = {
    component: EmailInput,
};
export default meta;

const Template: ComponentStory<typeof EmailInput> = args => {
    const [value, setValue] = useState('')

    return (
        <EmailInput
            {...args}
            label="Email"
            name="value"
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
        />
    )
}

export const Email = Template.bind({})