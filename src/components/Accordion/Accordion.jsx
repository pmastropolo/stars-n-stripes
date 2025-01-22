import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const faqItems = [
  {
    title: "What types of classic cars do you specialize in?",
    content:
      "At Stars and Stripes Automotive LLC, we specialize in restoring, repairing, and customizing vintage and classic cars, including American muscle cars, European classics, and antique models."
  },
  {
    title: "Do you provide custom fabrication services?",
    content:
      "Yes, we offer custom fabrication services, including metalwork, chassis modifications, and bespoke components tailored to your car’s specific needs."
  },
  {
    title: "Can you restore the interior of my vintage car?",
    content:
      "Absolutely! We provide comprehensive interior restoration services, including custom upholstery, leather repairs, and headliner replacements."
  },
  {
    title: "How do I maintain the paint on my restored car?",
    content:
      "We recommend regular washing with non-abrasive cleaners, waxing every 3-6 months, and using protective covers to maintain your car’s pristine finish."
  },
  {
    title: "What guarantees do you offer for your restoration work?",
    content:
      "At Stars and Stripes Automotive LLC, we guarantee craftsmanship and attention to detail in all our restoration projects. While vintage and classic car parts may have inherent limitations, we ensure that all labor and custom work meet the highest standards. If any issues arise due to our work, we will address them promptly to maintain your trust and satisfaction."
  },
];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <div className="ak-accordion">
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Accordion;
