import React, { forwardRef, Ref } from "react";
import { Tabs, Text, Weight } from "apparat-core";
import tw, { styled } from "twin.macro";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.header<{ $width: number }>`
  ${tw`w-full flex justify-between pt-8 pl-8 pr-8 pb-2 bg-white lg:fixed`}
  width: ${({ $width }) => `${$width || 0}px`}
`;

const NameLink = styled(Link)``;

interface IHeaderProps {
  width: number;
}

const Header = forwardRef<HTMLElement, IHeaderProps>(
  ({ width }, ref) => {
    const router = useRouter();

    const onTabChange = (tab: { key: string }): void => {
      router.push(tab.key);
    };

    return (
      <Container $width={width} ref={ref}>
        <NameLink
          href="https://www.linkedin.com/in/danielsklyar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Text uppercase weight={Weight.Bold}>
            Daniel Sklyar
          </Text>
        </NameLink>
        <Tabs
          selectedKey={router.route}
          onChange={onTabChange}
          tabs={[
            {
              label: "home",
              key: "/",
            },
            {
              label: "resume",
              key: "/resume",
            },
            {
              label: "photos",
              key: "/photos",
            },
          ]}
        />
      </Container>
    );
  }
);

Header.displayName = "Header";

export default Header;
