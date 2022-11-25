import Detail from '../../components/Detail';
import { getAllCountriesName, getCountryByCode } from '../../lib/api';

export default function Country({ countryData }) {
  return <Detail countryData={countryData} />;
}

export async function getStaticPaths() {
  const paths = await getAllCountriesName({
    query: 'all',
    params: 'name',
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [countryData] = await getCountryByCode(params?.name);

  return {
    props: {
      countryData,
    },
  };
}
