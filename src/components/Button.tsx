import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({ title, variant, ...rest }: Props) {
  const isOutline = variant === "outline";

  return (
    <ButtonNativeBase
      w="full"
      h={12}
      bg={isOutline ? "transparent" : "green.700"}
      borderWidth={isOutline ? 1 : 0}
      borderColor="green.700"
      rounded="sm"
      _pressed={{
        bg: isOutline ? 'gray.500' : 'green.500'
      }}
      {...rest}
    >
      <Text 
        color={isOutline ? "green.500" : "white" }
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}