export default function Country() {}

export async function getStaticPaths() {
  const paths = getAllCountriesNames({
    query: 'all',
    params: 'name',
  });

  return {
    paths,
    fallback: false,
  };
}
