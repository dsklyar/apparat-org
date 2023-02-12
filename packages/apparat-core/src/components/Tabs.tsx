import React, { useState, useRef } from "react";
import tw, { styled } from "twin.macro";
import { useHover } from "usehooks-ts";
import { Text } from "@components";
import { ArrowIcon } from "@assets";

const Icon = styled(ArrowIcon)<{ $selected: boolean }>`
  ${tw`h-4 w-4 mt-1`}
  ${({ $selected }) => ($selected ? tw`visible` : tw`invisible`)}
`;

const Container = styled.div`
  ${tw`flex flex-row`}
  width: max-content;
`;

const Tab = styled.div`
  ${tw`cursor-pointer flex flex-col items-center`}

  &:hover ${Icon} {
    ${tw`visible!`}
  }

  &:not(:first-child):not(:last-child) {
    ${tw`ml-2 mr-2`}
  }
`;

interface ITab {
  label: string;
  key: string;
}

interface ITabsProps {
  tabs: ITab[];
  onChange?: (tab: ITab) => void;
  selectedKey?: string;
}

export const Tabs = ({ tabs, selectedKey, onChange }: ITabsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(containerRef);
  const [selected, setSelected] = useState<string | null>(selectedKey || null);

  const handleClick = (tab: ITab) => {
    setSelected(tab.key);
    onChange && onChange(tab);
  };

  return (
    <Container ref={containerRef}>
      {tabs.map((tab) => {
        return (
          <React.Fragment key={tab.key}>
            <Tab onClick={() => handleClick(tab)}>
              <Text uppercase>{tab.label}</Text>
              <Icon $selected={selected === tab.key && !isHovered} />
            </Tab>
          </React.Fragment>
        );
      })}
    </Container>
  );
};

export default Tabs;
