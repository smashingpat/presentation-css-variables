import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';
import imagePath from './image.jpg';

export default function Slide() {
  return (
    <Stack fill vertical centered>
      <Text variant="mega-title">Questions?</Text>
      <img src={imagePath} alt="" width="300" />
    </Stack>
  );
}
