import ExampleClientComponent from '../components/ExampleClientComponent';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '../components/TranslationsProvider';

export default async function Home({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale);

  return (
    <TranslationsProvider locale={locale} resources={resources}>
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t('home.title')}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('home.description')}
            </p>
            <div className="mt-12">
              <ExampleClientComponent />
            </div>
          </div>
        </div>
      </main>
    </TranslationsProvider>
  );
}
