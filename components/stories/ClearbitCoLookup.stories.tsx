import React from "react";
import { Meta, Story } from "@storybook/react";

import { ClearbitCoLookup } from "../ClearbitCoLookup";

export default {
  title: "ClearbitCoLookup",
  component: ClearbitCoLookup,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ClearbitCoLookup {...args} />;

export const Default = Template.bind({});

Default.args = {};
