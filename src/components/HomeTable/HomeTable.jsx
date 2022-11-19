import { transactions } from './mock';

const HomeTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comments</th>
            <th>Sum</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({ id, date, type, category, comments, sum, balanceAfter }) => (
              <tr key={id}>
                <td>{date}</td>
                <td>{type}</td>
                <td>{category}</td>
                <td>{comments}</td>
                <td>{sum}</td>
                <td>{balanceAfter}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default HomeTable;
