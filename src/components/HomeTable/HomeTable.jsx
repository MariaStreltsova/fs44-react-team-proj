import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { useTranslation } from 'react-i18next';
import { format } from 'fecha';
import operations from '../../redux/wallet/wallet-operations';
import walletSelectors from '../../redux/wallet/wallet-selectors';

const SORT_TYPES = {
  asc: 'asc', // зростання
  desc: 'desc', // зменшення
};

const HomeTable = () => {
  const { t } = useTranslation();
  const headCells = [
    {
      id: 'date',
      align: 'left',
      label: t('homeTable.date'),
      sorting: true,
    },
    {
      id: 'type',
      align: 'center',
      label: t('homeTable.type'),
      sorting: false,
    },
    {
      id: 'category',
      align: 'left',
      label: t('homeTable.category'),
      sorting: true,
    },
    {
      id: 'comments',
      align: 'left',
      label: t('homeTable.comment'),
      sorting: false,
    },
    {
      id: 'amount',
      align: 'right',
      label: t('homeTable.sum'),
      sorting: true,
    },
    {
      id: 'balance',
      align: 'right',
      label: t('homeTable.balance'),
      sorting: false,
    },
  ];
  const dispatch = useDispatch();
  const transactions = useSelector(walletSelectors.getTransactions);
  const [order, setOrder] = useState(SORT_TYPES.asc);
  const [orderBy, setOrderBy] = useState(headCells[0].id);
  const [page, setPage] = useState(0);
  const rowsPerPage = 5;
  const emptyRows =
    transactions && page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - transactions?.length)
      : 0;

  useEffect(() => {
    dispatch(operations.fetchTransactions());
  }, [dispatch]);

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
      <TableHead>
        <TableRow>
          {headCells.map(headCell => (
            <TableCell
              key={headCell.id}
              align={headCell.align}
              padding={'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <div>
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
          sx={{
            [`& .${tableCellClasses.root}`]: {
              borderBottom: 'none',
              fontFamily: 'Circle',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '18px',
            },
            [`& .${tableCellClasses.head}`]: {
              height: '56px',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '26px',
              backgroundColor: '#fff',
              '&:first-of-type': {
                borderRadius: '30px 0px 0px 30px',
              },
              '&:last-of-type': {
                borderRadius: '0px 30px 30px 0px',
              },
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
            {transactions &&
              [...transactions]
                .sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(
                  ({
                    _id,
                    date,
                    direction,
                    category,
                    comment,
                    amount,
                    balanceAfter,
                  }) => (
                    <TableRow key={_id}>
                      <TableCell align="left">
                        {format(new Date(date), 'dd.MM.YY')}
                      </TableCell>
                      <TableCell align="center">
                        {direction === 'expense' ? '+' : '-'}
                      </TableCell>
                      <TableCell align="left">{category}</TableCell>
                      <TableCell align="left">{comment}</TableCell>
                      <TableCell
                        sx={{
                          color:
                            direction === 'expense' ? '#FF6596' : '#24CCA7',
                        }}
                        align="right"
                      >
                        {amount.toFixed(2)}
                      </TableCell>
                      <TableCell align="right">
                        {balanceAfter.toFixed(2)}
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
        count={transactions ? transactions.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  );
};

export default HomeTable;
