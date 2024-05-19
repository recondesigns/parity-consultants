import { Meta, StoryObj } from '@storybook/react'
import Hero from './Hero'

const meta: Meta<typeof Hero> ={
    title: 'Components/Shared/Hero',
    component: Hero,
    decorators: [
        Story => {
            document.body.classList.add('no-spacing')
            return (
                <div style={{ padding: '0px', margin: '0px', border: '2px solid blue' }}>
                    <Story />
                </div>
            )
        }
    ]
}

export const DefaultHero: StoryObj<typeof Hero> = {
    render: args => <Hero {...args} />,
    args: {
        title: 'Your old solution',
        subtitle: 'Parity now offers Scale Computing',
        bgColor: 'hotpink'
    }
}

export default meta