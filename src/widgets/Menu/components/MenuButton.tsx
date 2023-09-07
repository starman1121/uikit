import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  padding: 0 8px;
  border-radius: 8px;
  ${({ theme }) => theme.mediaQueries.md} {
    display: none;
  }
`;

export const LangMenuButton = styled(Button)`
  color: #fff;
  padding: 0 8px;
  border-radius: 8px;
  
`;

LangMenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

MenuButton.defaultProps = {
  variant: "text",
  size: "sm",
};

export default MenuButton;

