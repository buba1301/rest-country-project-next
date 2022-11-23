import Detail from '../../components/Detail';
import {
  getAllCountriesName,
  getCountryData,
  getCountryByCode,
} from '../../lib/api';

export default function Country({ countryData }) {
  return <Detail countryData={countryData} />;
}

export async function getStaticPaths() {
  const paths = await getAllCountriesName({
    query: 'all',
    params: 'name',
  });

  console.log('PATHS', paths);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const [countryData] = await getCountryByCode(params.name);

  return {
    props: {
      countryData,
    },
  };
}
