import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import WavyLine from '@/components/WavyLine.jsx';
import TriangleAccent from '@/components/TriangleAccent.jsx';
import CircleGlow from '@/components/CircleGlow.jsx';
import AvatarGrid from '@/components/AvatarGrid.jsx';
import FloatingAvatars from '@/components/FloatingAvatars.jsx';
import ServiceRow from '@/components/ServiceRow.jsx';
import Newsletter from '@/components/Newsletter.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <Helmet>
        <title>Elementum - Changing the Status Quo</title>
        <meta name="description" content="We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        <main className="flex-1">
          {/* HERO SECTION */}
          <section className="relative pt-24 pb-16 md:pt-32 md:pb-24">
  <img
    src="img30.jpeg"
    alt=""
    aria-hidden="true"
    style={{
      position: 'absolute',
      width: '60px',
      height: '200px',
      top: '600.5px',
      left: '-8.5px',
      transformOrigin: 'center center',
      pointerEvents: 'none',
      zIndex: 0,
    }}
  />
  <img
    src="img31.jpeg"
    alt=""
    aria-hidden="true"
    style={{
      position: 'absolute',
      width: '100px',
      height: '200px',
      top: '602.5px',
      left: '53.5px',
      transformOrigin: 'center center',
      pointerEvents: 'none',
      zIndex: 0.5,
      opacity:100,
    }}
  />


            <div className="container-elementum">
              <motion.div 
                initial="hidden" animate="visible" variants={fadeInUp}
                className="text-center max-w-5xl mx-auto flex flex-col items-center">
                {/* --- FIGMA 'HEAD' BOUNDING LAYER CONTAINER (1332px x 477px) --- */}
                <div className="relative flex flex-col items-center justify-center w-full max-w-[1332px] min-h-[477px] mx-auto">
                  
                  {/* PERFECTLY FLUID H1 HEADLINE WITH INLINE VECTOR ACCENT LAYERING */}
                  <h1 className="mb-8 font-extrabold tracking-tight text-4xl sm:text-6xl md:text-7xl leading-[1.3] relative z-10 w-full max-w-[1305px]">
                    The{' '}
                    {/* Golden Underline Accent Layer matching exact 6px #FFC250 Border token natively */}
                    <span className="relative inline-block pb-3">
                      thinkers
                      <WavyLine className="absolute bottom-[-15px] left-0 w-full h-[32px] pointer-events-none z-0" />
                    </span>{' '}
                    and doers were{' '}ch
                    <span 
                      style={{ backgroundColor: '#FFC2EA', borderRadius: '100px' }} 
                      className="right-1 inline-block  pt-4 pb-4 pl-2 pr-2 leading-none transform -rotate-1">anging
                    </span>{' '}
                    the{' '}
                    <span 
                      style={{ backgroundColor: '#D7EEDD', borderRadius: '100px' }} 
                      className="mx-1 inline-block align-middle pt-4 pb-4 pl-2 pr-2 leading-none"
                    >
                      status
                    </span>{' '}
                    quo with
                  </h1>
                  
                  {/* Subtext description box within the selected area bounds */}
                  <p className="text-lg sm:text-[24px] sm:leading-[36px] text-neutral-800 xl:w-[831px] xl:h-[72px] mx-auto leading-relaxed relative z-10 mt-[120px] md:mt-2">
                    We are a team of strategists, designers communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
                  </p>
                </div>
                
                {/* Team Avatars Cluster */}
                <AvatarGrid />
              </motion.div>
            </div>
          </section>
          
          {/* FEATURES SECTION BLOCK A */}
          {/* FEATURES SECTION BLOCK A */}
<section id="studio" className="section-padding overflow-hidden">
  <div className="container-elementum">
    <motion.div 
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
      className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      {/* TEXT — stacks below image on mobile */}
      <div className="order-2 lg:order-1">
        {/* ✅ Removed fixed w-[724px] h-[141px] top-[129px] — breaks mobile */}
        <h2 className="mb-6 font-bold text-2xl sm:text-3xl md:text-5xl leading-tight z-1">
          <span className="relative inline-block pb-3">
            Tomorrow
            <WavyLine className="absolute bottom-[-15px] left-0 w-full h-[32px] pointer-events-none z-0" />
          </span>{' '}
          should be better than today
        </h2>
        <p className="text-base sm:text-xl text-muted-foreground mb-8 leading-relaxed">
          We partner with ambitious organizations to create meaningful change. Our approach 
          combines strategic thinking with creative execution to deliver results that matter.
        </p>
        <a href="#services" className="inline-flex items-center text-base sm:text-lg font-bold hover:text-[hsl(var(--elementum-purple))] transition-colors group">
          Read more <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
        </a>
      </div>

      {/* IMAGE — shows first on mobile */}
      <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:max-w-none">
        <CircleGlow size={400} className="-top-10 -left-10" />
        <TriangleAccent size={200} className="absolute -bottom-16 -right-10 z-0 rotate-12" />
        
        <div className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl">
          <img 
            src="img18.jpeg" 
            alt="Two men in business meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </motion.div>
  </div>
