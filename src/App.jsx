import React from 'react';
import Header from './components/Header'; //Header
import Banner from './components/Banner'; //Banner
import ContacForm   from './components/ContactForm'; //Banner
import ContactColumna   from './components/ContactColumna'; //Banner
import Footer from './components/Footer'; //Footer
import Video from './components/Video'; //Footer


const App = () => {
  return (
    <>
      <Header/>
      <main>

          <Banner/>
          <ContacForm/>
           <Video/>
          <ContactColumna/>
      </main>
      <Footer/>
    </>
  );
};

export default App;



//Header
//Banner
//ContactForm
//ContactColumna
//Footer
