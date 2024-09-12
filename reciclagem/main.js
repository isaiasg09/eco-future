function scrollar() {
  let destination = document.querySelector(".imagens_lixeiras");

  // Scroll to the destination using
  // scrollIntoView method
  destination.scrollIntoView({
    behavior: "smooth",
  });
}

// const vermelha = document.getElementById("vermelha");
// const verde = document.getElementById("verde");
// const azul = document.getElementById("azul");
// const amarela = document.getElementById("amarela");
// const textoContainer = document.querySelector(".text_container");
const textDiv = document.querySelector(".text");

const fadeIn = [{ opacity: "0" }, { opacity: "1" }];

const fadeTiming = {
  duration: 1000,
  iterations: 1,
};

function info(el) {
  let id = el.id;

  textDiv.classList.remove("hide");

  textDiv.animate(fadeIn, fadeTiming);

  switch (id) {
    case "vermelha":
      textDiv.innerHTML =
        "<h2 style='color: red;'>Vermelha</h2> <p>para um dos materiais que mais precisam ser reciclados, pois poluem com grande facilidade, que é o plástico.</p> <p>como garrafas PET, sacolas, embalagens de alimentos, brinquedos, utensílios de plástico e outros objetos desse material. O plástico, sendo um dos maiores poluentes, leva séculos para se decompor, por isso a reciclagem é essencial para reduzir seu impacto ambiental.</p>";

      break;

    case "verde":
      textDiv.innerHTML =
        "<h2 style='color: green;'>Verde</h2> <p> descarte DE vidros de alimentos e outros produtos. </p> <p>como garrafas, potes, frascos de perfume e vidros de conserva. O vidro é um material 100% reciclável e pode ser reutilizado inúmeras vezes sem perder sua qualidade, o que faz da separação correta uma ação crucial para o ciclo sustentável.</p>";

      break;

    case "azul":
      textDiv.innerHTML =
        "<h2 style='color: blue;'>Azul</h2> <p>essa cor identifica lixeiras para papéis e papelões, como folhas de papel usadas, jornais, revistas, caixas de papelão, envelopes e embalagens de papel.</p> <p>A reciclagem de papel ajuda a reduzir o desmatamento, já que o papel reciclado substitui a necessidade de novas matérias-primas provenientes de árvores.</p>";

      break;

    case "amarela":
      textDiv.innerHTML =
        "<h2 style='color: yellow;'>Amarela</h2> <p>dedicada ao despejo de objetos de Metal, como latas de alumínio, tampas de garrafa, objetos de aço e outros itens metálicos</p> <p>O metal, especialmente o alumínio, é altamente reciclável e requer muito menos energia para ser reciclado do que para ser extraído e processado de fontes naturais, reduzindo significativamente o impacto ambiental.</p>";

      break;
    default:
      break;
  }
}

// let pos = 0;
//   clearInterval(id);
//   id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + 'px';
//       elem.style.left = pos + 'px';
//     }
//   }
