import { MdOutlineMailOutline } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer>
      <h3>© 2023 Antonio Neto</h3>
      <div>
        <AiOutlineLinkedin size='40px' color='#4F4F4F' />
        <MdOutlineMailOutline size='40px' color='#4F4F4F' />
      </div>
    </footer>
  );
}
