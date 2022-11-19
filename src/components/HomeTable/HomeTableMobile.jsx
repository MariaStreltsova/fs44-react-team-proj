import { transactions } from './mock';

const HomeTableMobile = () => {
  return (
    <ul>
      {transactions.map(
        ({ id, date, type, category, comments, sum, balanceAfter }) => (
          <li key={id}>
            <ul>
              <li>
                <span>Date</span>
                <span>{date}</span>
              </li>
              <li>
                <span>Type</span>
                <span>{type}</span>
              </li>
              <li>
                <span>Category</span>
                <span>{category}</span>
              </li>
              <li>
                <span>Comment</span>
                <span>{comments}</span>
              </li>
              <li>
                <span>Sum</span>
                <span>{sum}</span>
              </li>
              <li>
                <span>Balance</span>
                <span>{balanceAfter}</span>
              </li>
            </ul>
          </li>
        )
      )}
    </ul>
  );
};

export default HomeTableMobile;
