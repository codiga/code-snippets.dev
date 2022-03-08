import {
  StackProps,
  ThemingProps,
  useStyleConfig,
  VStack,
} from "@chakra-ui/react";

type CardProps = StackProps & ThemingProps<"Card">;
const Card = ({ variant = "outline", ...props }: CardProps) => {
  const styles = useStyleConfig("Card", { variant });

  return <VStack sx={styles} {...props} />;
};

export default Card;
