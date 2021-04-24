import React from "react";
import MainBanner from "../components/Web/MainBanner";
import HomeCourses from '../components/Web/HomeCourses';
import HomeMyCursesWork from '../components/Web/HomeMyCoursesWork';
import ReviewsCourses from '../components/Web/ReviewsCourses';

export default function Home() {
  return (
    <>
      <MainBanner />
      <HomeCourses />
      <HomeMyCursesWork />
      <ReviewsCourses />
    </>
  );
}
