import { Icon, IconProps } from "@chakra-ui/react";

const CardsIcon = (props: IconProps) => {
  return (
    <Icon viewBox="0 0 12 12" {...props}>
      <path
        d="M0 0H5.4V5.4H0V0ZM1.2 1.2V4.2H4.2V1.2H1.2ZM0 6.6H5.4V12H0V6.6ZM1.2 7.8V10.8H4.2V7.8H1.2ZM6.6 0H12V5.4H6.6V0ZM7.8 1.2V4.2H10.8V1.2H7.8ZM6.6 6.6H12V12H6.6V6.6ZM7.8 7.8V10.8H10.8V7.8H7.8Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default CardsIcon;
