import Nav from './components/Nav';
import {
  Hero,
  Footer,
  Services,
  SpecialOffer,
  CustomerReviews,
  Quality,
  Subscribe,
  Popular,
} from './sections'

const App=()=>(
<main className="relative">
<Nav/>
  <section className="xl: padding-1 wide:padding-r padding-b">
  <Hero/>
  </section>
  <section className="padding">
    <Popular/>
  </section>
  <section className="padding">
    <Quality/>
  </section>
  <section className="padding-x py-10">
    <Services/>
  </section>
  <section className="padding">
    <SpecialOffer/>
  </section>
  <section className="padding bg-pale-blue">
    <CustomerReviews/>
  </section>
  <section className="padding-x sm:py-32 py-167 w-full">
    <Subscribe/>
  </section>
  <section className="bg-black padding-x padding-t pb-8">
    <Footer/>
  </section>
</main>
);

export default App;