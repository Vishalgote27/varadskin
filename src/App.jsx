import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ServicesDetails from './public/pages/ServicesDetails';
// Lazy load components
const Publiclayout = React.lazy(() => import('./public/PublicLayout'));
const Hero = React.lazy(() => import('./public/componands/Hero'));
const About = React.lazy(() => import('./public/pages/About'));
const Contact = React.lazy(() => import('./public/pages/Contact'));
const AllServices = React.lazy(() => import('./public/pages/AllServices'));
// const OurGallary = React.lazy(() => import('./public/pages/OurGallary'));
// const OurPackage = React.lazy(() => import('./public/pages/OurPackage'));
// const SchoolPackage = React.lazy(() => import('./public/pages/SchoolPackage'));

function App() {
  return (
    <BrowserRouter>
      {/* Wrap routes in Suspense to handle lazy loading */}
      <Suspense fallback={<div class="flex justify-center items-center h-screen">
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-black animate-bounce"></div>
          <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-black animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>}>
        <Routes>
          {/* Publiclayout is also lazily loaded */}
          <Route path='/' element={<Publiclayout />}>
            <Route index element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<AllServices />} />
            <Route path='/servicesDetails/:id' element={<ServicesDetails />} />
            {/* <Route path='/my-packges' element={<MyPackages />} /> */}
            {/* <Route path='/gallary' element={<OurGallary />} /> */}

            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
