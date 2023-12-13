import {
  COUNTER_STEP,
  DECREMENT_RATING,
  DEFAULT_FORM_VALUES,
  INCREMENT_RATING,
  SET_NAME,
  SET_RATING,
  SET_TEXT,
} from '../../constants/review-form';

type ReviewFormAction =
  | { type: typeof SET_NAME; payload: string }
  | { type: typeof SET_TEXT; payload: string }
  | { type: typeof SET_RATING; payload: number }
  | { type: typeof INCREMENT_RATING }
  | { type: typeof DECREMENT_RATING };

export const reducer = (
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
    case INCREMENT_RATING:
      return {
        ...state,
        rating: state.rating + COUNTER_STEP,
      };
    case DECREMENT_RATING:
      return {
        ...state,
        rating: state.rating - COUNTER_STEP,
      };
    default:
      return state;
  }
};
