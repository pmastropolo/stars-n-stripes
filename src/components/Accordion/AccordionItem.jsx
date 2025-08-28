/* eslint-disable react/prop-types */

const AccordionItem = ({ title, content, isOpen, onToggle, index }) => {
  return (
    <div className="ak-accordion-item" data-aos="fade-up">
      <div
        className={`ak-accordion-title ${isOpen ? "active" : ""}`}
        onClick={() => onToggle(index)}
      >
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="ak-accordion-tab">{content}</div>}
    </div>
  );
};

export default AccordionItem;
