import styles from "../style"
import { aboutMe } from "../assets"

const Hero = () => (
  <section id='About me' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-col md:flex-row justify-between items-center w-full'>
        <div className='md:w-1/2'>
          <h1 className='font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Hi There I'm <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>Renzo Maggiori</span>
          </h1>
          <p className={`${styles.paragraph} max-w-[420px] mt-5`}>As a current student at Epitech Spain studying Software Development & IT Expertise, I am seeking internships to gain hands-on experience in the industry. I am a passionate and motivated individual with a strong interest in technology and problem-solving. Also, I am excited to contribute my talents and collaborate with professionals in the field to further develop my skills and knowledge.</p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 items-center justify-center`}>
          <img src={aboutMe} alt="about me" className='w-full h-auto rounded-lg'/>
        </div>
      </div>
    </div>
  </section>
);



export default Hero