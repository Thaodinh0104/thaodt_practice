import { format } from 'date-fns';
import { UserListResults } from '../components/users/user-list-results';
// import { v4 as uuid } from 'uuid';
import {v4 as uuidv4} from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';

export const Listusers = (props) => (
  <UserListResults Users={Users} />
);

