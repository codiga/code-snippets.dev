import { FormLabel, HStack, Switch, useColorMode } from "@chakra-ui/react";

type ThemToggleProps = {
  big?: boolean;
};

const ThemeToggle = ({ big = false }: ThemToggleProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const label = colorMode === "light" ? "Light Mode" : "Dark Mode";
  const fontSize = big ? "24px" : "12px";

  return (
    <HStack d="flex">
      <Switch id="toggle" onChange={toggleColorMode} />
      <FormLabel htmlFor="toggle" fontSize={fontSize}>
        {label}
      </FormLabel>
    </HStack>
  );
};

export default ThemeToggle;
