import useTranslation from 'next-translate/useTranslation';
import MainContainer from '../components/MainContainer';

function users({ users }) {
  let { t } = useTranslation();
  return (
    <MainContainer>
      <div>
        <h1>{t('users:title')}</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
}

export default users;

export async function getStaticProps(context) {
  const response = await fetch('http://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: { users },
  };
}
