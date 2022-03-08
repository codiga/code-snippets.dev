import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Footer from "components/footer/Footer";
import LogoLink from "./LogoLink";
import MenuLinks from "./MenuLinks";
import ThemeToggle from "./ThemeToggle";
import Background from "components/shared/Background";

type NavBarMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NavBarMobile = ({ isOpen, onClose }: NavBarMobileProps) => {
  return (
    <Drawer size="full" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader p={0}>
          <Box d="flex" justifyContent="space-between" py={8} px="1rem">
            <LogoLink />
            <IconButton
              aria-label="Close menu"
              variant="ghost"
              icon={<CloseIcon />}
              onClick={onClose}
            />
          </Box>
        </DrawerHeader>
        <DrawerBody d="flex" justifyContent="center" alignItems="center">
          <VStack as="ul" spacing={14} listStyleType="none">
            <MenuLinks big />
            <ThemeToggle big />
          </VStack>
        </DrawerBody>
        <DrawerFooter>
          <Footer />
        </DrawerFooter>
        <Background />
      </DrawerContent>
    </Drawer>
  );
};

export default NavBarMobile;
