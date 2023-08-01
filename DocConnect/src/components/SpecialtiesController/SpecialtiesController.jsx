import {Grid, GridItem} from '@chakra-ui/react';
import Card from '../Card/Card';
import CardContent from '../CardContent/CardContent';

const SpecialtiesController = () => {
  const specialties = [
    {
      id: 1,
      specialtyName: 'Cardiology',
      // eslint-disable-next-line max-len
      imgUrl: 'https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }, {
      id: 2,
      specialtyName: 'Orthopedics',
      // eslint-disable-next-line max-len
      imgUrl: 'https://images.pexels.com/photos/7446990/pexels-photo-7446990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }, {
      id: 3,
      specialtyName: 'Neurology',
      // eslint-disable-next-line max-len
      imgUrl: 'https://img.freepik.com/free-photo/doctor-reading-brain-mri-x-ray-result_53876-13389.jpg?w=740&t=st=1677172789~exp=1677173389~hmac=2d0be25306f47a4f0b4aa04d50dac96dd242ad9af01f8b8a9e5ed90385ffaadc',
    }, {
      id: 4,
      specialtyName: 'Oncology',
      // eslint-disable-next-line max-len
      imgUrl: 'https://img.freepik.com/free-photo/middle-aged-woman-with-skin-cancer-talking-with-her-doctor_23-2148988517.jpg?w=1380&t=st=1677172867~exp=1677173467~hmac=05adb54dceafc6fce6f602ff87188ba97ebfb7463a91cbf48f7651f7e798d2a5',
    }, {
      id: 5,
      specialtyName: 'Gastroenterology',
      // eslint-disable-next-line max-len
      imgUrl: 'https://img.freepik.com/free-photo/this-pain-stomach-is-unbearable_329181-2191.jpg?w=1380&t=st=1677172914~exp=1677173514~hmac=b03857f0631c3fd1b4f4ac82b219a5d68dd98e2eed413f5f7c1ffc57a05c4455',
    }, {
      id: 6,
      specialtyName: 'Dermatology',
      // eslint-disable-next-line max-len
      imgUrl: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }, {
      id: 7,
      specialtyName: 'Pediatrics',
      // eslint-disable-next-line max-len
      imgUrl: 'https://img.freepik.com/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224121.jpg?w=1380&t=st=1677173488~exp=1677174088~hmac=c7742512982c2d4bed8e1b407380e3ae5854843d43dd54716cd6aaf9c11b55aa',
    }, {
      id: 8,
      specialtyName: 'Urology',
      // eslint-disable-next-line max-len
      imgUrl: 'https://img.freepik.com/free-photo/medical-exam_1098-16897.jpg?w=1380&t=st=1677173522~exp=1677174122~hmac=019e51a1790adec4e1ce26eb0c3fe193fece36e400270fd08a406bb8d5d0023c',
    }, {
      id: 9,
      specialtyName: 'Ophthalmology',
      // eslint-disable-next-line max-len
      imgUrl: 'https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <Grid
      templateColumns={
        {
          base: '1fr',
          sm: 'repeat(2, minmax(0, 1fr))',
          lg: 'repeat(3, minmax(0, 1fr))',
        }
      }
      gap={
        {
          base: '2rem',
          md: '2rem 3rem',
          lg: '5rem 6.2rem',
        }
      }
      pt='1.6rem'
    >
      {
        specialties.map((el) => {
          return (
            <GridItem key={el.id}>
              <Card imageUrl={el.imgUrl} content={el.specialtyName} Component={CardContent} />
            </GridItem>
          );
        })
      }
    </Grid>
  );
};

export default SpecialtiesController;
