import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: ReactElement | ReactElement[];
};

const Layout = ({ children, ...props }: Props) => {
  return (
    <Flex pos="fixed" fontSize={["sm", "md", "lg"]} {...props}>
      {children}
    </Flex>
  );
};

export default Layout;
