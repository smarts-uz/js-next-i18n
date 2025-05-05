import ExampleClientComponent from '../components/ExampleClientComponent';
import initTranslations from '@/app/i18n';

export default async function Home({ params }) {
  const { locale } = params;
  const { t } = await initTranslations(locale);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('home.title')}</h1>
      <p className="mb-4">{t('home.description')}</p>
      <ExampleClientComponent />
    </main>
  );
}
