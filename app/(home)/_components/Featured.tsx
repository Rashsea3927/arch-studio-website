import LinkButton from '@/components/ui/LinkButton';
import PortfolioItem from '@/components/ui/PortfolioItem';
import { portfolioItems } from '@/constants';

const featuredItems = portfolioItems.filter((portfolio) => portfolio.featuredRank);
const sortedFeaturedItems = featuredItems.sort((a, b) => a.featuredRank! - b.featuredRank!);

const Featured = () => {
  return (
    <section className='mx-auto max-w-xs w-full mb-[132px] sm:max-w-xl md:mb-[200px] lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl'>
      <div className='grid sm:grid-cols-2'>
        <h2 className='text-md text-(--dark-blue) sm:self-center'>Featured</h2>
        <div className='row-start-4 sm:row-start-1 sm:col-start-2 sm:w-[169px] sm:justify-self-end'>
          <LinkButton link='portfolio' text='See All' />
        </div>
        <ul className='grid gap-6 mt-11 mb-6 sm:col-start-1 sm:col-end-3 lg:grid-cols-3'>
          {sortedFeaturedItems.map((portfolio) => (
            <PortfolioItem key={portfolio.id} portfolio={portfolio} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Featured;
