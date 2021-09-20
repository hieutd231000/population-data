import type { NextPage } from 'next';
import HeaderContainer from '@components/Header';
import styled from '@emotion/styled';
import theme from '@theme';
import { useEffect } from 'react';
import { getCities } from '@api';
import { CityItem } from '@stores/slices/cities';
import InputCheckboxDropdown from '@components/InputCheckboxDropdown';

const Title = styled.h1`
  font-size: ${() => theme.size.h1};
`;

interface Props {
  cities: CityItem[];
}

const Home = ({ cities }: Props) => {
  console.log(cities);

  return (
    <div>
      <HeaderContainer />
      <Title>Biểu đồ sự thay đổi về dân số phân theo các đơn vị hành chính</Title>
      <InputCheckboxDropdown placeholder="Hãy chọn 1 thành phố" options={cities.map((item) => ({ label: item.cityName, value: item.cityCode }))} />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const {
    data: { result: cities },
  } = await getCities({ prefCode: 1 });
  return {
    props: { cities }, // will be passed to the page component as props
  };
}
