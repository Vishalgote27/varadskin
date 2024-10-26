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
      <Suspense fallback={<div>
        <div className="flex flex-row space-x-4 justify-center items-center mt-56  ">
          <div className="w-12 h-12 rounded-full animate-spin border-8 border-dashed border-green-500 border-t-transparent">
          </div>
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
