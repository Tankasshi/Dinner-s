const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    // fecha todos os FAQs que não são o que foi clicado
    faqs.forEach(otherFaq => {
      if (otherFaq !== faq && otherFaq.classList.contains("active")) {
        otherFaq.classList.remove("active");
      }
    });
    // adiciona ou remove a classe "active" no FAQ clicado
    faq.classList.toggle("active");
  });
});
