import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import MainContainer from '../components/MainContainer';

const Index = ({ greeting, text }) => {
  let router = useRouter();
  let { t } = useTranslation();
  return (
    <div>
      <MainContainer>
        <h1>{t('common:greeting')}</h1>
        <p style={{ fontSize: '25px' }}>{t('common:text')}</p>
        <div className="footer">
          <ul>
            {router.locales.map((locale) => (
              <li key={locale}>
                <Link href={router.asPath} locale={locale}>
                  <a>{locale}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </MainContainer>
    </div>
  );
};

export default Index;
