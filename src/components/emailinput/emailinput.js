import { Input } from '@mantine/core';
import { At } from 'tabler-icons-react';

function Mail() {
  return (
    <Input
      icon={<At />}
      placeholder="Your email"
    />
  );
}
export default Mail;