import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Suspense, useEffect, useState } from 'react';


export default function Home({locale}) {
  const { t } = useTranslation();
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadLanguage = () => {
      i18n.changeLanguage(locale);
      setIsLoaded(true)
    }
    loadLanguage()
  }, [locale]);

  if (!isLoaded){
    return <div>Loading....</div>
  }

  return (
    <Suspense fallback={<div>Loading..</div>}>
       <p>{t("BLOGNEWS")}</p>
    </Suspense>
  );
};




export async function getServerSideProps(context) {
  const locale = context.locale


  await i18n.changeLanguage(locale); 

  return {
    props: { locale },
  };
}

