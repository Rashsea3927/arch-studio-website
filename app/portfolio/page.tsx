import PortfolioItem from '@/components/ui/PortfolioItem';
import { portfolioItems } from '@/constants';

const PortfolioPage = () => {
  return (
    <section className='px-8 mb-[132px] sm:max-w-xl sm:mx-auto md:px-0 md:mb-[200px] lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl'>
      <ul className='grid gap-6 lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-8'>
        {portfolioItems.map((portfolio) => (
          <PortfolioItem key={portfolio.id} portfolio={portfolio} />
        ))}
      </ul>
    </section>
  );
};

export default PortfolioPage;
