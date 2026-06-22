import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ExternalLink } from 'lucide-react';

const books = [
  {
    title: 'Return on Life',
    subtitle: 'The Architecture of Self-Leadership',
    description: 'The framework that redefines high performance as the return on the life you are building — not just the practice. The book that became the foundation for everything I teach.',
    coverUrl: 'https://media.base44.com/images/public/6a2ac4c5ac7548477e037c2a/d2d664abc_returnonlife.jpg',
    link: '#',
  },
  {
    title: 'Shift',
    subtitle: 'The Operator\'s Guide to Change',
    description: 'How to make the shifts that matter — in leadership, in practice, in life. Not theory. Not inspiration. The actual architecture of change that sticks.',
    coverUrl: 'https://media.base44.com/images/public/6a2ac4c5ac7548477e037c2a/c00e8477a_leahrolingshift.jpg',
    link: '#',
  },
];

export default function Books() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      id="books"
      className="py-20 md:py-40 px-5 md:px-10"
      style={{ backgroundColor: 'var(--cream-dark)' }}
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
              Published Work
            </span>
            <h2
              className="font-serif text-4xl md:text-5xl lg:text-6xl"
              style={{ color: 'var(--ink)', lineHeight: 1.1 }}
            >
              Books that started{' '}
              <em style={{ color: 'var(--teal)' }}>the conversation.</em>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p
              className="body-narrative"
              style={{ color: 'var(--ink)', opacity: 0.7 }}
            >
              Two books. One throughline: high performance is not just high profitability. 
              Published thought leadership that has shaped how dental practice owners think about 
              growth, leadership, and the life on the other side of the work.
            </p>
          </div>
        </motion.div>

        {/* Books */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.15 }}
              className="flex flex-col sm:flex-row gap-6 md:gap-10"
            >
              {/* Book Cover */}
              <div className="flex-shrink-0 w-36 sm:w-44 mx-auto sm:mx-0">
                <div
                  className="relative shadow-lg"
                  style={{
                    boxShadow: '4px 8px 24px rgba(0,0,0,0.12)',
                  }}
                >
                  <img
                    src={book.coverUrl}
                    alt={book.title}
                    className="w-full object-cover grayscale"
                    style={{ aspectRatio: '2/3' }}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(69,99,109,0.15) 0%, transparent 60%)',
                    }}
                  />
                </div>
              </div>

              {/* Book Info */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <h3
                  className="font-serif text-2xl md:text-3xl mb-1"
                  style={{ color: 'var(--ink)' }}
                >
                  {book.title}
                </h3>
                <p
                  className="font-serif italic mb-4"
                  style={{ color: 'var(--teal)', fontSize: '15px' }}
                >
                  {book.subtitle}
                </p>
                <div className="rule-line-teal w-8 mb-4 mx-auto sm:mx-0" />
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: 'var(--ink)', opacity: 0.65, fontSize: '15px', lineHeight: 1.7 }}
                >
                  {book.description}
                </p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:opacity-60 justify-center sm:justify-start"
                  style={{ color: 'var(--teal)', letterSpacing: '0.1em' }}
                >
                  Available on Amazon
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}