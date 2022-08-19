import { ReactElement } from "react";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: ReactElement | ReactElement[];
};

const Layout = ({ children, ...props }: Props) => {
  return (
    <Flex direction="column" maxW={"100%"} m="0 auto" p={6} {...props}>
      {children}
    </Flex>
  );
};

export default Layout;
