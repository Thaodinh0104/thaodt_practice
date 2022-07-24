import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { UserListResults } from '../components/users/user-list-results';
import { UserListToolbar } from '../components/user/ListResults/user-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';

const Users = () => (
  <>
    <Head>
      <title>
        Users | Material Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <UserListToolbar />
        <Box sx={{ mt: 3 }}>
          <UserListResults Users={Users} />
        </Box>
      </Container>
    </Box>
  </>
);
Users.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Users;
