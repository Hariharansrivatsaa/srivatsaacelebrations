import React, { useEffect, useState } from "react";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. Can I buy crackers online only during Diwali ?",
      answer:
        "You can buy crackers all year round for personal use. But purchase for stocking and resale calls for suitable licenses to be available.",
    },
    {
      question:
        "2. How can I be assured of cracker quality when it is bought online ?",
      answer:
        "Crackers are sold by various middlemen and traders. This may lead to old stock or spurious stock being sold. Always check the source of supply. At Srivatsaa Celebrations, the crackers are manufactured at sister concern and quality checked in house and shipped directly to your doorstep in a carefully packed boxes.",
    },
    {
      question:
        "3. Should I register to buy the crackers at srivatsaacelebrations.com ?",
      answer: "Yes, you only need to have a mobile number or an email address.",
    },
    {
      question: "4. Chinese crackers are cheap, can we buy them ?",
      answer:
        "Imported firecrackers are prohibited. The Department of Industrial Policy & Promotion, Ministry of Commerce & Industry, has prohibited the illegal import, possession, and sale of foreign-made pyrotechnics. The production, possession, usage, and sale of any explosive containing sulphur or sulphurate in combination with any chlorate is prohibited in the country.",
    },
    {
      question: "5. Do fireworks work in the rain ?",
      answer:
        "Well, no. Firecrackers require dry conditions to light up. When a cracker gets wet, don't try to dry and reuse it. Wet crackers should be disposed away safely.",
    },
    {
      question: "6. What is the minimum age for bursting fireworks ?",
      answer:
        "Please check the product packaging for age restrictions. Please keep in mind that regardless of the age limit, children should always be supervised while they burst crackers.",
    },
  ];

  return (
    <>
      <section className="my-5">
        <div className="container">
          <div>
            {faqs.map((faq, index) => (
              <div key={index}>
                <div
                  onClick={() => toggleAccordion(index)}
                  style={{
                    cursor: "pointer",
                    background: "transparent",
                    padding: "10px",
                    margin: "5px 0",
                    fontWeight: "bolder",
                    fontSize: "18px",
                  }}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div
                    style={{
                      padding: "10px",
                      margin: "5px 0",
                      color: "#0091d6",
                      fontSize: "17px",
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
