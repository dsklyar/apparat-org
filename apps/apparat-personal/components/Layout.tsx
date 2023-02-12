import tw, { styled } from "twin.macro";
import { useElementSize } from "usehooks-ts";
import { Header} from "../components";

const Container = styled.div`
  ${tw`flex flex-1 w-screen h-screen flex-col lg:flex-row`}
  height: 100dvh;
  width: 100dvw;
  min-width: 640px;
`;

const SidePanel = styled.section`
  flex: 1 1;
  min-height: 200px;
`;

const ContentPanel = styled.section<{ $collapsed: boolean }>`
  flex: ${({ $collapsed }) => ($collapsed ? "7 7" : "2 2")};
`;

const Content = styled.div<{ $offset: number }>`
  ${tw`overflow-auto w-full h-full`}
  // remove padding for small devices
  padding-top: 0px;
  
  @media (min-width: 768px) {
    padding-top: ${({ $offset }) => `${$offset || 0}px`};
  }
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
  const [contentRef, { width }] = useElementSize();
  const [headerRef, { height }] = useElementSize();
  return (
    <Container>
      <SidePanel>{sideElement}</SidePanel>
      <ContentPanel ref={contentRef} $collapsed={collapsed}>
        <Header ref={headerRef} width={width} />
        <Content $offset={height}>{contentElement}</Content>
      </ContentPanel>
    </Container>
  );
};

export default Layout;
