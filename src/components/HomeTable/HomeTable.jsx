import { transactions } from './mock';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { useTableStyles } from './HomeTable.styled';
import { visuallyHidden } from '@mui/utils';

const headCells = [
  {
    id: 'date',
    align: 'left',
    label: 'Date',
    sorting: true,
  },
  {
    id: 'type',
    align: 'center',
    label: 'Type',
    sorting: false,
  },
  {
    id: 'category',
    align: 'left',
    label: 'Category',
    sorting: true,
  },
  {
    id: 'comments',
    align: 'left',
    label: 'Comments',
    sorting: false,
  },
  {
    id: 'amount',
    align: 'right',
    label: 'Sum',
    sorting: true,
  },
  {
    id: 'balance',
    align: 'right',
    label: 'Balance',
    sorting: false,
  },
];

const SORT_TYPES = {
  asc: 'asc', // зростання
  desc: 'desc', // зменшення
};

const HomeTable = () => {
  const [order, setOrder] = useState(SORT_TYPES.asc);
  const [orderBy, setOrderBy] = useState(headCells[0].id);
  const [page, setPage] = useState(0);
  const styles = useTableStyles();
  const rowsPerPage = 5;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - transactions.length) : 0;

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === SORT_TYPES.asc;
    setOrder(isAsc ? SORT_TYPES.desc : SORT_TYPES.asc);
    setOrderBy(property);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const getComparator = (order, orderBy) => {
    return order === SORT_TYPES.desc
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const EnhancedTableHead = props => {
    const { order, orderBy, onRequestSort } = props;

    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };

    return (
      <TableHead className={styles.tableHeadRow}>
        <TableRow>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              align={headCell.align}
              padding={'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <div className={styles.tableHeadCell}>
                {headCell.sorting ? (
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : SORT_TYPES.asc}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                    {headCell.sorting && orderBy === headCell.id ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === SORT_TYPES.desc
                          ? 'sorted descending'
                          : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                ) : (
                  headCell.label
                )}
              </div>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  return (
    <Box>
      <TableContainer>
        <Table
          className={styles.table}
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none',
              fontFamily: 'Circle',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '26.53px',
            },
          }}
        >
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody
            sx={{
              [`& .${tableCellClasses.root}`]: {
                fontFamily: 'Circle',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '23.58px',
              },
            }}
          >
            {transactions
              .sort(getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                ({
                  id,
                  date,
                  type,
                  category,
                  comments,
                  amount,
                  balanceAfter,
                }) => (
                  <TableRow key={id} className={styles.tableRow}>
                    <TableCell className={styles.tableCell} align="left">
                      {date}
                    </TableCell>
                    <TableCell className={styles.tableCell} align="center">
                      {type === 'expense' ? '+' : '-'}
                    </TableCell>
                    <TableCell className={styles.tableCell} align="left">
                      {category}
                    </TableCell>
                    <TableCell className={styles.tableCell} align="left">
                      {comments}
                    </TableCell>
                    <TableCell
                      className={styles.tableCell}
                      sx={{
                        color: type === 'expense' ? '#FF6596' : '#24CCA7',
                      }}
                      align="right"
                    >
                      {amount.toFixed(2)}
                    </TableCell>
                    <TableCell className={styles.tableCell} align="right">
                      {balanceAfter}
                    </TableCell>
                  </TableRow>
                )
              )}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 52 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5]}
        component="div"
        count={transactions.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default HomeTable;