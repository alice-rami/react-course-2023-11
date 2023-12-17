import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h2>Страница не найдена</h2>
      <Link to='/restaurants'>На главную</Link>
    </div>
  );
};
