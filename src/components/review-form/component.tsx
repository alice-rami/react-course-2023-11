import { useReducer } from 'react';
import { Counter } from '../counter/component';

const SET_NAME = 'setName';
const SET_TEXT = 'setText';
const SET_RATING = 'setRating';

const DEFAULT_FORM_VALUES = {
  name: '',
  text: '',
  rating: 0,
};

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

export const ReviewForm = () => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES);
  return (
    <div>
      <div>
        <div>
          <label htmlFor='name'>Имя </label>
          <input
            id='name'
            type='text'
            value={formValue.name}
            onChange={(event) =>
              dispatch({ type: SET_NAME, payload: event.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor='text'>Отзыв </label>
          <textarea
            id='text'
            value={formValue.text}
            onChange={(event) =>
              dispatch({ type: SET_TEXT, payload: event.target.value })
            }
          />
        </div>
        <div>
          <span>Рейтинг </span>
          <Counter
            value={formValue.rating}
            increment={() =>
              dispatch({ type: SET_RATING, payload: formValue.rating + 0.5 })
            }
            decrement={() =>
              dispatch({ type: SET_RATING, payload: formValue.rating - 0.5 })
            }
          />
        </div>
      </div>
    </div>
  );
};
