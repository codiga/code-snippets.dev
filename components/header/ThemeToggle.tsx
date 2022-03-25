import {
  BoxProps,
  FormLabel,
  HStack,
  Switch,
  useColorMode,
} from "@chakra-ui/react";

type ThemToggleProps = BoxProps & {
  big?: boolean;
};

const ThemeToggle = ({ big = false, ...props }: ThemToggleProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const label = colorMode === "light" ? "Light Mode" : "Dark Mode";
  const fontSize = big ? "24px" : "12px";

  return (
    <HStack {...props}>
      <Switch id="toggle" onChange={toggleColorMode} />
      <FormLabel htmlFor="toggle" fontSize={fontSize}>
        {label}
      </FormLabel>
    </HStack>
  );
};

export default ThemeToggle;
