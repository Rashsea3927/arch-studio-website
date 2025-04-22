import Featured from './_components/Featured';
import Hero from './_components/Hero/Hero';
import Team from './_components/Team';
import Welcome from './_components/Welcome';

export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <Team />
      <Featured />
    </>
  );
}
