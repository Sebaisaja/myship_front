import React from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import FormContainer from '../../../../components/UI/form-container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { saveRapidPostInterne } from '../../../../store/rapidpostes/interne-slice';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    agence: yup.string().required('agence est obligatoire'),
    socialName: yup.string().required(),
    expAddress: yup
      .string()
      .required("adresse de l'expéditeur est obligatoire"),
    desName: yup.string().required(),
    desAddress: yup.string().required(),
    content: yup.string().required(),
    weight: yup.number().required('poids et obligatoire').positive(),
  })
  .required();

const RapidposteInterneForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { rapidPostInterne } = useSelector((state) => state.rapidPostInterne);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(saveRapidPostInterne(data));
    navigate('/rapidPost/national-payment');
  };

  // useEffect(() => {
  //   if (rapidPostInterne) return navigate('/checkout');
  // }, [rapidPostInterne]);

  return (
    <FormContainer
      title='Bulletin'
      name={"d'expedition (interne)"}
      type='Rapid Poste '
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Form.Group controlId='agence'>
            <Form.Label>Agence/Bureau de Dépot</Form.Label>
            <Form.Control
              type='text'
              placeholder='agence ibn khaldoun'
              {...register('agence', {
                value: rapidPostInterne?.agence,
              })}
              className={errors.agence?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.agence?.message}</p>
          </Form.Group>
          <Form.Group controlId='expéditeur'>
            <Form.Label>Nom ou Raison Social du Déposant</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('socialName', {
                value: rapidPostInterne?.agence,
              })}
              className={errors.socialName?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.socialName?.message}</p>
          </Form.Group>
          <Form.Group controlId='address_expéditeur'>
            <Form.Label>Adresse de l'Expéditeur </Form.Label>
            <Form.Control
              type='text'
              placeholder='9 rue de marseille tunis 2017'
              {...register('expAddress', {
                value: rapidPostInterne?.expAddress,
              })}
              className={errors.expAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.expAddress?.message}</p>
          </Form.Group>
          <Form.Group controlId='destinataire'>
            <Form.Label>Nom Destinataire</Form.Label>
            <Form.Control
              type='text'
              placeholder='john doe'
              {...register('desName', {
                value: rapidPostInterne?.desName,
              })}
              className={errors.desName?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.desName?.message}</p>
          </Form.Group>
          <Form.Group controlId='address_destinataire'>
            <Form.Label>Adresee du Destinataire </Form.Label>
            <Form.Control
              type='text'
              placeholder='9 rue de marseille sfax 2017'
              {...register('desAddress', {
                value: rapidPostInterne?.desAddress,
              })}
              className={errors.desAddress?.message && 'is-invalid'}
            />
            <p className='invalid-feedback'>{errors.desAddress?.message}</p>
          </Form.Group>
          <Col md={6}>
            <Form.Group controlId='content'>
              <Form.Label>Contenu du l'envoi</Form.Label>
              <Form.Control
                type='text'
                placeholder='parfum'
                {...register('content', {
                  value: rapidPostInterne?.content,
                })}
                className={errors.content?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.content?.message}</p>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId='weight'>
              <Form.Label>Poids(kg)</Form.Label>
              <Form.Control
                type='number'
                defaultValue={250}
                {...register('weight', {
                  value: rapidPostInterne?.weight,
                })}
                className={errors.weight?.message && 'is-invalid'}
              />
              <p className='invalid-feedback'>{errors.weight?.message}</p>
            </Form.Group>
          </Col>
        </Row>
        <Button type='submit' variant='warning' className='mt-3 w-full'>
          Confirmer
        </Button>
      </Form>
    </FormContainer>
  );
};

export default RapidposteInterneForm;
