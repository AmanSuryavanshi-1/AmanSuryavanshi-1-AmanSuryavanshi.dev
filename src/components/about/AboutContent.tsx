import { Code2, Paintbrush, FlaskConical } from 'lucide-react';

const AboutContent = () => {
  return (
    <div className="prose prose-forest max-w-none flex flex-col justify-between">
      <section itemScope itemType="http://schema.org/Person" className="flex flex-col gap-3">
        <div className="flex items-start gap-3">
          <Code2 className="w-6 h-6 mt-1 flex-shrink-0 text-lime-500" />
          <p className="text-forest-700 leading-relaxed pr-4 sm:pr-12 lg:pr-16 max-w-3xl">
            Hi, I&apos;m a <span itemProp="jobTitle">web developer and UX designer</span> dedicated to creating beautiful, functional, and user-centered digital experiences. With a keen eye for design and a strong technical foundation, I bridge the gap between aesthetics and functionality, ensuring every project meets modern web standards.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Paintbrush className="w-6 h-6 mt-1 flex-shrink-0  text-lime-500" />
          <p className="text-forest-700 leading-relaxed pr-4 sm:pr-12 lg:pr-16 max-w-3xl">
            I believe that design is about more than just making things look pretty - it&apos;s about solving problems and creating intuitive, enjoyable experiences for users. Whether I&apos;m working on a website or a mobile app, I bring my commitment to design excellence and user-centered thinking to every project I work on, focusing on creating seamless interactions that delight users.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FlaskConical className="w-6 h-6 mt-1 flex-shrink-0  text-lime-500" />
          <p className="text-forest-700 leading-relaxed pr-4 sm:pr-12 lg:pr-16 max-w-3xl">
            My approach combines innovative thinking with practical solutions, ensuring that every project not only meets its objectives but exceeds expectations.
          </p>
        </div>

        <meta itemProp="name" content="Aman Suryavanshi" />
        <meta itemProp="description" content="Web developer and UI/UX designer dedicated to creating beautiful, functional, and user-centered digital experiences." />
      </section>
    </div>
  );
};

export default AboutContent;
