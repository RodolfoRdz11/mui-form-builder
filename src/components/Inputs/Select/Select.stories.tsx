import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { SelectInput } from "./Select"

const meta: ComponentMeta<typeof SelectInput> = {
    component: SelectInput,
};
export default meta;

const Template: ComponentStory<typeof SelectInput> = args => {
    const [value, setValue] = useState('')

    return (
        <SelectInput
            variant="outlined"
            label="Outlined select"
            name="value"
            value={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
            options={[
                { label: 'Option 1', value: '1' },
                { label: 'Option 2', value: '2' },
            ]}
        />
    )
}

export const Outlined = Template.bind({})
