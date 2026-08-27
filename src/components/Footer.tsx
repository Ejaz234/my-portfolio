import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReveal } from "../hooks/useReveal";
import { useLiveClock } from "../hooks/useLiveClock";
import { quotes } from "../data/quotes";
import { profile } from "../data/profile";
import "./Footer.css";

const ROTATE_MS = 6000;

export default function Footer() {
  const ref = useReveal<HTMLElement>();
  const [quoteIndex, setQuoteIndex] = useState(0);
  const time = useLiveClock("Asia/Kolkata");

  useEffect(() => {
    const id = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, []);

  const quote = quotes[quoteIndex];

  return (
    <footer id="contact" className="site-footer reveal" ref={ref}>

        <div className="scrolled-far">
          <p className="eyebrow">Scrolled Too Far</p>
          <p className="scrolled-line">
            If you've read this far, you might be interested in collaborating
            or building something great.
          </p>
          <a className="btn primary" href={`mailto:${profile.email}`}>
            Let's Talk →
          </a>
        </div>

        <div className="quote-block">
          <AnimatePresence mode="wait">
            <motion.div
              key={quoteIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="quote-inner"
            >
              <span className="quote-mark">&ldquo;</span>
              <p className="quote-text">{quote.text}</p>
              <p className="quote-author">— {quote.author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="footer-credits">
          <p>
            Designed &amp; Developed by <b>{profile.name}</b>
          </p>
          <p className="footer-copyright">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="footer-clock">
            <span className="live-dot" /> {profile.location} · {time}
          </p>
        </div>
      
    </footer>
  );
}
