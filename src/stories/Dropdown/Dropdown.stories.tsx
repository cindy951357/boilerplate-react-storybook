import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "@/components/Dropdown/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    arrowAnimation: {
      control: {
        type: "select",
        options: ["rotate", "glow"],
      },
      description: "Animation effect for the arrow icon",
    },
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  arrowAnimation: "rotate",
};
