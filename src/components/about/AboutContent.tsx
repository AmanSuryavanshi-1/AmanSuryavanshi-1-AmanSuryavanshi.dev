import { Code2, Paintbrush, MousePointerClick } from 'lucide-react';
const AboutContent = () => {
  return (
    <div className="prose prose-forest max-w-none">
      <section itemScope itemType="http://schema.org/Person" className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold text-forest-900">
          Welcome to my digital space!
        </h2>

        <div className="flex items-start gap-3">
          <Code2 className="w-6 h-6 mt-1 flex-shrink-0 text-lime-500" />
          <p className="text-forest-700 leading-relaxed pr-4 sm:pr-12 lg:pr-16 max-w-3xl">
          Hi, I&apos;m a <span itemProp="jobTitle">web developer and UX designer</span> dedicated to creating beautiful, functional, and user-centered digital experiences. With a keen eye for design and a strong technical foundation, I bridge the gap between aesthetics and functionality, ensuring every project meets modern web standards.

            {/* Hi, I&apos;m a <span itemProp="jobTitle">web developer and UX designer</span> crafting beautiful, functional digital experiences with modern web technologies. */}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Paintbrush className="w-6 h-6 mt-1 flex-shrink-0 text-lime-500" />
          <p className="text-forest-700 leading-relaxed pr-4 sm:pr-12 lg:pr-16 max-w-3xl">
          {/* I believe that design is about more than just making things look pretty - it&apos;s about solving problems and creating intuitive, enjoyable experiences for users. Whether I&apos;m working on a website or a mobile app, I bring my commitment to design excellence and user-centered thinking to every project I work on, focusing on creating seamless interactions that delight users. */}

            I combine innovative design with practical solutions, focusing on creating seamless interactions that delight users.
          </p>
        </div>

        <div className="flex items-start gap-3 mt-2">
          <MousePointerClick className="w-6 h-6 mt-1 flex-shrink-0 text-lime-500" />
          <p className="text-forest-700/80 leading-relaxed italic">
            Click on &apos;Learn More&apos; below to explore my skills & contributions
          </p>
        </div>

        {/* <Link 
          href="/about" 
          className="group flex items-center gap-2 text-forest-700 hover:text-lime-600 transition-colors duration-200 mt-2 no-underline"
        >
          Learn more about my skills & contributions
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </Link> */}

        <meta itemProp="name" content="Aman Suryavanshi" />
        <meta itemProp="description" content="Web developer and UI/UX designer dedicated to creating beautiful, functional, and user-centered digital experiences." />
      </section>
    </div>
  );
};

export default AboutContent;
