"use client";

import Image from "next/image";
import { Tabs } from "./ui/AnimatedTabs";

const tabs = [
  {
    title: "Best Buy Health",
    value: 'bestbuy health',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-purple">
        <h2 className="text-xl md:text-4xl">Best Buy Helath</h2>
        <h3 className="text-lg md:text-2xl text-purple-500">Frontend Engineer II</h3>
        <div>
          <ul className="list-disc mt-4">
            <li className="leading-relaxed py-2">Played a pivotal role in developing various multi-step forms for senior living facilities&apos; representatives to assign, request, and maintain Best Buy Health devices. Leveraged <span className="text-purple-500">TypeScript</span>, <span className="text-purple-500">React</span>, and <span className="text-purple-500">React Hook Forms</span> to deliver advanced, scalable, and user-friendly features.</li>
            <li className="leading-relaxed py-2">Developed a dashboard table component that showcased summaries of all form statuses and user information using <span className="text-purple-500">React</span>, <span className="text-purple-500">React Query</span>, and <span className="text-purple-500">AG Grid tables</span>.</li>
            <li className="leading-relaxed py-2">Contributed significantly to the development of the team&apos;s UI library using <span className="text-purple-500">Vanilla Extract</span>, <span className="text-purple-500">Recipe</span>, and <span className="text-purple-500">Storybook</span>, which enhanced design consistency and facilitated developer collaboration across projects.</li>
            <li className="leading-relxaed py-2">
              Spearheaded a quality improvement initiative by implementing unit tests for each shared component in the UI library, achieving a <span className="text-purple-500">50% improvement</span> in comprehensive code coverage using <span className="text-purple-500">React Testing Library</span>.
            </li>
            <li className="leading-relaxed py-2">
              Conducted a thorough investigation and analysis of accessibility standards, ensuring full compliance with the latest <span className="text-purple-500">WCAG guidelines</span> and enhancing user accessibility and inclusivity, leading to a <span className="text-purple-500">30% increase</span> in accessibility compliance scores.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "IKEA",
    value: 'ikea',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-purple">
        <h2 className="text-xl md:text-4xl">IKEA</h2>
        <h3 className="text-lg md:text-2xl text-purple-500">Frontend Engineer</h3>
        <div>
          <ul className="list-disc mt-4">
            <span className="text-purple-500"></span>
            <li className="leading-relxaed py-2">Engineered IKEA’s web checkout page using <span className="text-purple-500">TypeScript</span>, <span className="text-purple-500">React</span>, <span className="text-purple-500">React Hooks</span>, and <span className="text-purple-500">GraphQL</span>, ensuring a robust and user-friendly checkout process.</li>
            <li className="leading-relxaed py-2">Led the design and implementation of IKEA’s availability feature at checkout, enhancing customer experience through accurate stock information and <span className="text-purple-500">improving the checkout experience rate by 40%</span>.</li>
            <li className="leading-relxaed py-2">Utilized <span className="text-purple-500">Optimizely Web</span> and <span className="text-purple-500">Optimizely Fullstack</span> for A/B testing, driving the campaign for the abandonment cart modal, which led to a <span className="text-purple-500">150% increase</span> in checkout conversions.</li>
            <li className="leading-relxaed py-2">Utilized Sentry for performance monitoring and facilitated the transition from <span className="text-purple-500">Redux to Context API</span>, integrating the new <span className="text-purple-500">URQL</span> GraphQL client for improved state management and data fetching.</li>
            <li className="leading-relxaed py-2">Led the refactoring of classic React components to <span className="text-purple-500">React Hooks</span>, improving code efficiency and component reusability.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Macquarie",
    value: 'macquarie',
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 font-bold text-white bg-purple">
        <h2 className="text-xl md:text-4xl">Macquarie Group</h2>
        <h3 className="text-lg md:text-2xl text-purple-500">Web Developer</h3>
        <div>
          <ul className="list-disc mt-4">
            <span className="text-purple-500"></span>
            <li className="leading-relxaed py-2">Developed engaging microsites and landing pages for targeted marketing campaigns using <span className="text-purple-500">HTML</span>, <span className="text-purple-500">CSS</span>, <span className="text-purple-500">SASS</span>, <span className="text-purple-500">JavaScript</span>, and <span className="text-purple-500">jQuery</span>, resulting in visually appealing and user-friendly experiences.</li>
            <li className="leading-relxaed py-2">Successfully converted PDF designs into functional websites using modern web development technologies.</li>
            <li className="leading-relxaed py-2">Managed and optimized Macquarie&apos;s marketing pages using <span className="text-purple-500">Sitecore</span>, leveraging templates to streamline processes and reduce redundant workflows, resulting in improved efficiency and consistency across all web content.</li>
            <li className="leading-relxaed py-2">Developed dynamic data visualizations using <span className="text-purple-500">Chart.js</span> to enhance user experience by providing clear and interactive representations of complex datasets, leading to improved data comprehension and user engagement.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

function PortfolioTabs() {
  return (
    <>
      <div className='pt-20 my-20' id="workHistory">
        <h1 className="heading">
          Work {' '}
          <span className='text-purple'>History</span>
        </h1>
        <div className='flex flex-wrap items-center p-4 gap-16'>
          <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start mb-40">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>
    </>

  );
}

export default PortfolioTabs