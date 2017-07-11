import model from './model';
import handlers from './action-creators';

export default (state = model(), action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};
