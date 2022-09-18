import type { GetStaticProps } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import { Experience, PageInfo, Project, Skill, Social } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageinfo'
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocial'

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A80A]/80">
      <Head>
        <title>Harsh Portfolio</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>


      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>


      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>


      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>


      <section id="projects" className="snap-start">
        <Projects projects={projects}/>
      </section>


      <section id="contactme" className="snap-start">
        <ContactMe/>
      </section>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return { 
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
