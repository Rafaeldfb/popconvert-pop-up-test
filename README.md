# popconvert-pop-up-test
Teste para a empresa Popconvert

## stack utilizada:
Utilizei um projeto em branco desenvolvido, desenvolvido totalmente por mim, apenas com Vue 3, Vite e (html / sass / Js).

## Sobre:
Consiste em uma página 'lorem ipsum' com botão(ões) que dispara(m) modal(is), simulando pop-ups.
A página  as modais possuem boa responsividade, animaçõe, reatividade e ótimo desempenho.
Há claro pontos que podem ser melhorados, mas esta é uma boa versão para uma primeira entrega / teste.

## Configurações:
o arquivo 'pop-up-test/src/data/modalConfigData.json' possui todas as configurações que alteram o conteúdo do corpo e do formulário da modal.
ex.:
```
{
  "modalConfig": {
    "modalType": "both",
    "modalType_help": "- tipo de conteúdo a ser exibido no corpo da modal: 'video' ou 'game'",

    "formOptions": [
      "username", 
      "email", 
      "phone", 
      "gender"
    ],
    "formOptions__help": "- o número de campos no formulário (de 1 a 4 campos)",

    "formNeedsPermission": "true",
    "formNeedsPermission_help": "- a presença ou não de um checkbox sobre consentimento para coleta de dados",

    "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "videoUrl_help": "- URL do vídeo",

    "modalTitle": "Título da modal",
    "modalTitle_help": "- título",

    "modalSubTitle": "Um subtítulo interessante...",
    "modalSubTitle_help": "- subtítulo"
  }
}
```
