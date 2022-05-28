import React, { useEffect, useState } from 'react';
import { Container, Row, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../../components/layouts/default-layout';
import { getUserInternationalCoil } from '../../store/colis/myinternational-coils';
import Loader from '../../components/UI/loader';
import UserColisTable from '../../components/tables/ueser-history/userColis-table';
import UserCurriersTable from '../../components/tables/ueser-history/userCourriers-table';
import { getUserCourriersList } from '../../store/lettres/user-list';
import { getUserRpList } from '../../store/rapidpostes/user-list';
import UserRpTable from '../../components/tables/ueser-history/userRp-table';
import { getAllReclamation } from '../../store/reclamation/list-slice';
import UserReclamationTable from '../../components/tables/ueser-history/reclamation-table';
import { getUserReclamation } from '../../store/reclamation/user-list';

const UserSending = () => {
  const dispatch = useDispatch();

  const [refresh, setRefresh] = useState(false);

  const { myInternationalColis, loading } = useSelector(
    (state) => state.userInternationalCoil
  );

  const { courriers, loading: courLoading } = useSelector(
    (state) => state.userCourriersList
  );
  const { rapidposts, loading: rpLoading } = useSelector(
    (state) => state.userRapidpost
  );

  const { reclamations, loading: recLoading } = useSelector(
    (state) => state.getUserReclamation
  );

  useEffect(() => {
    dispatch(getUserInternationalCoil());
    dispatch(getUserCourriersList());
    dispatch(getUserRpList());
  }, [dispatch, refresh]);

  useEffect(() => {
    dispatch(getUserReclamation());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Row className=' justify-content-center my-8'>
            <h1 className='text-center mb-2'>Mes Envois</h1>{' '}
            {myInternationalColis.length === 0 ? (
              <div>empty</div>
            ) : (
              <UserColisTable
                myInternationalColis={myInternationalColis}
                setRefresh={setRefresh}
              />
            )}
          </Row>
        )}

        {courLoading ? (
          <Loader />
        ) : (
          <Row className=' justify-content-center my-8'>
            {courriers.length === 0 ? (
              <Alert>no courriers</Alert>
            ) : (
              <UserCurriersTable
                courriers={courriers}
                setRefresh={setRefresh}
              />
            )}
          </Row>
        )}

        {rpLoading ? (
          <Loader />
        ) : (
          <Row className=' justify-content-center my-8'>
            {courriers.length === 0 ? (
              <Alert>no rapidposts</Alert>
            ) : (
              <UserRpTable rapidposts={rapidposts} setRefresh={setRefresh} />
            )}
          </Row>
        )}

        {recLoading ? (
          <Loader />
        ) : (
          <Row className=' justify-content-center my-8'>
            {reclamations.length === 0 ? (
              <Alert>no reclamations</Alert>
            ) : (
              <UserReclamationTable reclamations={reclamations} />
            )}
          </Row>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default UserSending;
