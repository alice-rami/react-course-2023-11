import { useReducer } from 'react';
import { Counter } from '../counter/component';
import classNames from 'classnames';
import styles from './styles.module.css';
import { Button } from '../button/component';

const SET_NAME = 'setName';
const SET_TEXT = 'setText';
const SET_RATING = 'setRating';

const DEFAULT_FORM_VALUES = {
  name: '',
  text: '',
  rating: 5,
};

const COUNTER_STEP = 0.5;

interface ReviewFormProps {
  className?: string;
}

type ReviewFormAction =
  | { type: typeof SET_NAME; payload: string }
  | { type: typeof SET_TEXT; payload: string }
  | { type: typeof SET_RATING; payload: number };

const reducer = (
  state: typeof DEFAULT_FORM_VALUES,
  action: ReviewFormAction
) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

export const ReviewForm = ({ className }: ReviewFormProps) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES);
  return (
    <div className={classNames(styles.root, className)}>
      <h3 className={classNames(styles.title)}>Оставить отзыв</h3>
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
            increment={() =>
              dispatch({
                type: SET_RATING,
                payload: formValue.rating + COUNTER_STEP,
              })
            }
            decrement={() =>
              dispatch({
                type: SET_RATING,
                payload: formValue.rating - COUNTER_STEP,
              })
            }
          />
        </div>
        <Button
          onClick={() => console.log('submit')}
          disabled
          size={'big'}
          className={classNames(styles.submitButton)}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};