</section>
          {/* FEATURES SECTION BLOCK B */}
          <section className="section-padding overflow-hidden">
            <div className="container-elementum">
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                  <TriangleAccent size={120} className="absolute -top-10 -left-10 z-0 -rotate-12" />
                  <TriangleAccent size={150} className="absolute -bottom-12 -right-6 z-0 rotate-45" />
                  
                  <div className="relative z-10 aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                      alt="Two colleagues at desk"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="mb-6 font-bold text-3xl md:text-5xl leading-tight relative">
                    See how we can help you{' '}
                    <span className="relative inline-block pb-3">
                      Progress
                      <WavyLine className="absolute bottom-[-15px] left-0 w-full h-[32px] pointer-events-none z-0" />
                    </span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    From brand strategy to digital experiences, we bring together diverse expertise to solve complex challenges and create lasting impact through fearless insights.
                  </p>
                  <a href="#services" className="inline-flex items-center text-lg font-bold hover:text-[hsl(var(--elementum-purple))] transition-colors group">
                    Read more <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* SERVICES SECTION */}
          <section id="services" className="section-padding relative">
            <div className="container-elementum">
              <div className="relative mb-16 max-w-5xl mx-auto">
                <motion.h2 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
                  className="text-left font-bold text-3xl md:text-5xl relative">
                  What we{' '}
                  <span 
                    style={{ backgroundColor: '#D7EEDD', borderRadius: '100px' }} 
                    className="mx-1 inline-block align-middle pt-4 pb-4 pl-2 pr-2 leading-none">
                    can
                  </span>{' '}
                  <span className="relative inline-block pb-3">
                      offer
                      <WavyLine className="absolute bottom-[-15px] left-0 w-full h-[32px] pointer-events-none z-0" />
                    </span>{' '}
                  you!
                </motion.h2>
                <div className="absolute -top-12 right-0 md:right-10 opacity-60 hidden md:block">
                </div>
              </div>

              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
                className="flex flex-col max-w-5xl mx-auto"
              >
                <ServiceRow 
                  leftText="Office of multiple interest content"
                  centerText="Collaborative & partnership"
                />
                <ServiceRow 
                  leftText="The hanger US Air force digital experimental"
                  centerText="We talk about our weight"
                />
                <ServiceRow 
                  leftText="Delta faucet content, social, digital"
                  centerText="Piloting digital confidence"
                  badge="✨"
                  isLast={true}
                />
              </motion.div>
            </div>
          </section>
{/* TESTIMONIALS SECTION */}
<section className="section-padding overflow-visible relative bg-[hsl(var(--elementum-mint-light))/40]">
  
  {/* Heading inside container */}
  <div className="container-elementum flex flex-col items-center">
    <motion.h2 
      initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
      className="text-center mb-24 max-w-4xl font-bold text-3xl md:text-5xl relative">
      What our customer says{' '}
      <span className="relative inline-block pb-3">
                      About Us
                      <WavyLine className="absolute bottom-[-15px] left-0 w-full h-[32px] pointer-events-none z-0" />
                    </span>{' '}
    </motion.h2>
  </div>

  {/* Card + Avatars — fully outside container so nothing clips */}
  <div className="w-full flex justify-center overflow-visible px-6">
    <div className="relative w-full max-w-3xl overflow-visible">
      <FloatingAvatars />
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        className="relative z-10 bg-white rounded-3xl p-10 md:p-16 shadow-xl"
      >
        <span className="absolute top-6 left-6 text-6xl text-[hsl(var(--elementum-purple))] opacity-40 font-serif leading-none select-none pointer-events-none">"</span>
        <span className="absolute bottom-6 right-6 text-6xl text-[hsl(var(--elementum-purple))] opacity-40 font-serif leading-none select-none pointer-events-none">"</span>

        <blockquote className="text-xl md:text-2xl font-medium leading-relaxed text-center mb-2 relative z-10">
          Elementum delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use of technologies that the company hasnt used, which have also proved to be easy to use and reliable
        </blockquote>
      </motion.div>
    </div>
  </div>

  {/* Wavy line back inside container */}
  <div className="container-elementum flex justify-center">
    <div className="mt-20 opacity-60">
    </div>
  </div>
</section>
        </main>
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
export default HomePage;