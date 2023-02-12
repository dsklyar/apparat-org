import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Tabs from "./Tabs";

export default {
  title: "Components/Tab",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args}/>

export const Primary = Template.bind({});
Primary.args = {
  tabs:[
    {
      label: 'home',
      key: 'home',
    },
    {
      label: 'work',
      key: 'work',
    },
    {
      label: 'about',
      key: 'about',
    }
  ],
  onChange: action('click')
};
