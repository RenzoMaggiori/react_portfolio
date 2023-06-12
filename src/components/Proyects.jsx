import styles, {layout} from "../style"
import { features } from "../constants"

const FeatureCard = ({ icon, title, content, index, link }) => {
  return (
    <a href={link}>
      <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
          <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
        </div>
          <div className="flex-1 flex flex-col ml-3">
            <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
              {title}
            </h4>
            <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
              {content}
            </p>
        </div>
      </div>
    </a>
  )
}

const Proyects = () => {
  return (
    <section id="Proyects" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Previous Proyects</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Here you have some of the proyects I previously worked on. If you want to see more of them click on them to check their Github repository.</p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Proyects