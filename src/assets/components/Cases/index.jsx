import styles from './Cases.module.scss';
import { GoArrowRight } from 'react-icons/go';

export default function Cases({ Company, Case, children }) {
  return (
    <div>
      <h3>{Company}</h3>
      <h2>{Case}</h2>
      <p>{children}</p>
      <a href={`/${Case.toLowerCase()}`}>
        View <GoArrowRight />
      </a>
    </div>
  );
}
