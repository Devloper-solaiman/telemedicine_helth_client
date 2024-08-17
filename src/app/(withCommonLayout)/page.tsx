import HeroSection from '@/components/UI/HomePage/HeroSection/Herosection';
import Solution from '@/components/UI/HomePage/Solution/Solution';
import Specialist from '@/components/UI/HomePage/Specialist/Specialist';
import TopRatedDoctors from '@/components/UI/HomePage/TopRatedDoctors/TopRatedDoctors';
import WhyUs from '@/components/UI/HomePage/WhyUs/WhyUs';
import { Button } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Specialist />
      <TopRatedDoctors />
      <WhyUs />
      <Solution />
    </>
  );
};

export default HomePage;