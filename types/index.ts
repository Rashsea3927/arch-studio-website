export type PortfolioType = {
  id: number;
  images: {
    mobile: {
      src: string;
      width: number;
      height: number;
    };
    tablet: {
      src: string;
      width: number;
      height: number;
    };
    desktop: {
      src: string;
      width: number;
      height: number;
    };
  };
  title: string;
  date: string;
  featuredRank?: number;
};
