import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

import BlueButton from "./UI/BlueButton";

import styles from "./Faq.module.css";
import Arrow from "../assets/icon-arrow.svg";

const Faq = () => {
  const [expand, setIsExpand] = useState(null);

  const faqs = [
    {
      q: "What is Bookmark?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      q: "How can I request a new browser?",
      a: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      q: "Is there a mobile app?",
      a: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      q: "What about other Chromium browsers?",
      a: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ];

  const toggle = (i) => {
    setIsExpand(expand === i ? null : i); // close if clicked again
  };

  return (
    <section className={styles.faq}>
      <h1>Frequently Asked Questions</h1>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <ul className={styles.faqQuestions}>
        {faqs.map((faq, i) => (
          <li className={styles.li__content} key={i}>
            <div className={styles.li__questions}>
              {faq.q}
              <motion.img
                src={Arrow}
                alt="arrow"
                animate={{rotate: expand === i ? 180 : 0}}
                transition={{duration: 0.3}}
                onClick={() => toggle(i)}
              />
            </div>
            <AnimatePresence>
              {expand === i && (
                <motion.div
                  className={styles.li__answers}
                  initial={{height: 0, opacity: 0}}
                  animate={{height: "auto", opacity: 0.75}}
                  exit={{height: 0, opacity: 0}}
                  transition={{duration: 0.3}}
                >
                  <p>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
      <BlueButton className={styles.button}>More Info</BlueButton>
    </section>
  );
};

export default Faq;
