import { useReducer } from 'react';
import { Counter } from '../counter/component';
import classNames from 'classnames';
import styles from './styles.module.css';
import { Button } from '../button/component';
import { ReviewData } from '../../types/types';
import { reducer } from './reducer';
import {
  DECREMENT_RATING,
  INCREMENT_RATING,
  SET_NAME,
  SET_TEXT,
} from '../../constants/review-form';

interface ReviewFormProps {
  buttonTitle: string;
  formTitle: string;
  defaultValue: ReviewData;
  onSubmit: (reviewData: ReviewData) => void;
  className?: string;
}

export const ReviewForm = ({
  onSubmit,
  buttonTitle,
  formTitle,
  defaultValue,
  className,
}: ReviewFormProps) => {
  const [formValue, dispatch] = useReducer(reducer, defaultValue);
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>{formTitle}</h3>
      <div className={classNames(styles.container)}>
        <div className={classNames(styles.inputContainer)}>
          <label htmlFor='name' className={classNames(styles.inputLabel)}>
            Имя{' '}
          </label>
          <input
            id='name'
            type='text'
            value={formValue.name}
            onChange={(event) =>
              dispatch({ type: SET_NAME, payload: event.target.value })
            }
          />
        </div>
        <div className={classNames(styles.inputContainer)}>
          <label htmlFor='text' className={classNames(styles.inputLabel)}>
            Отзыв{' '}
          </label>
          <textarea
            id='text'
            value={formValue.text}
            rows={5}
            cols={33}
            onChange={(event) =>
              dispatch({ type: SET_TEXT, payload: event.target.value })
            }
          />
        </div>
        <div className={classNames(styles.inputContainer, styles.alignCenter)}>
          <span className={classNames(styles.inputLabel)}>Рейтинг </span>
          <Counter
            value={formValue.rating}
            increment={() => dispatch({ type: INCREMENT_RATING })}
            decrement={() => dispatch({ type: DECREMENT_RATING })}
          />
        </div>
        <Button
          onClick={() => onSubmit(formValue)}
          size={'big'}
          className={classNames(styles.submitButton)}
        >
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
};
