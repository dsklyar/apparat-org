import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Story } from "./Story";

export default {
  title: "Components/Story",
  component: Story,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Story>;

const Template: ComponentStory<typeof Story> = (args) => {
  const renderVia = () => {
    return <img alt="img"/>;
  };
  return <Story {...args} renderVia={renderVia} />;
};

export const Primary = Template.bind({});
Primary.args = {};
