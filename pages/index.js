import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { useEffect } from 'react';


export default function Home({locale}) {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <>
       <p>{t("BLOGNEWS")}</p>
    </>
  );
};




export async function getServerSideProps(context) {
  const locale = context.locale


  await i18n.changeLanguage(locale); 

  return {
    props: { locale },
  };
}

