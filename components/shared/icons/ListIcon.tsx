import { Icon, IconProps } from "@chakra-ui/react";

const ListIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 16 12" {...props}>
      <path
        d="M0 0H2V2H0V0ZM0 5H2V7H0V5ZM0 10H2V12H0V10ZM16 2V0H4.023V2H14.8H16ZM4 5H16V7H4V5ZM4 10H16V12H4V10Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default ListIcon;
