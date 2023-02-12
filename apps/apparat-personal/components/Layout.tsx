import tw, { styled } from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-1 w-screen h-screen flex-col lg:flex-row`}
  min-width: 640px;
`;

const SidePanel = styled.section`
  flex: 1 1;
`;

const ContentPanel = styled.section<{ $collapsed: boolean }>`
  flex: ${({ $collapsed }) => ($collapsed ? "7 7" : "2 2")};
  ${tw`flex overflow-auto w-full h-full`}
`;

interface ILayoutProps {
  sideElement?: JSX.Element;
  contentElement?: JSX.Element;
  collapsed?: boolean;
}

const Layout = ({
  sideElement,
  contentElement,
  collapsed = false,
}: ILayoutProps) => {
  return (
    <Container>
      <SidePanel>{sideElement}</SidePanel>
      <ContentPanel $collapsed={collapsed}>{contentElement}</ContentPanel>
    </Container>
  );
};

export default Layout;
