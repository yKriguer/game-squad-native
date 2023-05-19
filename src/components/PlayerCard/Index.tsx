import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
type Props = {
  name: string;
  onRemove: () => void;
};

export const PlayerCard = ({ name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon onPressOut={() => onRemove} icon="close" type="secondary" />
    </Container>
  );
};
