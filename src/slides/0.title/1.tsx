import Stack from '~src/lib/components/Stack';
import Text from '~src/lib/components/Text';
import imagePath from './image.jpg';

export default function Slide() {
  return (
    <Stack fill centered vertical>
      <Text variant="mega-title">Cooking Recipes with <br />CSS Variables</Text>
      <img src={imagePath} alt="" />
    </Stack>
  );
}
