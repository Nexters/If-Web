import styled from 'styled-components';

interface ILayoutProps {
  padding?: string;
}

const Layout = styled.section<ILayoutProps>`
  padding: ${(props) => props.padding || '24px 24px'};
`;

export default Layout;
