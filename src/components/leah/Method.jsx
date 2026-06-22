import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const frameworks = [
  {
    id: 'STEAR',
    tag: 'Self-Leadership',
    title: 'STEAR',
    subtitle: 'The self-leadership framework',
    body: 'The five-part model for how a high performing leader steers their own thinking, energy, and action before steering anyone else\'s. The foundation underneath everything else.',
    detail: 'Before you can lead a practice, lead a team, or lead through uncertainty — you have to lead yourself. STEAR is the architecture for that. It maps the five internal elements that determine whether you show up at your best or your most reactive, your most strategic or your most stuck.',
    keywords: ['Situation', 'Thoughts', 'Emotions', 'Action', 'Results'],
  },
  {
    id: 'SPARK',
    tag: 'Execution',
    title: 'SPARK',
    subtitle: 'The execution framework',
    body: 'The five-step protocol for moving from insight to action without losing momentum. The bridge between coaching conversation and operational change.',
    detail: 'Most coaching conversations end with intention. SPARK ensures they end with traction. It is the protocol that converts the clarity of the session into the specificity of a next action — and follows it all the way through to completion.',
    keywords: ['State the Facts', 'Paint the Impact', 'Ask & Acknowledge', 'Re-Clarify', 'Know the Next Steps'],
  },
  {
    id: 'HEAR',
    tag: 'Communication',
    title: 'HEAR',
    subtitle: 'The communication framework',
    body: 'How leaders actually have the conversations that matter. With team, partners, family. The skill that determines whether the practice runs on clarity or on assumption.',
    detail: 'Most leadership breakdowns are communication breakdowns. HEAR is the framework that closes the gap between what you mean and what lands. It is the discipline that transforms difficult conversations from something you avoid into something you do well.',
    keywords: ['Hold', 'Explore', 'Ask', 'Respond'],
  },
  {
    id: 'InnerBoard',
    tag: 'Archetypes',
    title: 'InnerBoard',
    subtitle: 'The archetypes framework',
    body: 'The four members of every operator\'s inner board. Protector, Critic, Dreamer, CEO. Understanding which one is running the room at any moment, and learning to put the right one in charge.',
    detail: 'Every operator has an internal cast of characters. The one in charge in any given moment determines the decision that gets made. InnerBoard names them, maps them, and gives you the ability to choose who chairs the meeting — rather than discovering who did after the fact.',
    keywords: ['Protector', 'Critic', 'Dreamer', 'CEO'],
  },
  {
    id: 'Habits',
    tag: 'High Performance',
    title: 'Habits',
    subtitle: 'The certified high-performance framework',
    body: 'Clarity. Energy. Courage. Productivity. Influence. Raise Necessity. The trainable habits that distinguish high performers from everyone else, researched across more than 190 countries.',
    detail: 'Researched and validated across more than 190 countries, this is the framework behind some of the world\'s top operators. I am among a limited number of coaches certified to deliver it. These are not personality traits — they are trainable. And they compound.',
    keywords: ['Clarity', 'Energy', 'Courage', 'Productivity', 'Influence', 'Raise Necessity'],
    certified: true,
  },
];

export default function Method() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="method"
      ref={ref}
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--canvas)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-20"
        >
          <div className="lg:col-span-5">
            <span className="section-label block mb-6" style={{ color: 'var(--teal)' }}>
              The Method
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl"
              style={{ color: 'var(--ink)', lineHeight: 1.1 }}
            >
              Five{' '}
              <em style={{ color: 'var(--teal)' }}>frameworks.</em>
              <br />
              One operator.
            </h2>
          </div>

        </motion.div>

        {/* Framework Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Tab List — horizontal scroll on mobile */}
          <div className="lg:col-span-4 lg:border-r border-b lg:border-b-0 overflow-x-auto"
            style={{ borderColor: 'rgba(18,18,18,0.12)' }}
          >
            <div className="flex lg:flex-col flex-row overflow-x-auto pb-0 lg:pb-0">
            {frameworks.map((fw, i) => (
              <motion.button
                key={fw.id}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setActive(i)}
                className="flex-shrink-0 lg:w-full text-left pr-6 lg:pr-10 py-5 lg:py-7 border-b transition-all duration-300 group"
                style={{
                  borderColor: 'rgba(18,18,18,0.10)',
                  borderLeft: active === i ? `2px solid var(--teal)` : '2px solid transparent',
                  paddingLeft: active === i ? '16px' : '8px',
                  minWidth: '140px',
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="section-label block mb-1"
                      style={{ color: active === i ? 'var(--teal)' : 'rgba(18,18,18,0.45)' }}
                    >
                      {fw.tag}
                    </span>
                    <span
                      className="font-serif text-2xl transition-colors duration-300"
                      style={{ color: active === i ? 'var(--ink)' : 'rgba(18,18,18,0.6)' }}
                    >
                      {fw.title}
                    </span>
                  </div>
                  <span
                    className="text-xs transition-all duration-300"
                    style={{ color: 'var(--teal)', opacity: active === i ? 1 : 0 }}
                  >
                    →
                  </span>
                </div>
              </motion.button>
            ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="lg:col-span-8 lg:pl-16 pt-8 lg:pt-0 min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full flex flex-col justify-start gap-8 pt-2"
              >
                {frameworks[active].certified && (
                  <div className="inline-flex items-center gap-2 self-start">
                    <span className="section-label px-3 py-1.5 border"
                      style={{ borderColor: 'var(--teal)', color: 'var(--teal)' }}
                    >
                      Certified Framework
                    </span>
                  </div>
                )}

                <div>
                  <h3
                    className="font-serif text-3xl md:text-4xl lg:text-5xl mb-3"
                    style={{ color: 'var(--ink)', lineHeight: 1.1 }}
                  >
                    {frameworks[active].title}
                  </h3>
                  <p
                    className="font-serif italic text-lg"
                    style={{ color: 'var(--teal)' }}
                  >
                    {frameworks[active].subtitle}
                  </p>
                </div>

                <div className="rule-line-teal w-12" />

                <p
                  className="body-narrative"
                  style={{ color: 'var(--ink)', opacity: 0.85, fontSize: '18px' }}
                >
                  {frameworks[active].body}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--ink)', opacity: 0.6, fontSize: '16px' }}
                >
                  {frameworks[active].detail}
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                  {frameworks[active].keywords.map((k) => (
                    <span
                      key={k}
                      className="section-label px-4 py-2"
                      style={{
                        backgroundColor: 'rgba(69,99,109,0.08)',
                        color: 'var(--teal)',
                      }}
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}