import { getPrefectures } from '@api';
import Chart from '@components/Chart';
import InputCheckboxDropdown from '@components/InputCheckboxDropdown';
import styled from '@emotion/styled';
import { AppState } from '@stores';
import { PrefecturesItem } from '@stores/slices/cities';
import { handleGetCities, handleGetPopulationEstimate } from '@stores/thunk/cites';
import theme from '@theme';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Title = styled.h1`
  font-size: ${() => theme.size.h1};
  margin-bottom: 30px;
`;

const PageContainer = styled.div`
  text-align: center;
  padding: 50px 0;
`;

const ChartContainer = styled.div`
  max-width: 100%;
  width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledChart = styled(Chart)`
  margin-left: auto;
  margin-right: auto;
`;

const DropdownContainer = styled.div`
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;
interface Props {
  prefectures: PrefecturesItem[];
}

const Home = ({ prefectures }: Props) => {
  const dispatch = useDispatch();

  const {
    cities: { data: cities },
    populationEstimate: { data: populationEstimate },
  } = useSelector((state: AppState) => state.cities);
  const [prefecturesPrefCode, setPrefecturesPrefCode] = useState<number | null>(null);
  const [cityCode, setCityCode] = useState<string | null>(null);

  useEffect(() => {
    prefecturesPrefCode && dispatch(handleGetCities({ prefCode: prefecturesPrefCode }));
  }, [prefecturesPrefCode]);

  useEffect(() => {
    if (prefecturesPrefCode && cityCode) {
      dispatch(handleGetPopulationEstimate({ prefCode: prefecturesPrefCode, cityCode }));
    }
  }, [prefecturesPrefCode, cityCode]);

  const chartData = useMemo(
    () => populationEstimate?.data?.slice(1).map((item) => ({ id: item.label, data: item.data.map((o) => ({ x: o.year.toString(), y: o.value })) })) || [],
    [populationEstimate],
  );

  return (
    <>
      <PageContainer>
        <Title>Biểu đồ sự thay đổi về dân số phân theo các đơn vị hành chính</Title>
        <DropdownContainer>
          <InputCheckboxDropdown
            placeholder="Hãy chọn 1 đô"
            options={prefectures.map((item) => ({ label: String(item.prefName), value: item.prefCode }))}
            onChange={(val) => {
              setPrefecturesPrefCode(Number(val));
            }}
          />

          {!!prefecturesPrefCode && !!cities.length && (
            <InputCheckboxDropdown
              placeholder="Hãy chọn 1 đạo"
              options={cities.map((item) => ({ label: item.cityName, value: item.cityCode }))}
              onChange={(val) => {
                setCityCode(String(val));
              }}
            />
          )}
        </DropdownContainer>
        <ChartContainer>{!!chartData?.length && <StyledChart data={chartData} />}</ChartContainer>
      </PageContainer>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const {
    data: { result: prefectures },
  } = await getPrefectures();

  return {
    props: { prefectures }, // will be passed to the page component as props
  };
}
