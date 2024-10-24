<template>
  <ULandingHero
    class="hero-image relative overflow-hidden bg-no-repeat"
    title="Notre Vision - Une entreprise Durable et Humaine"
    description="Construire un futur qui respecte l'humain et l'environnement"
  >
  </ULandingHero>

  <ULandingSection
    title="Nos Principes Fondamentaux"
    description="Nous pensons qu'une entreprise prospère est une entreprise qui respecte l'équilibre de ses collaborateurs, soutient la durabilité et agit de manière éthique et responsable. Notre vision est d'inspirer une nouvelle façon de travailler, où chaque personne est valorisée, et où l'impact environnemental est une priorité constante."
    :features="principles"
  />

  <ULandingSection
    title="Engagement Sociétal et Inclusion"
    description="Nous croyons fermement que chaque collaborateur a des idées précieuses à apporter. C'est pourquoi nous encourageons l'autonomie et la prise d'initiatives. Notre environnement de travail permet à chacun de contribuer activement, d’exprimer ses talents et de participer au développement d’une entreprise qui se veut innovante et équitable.
Nous ne sommes pas seulement engagé en interne, mais aussi vis-à-vis de la société. Nous soutenons des initiatives à impact, notamment en participant à des associations telles que l'IT Woman Movement, qui promeut l'inclusivité dans le secteur technologique. Nous croyons que la tech doit être ouverte à toutes et à tous, et nous agissons pour que cela devienne une réalité."
    :features="engagements"
    align="left"
  >
    <img
      src="~/assets/images/philosophy-engagement.png"
      alt="Engagement"
      class="w-full rounded-3xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
    />
  </ULandingSection>

  <ULandingSection
    title="Autonomie et Formation Continue"
    description="Nous proposons à nos collaborateurs un accès illimité à la formation continue, axée sur l'éthique professionnelle et le développement personnel. Les modules de micro learning sont disponibles pour aider chacun à progresser à son propre rythme, dans un cadre flexible et respectueux du temps personnel. Ces formations sont adaptées aux besoins spécifiques de chaque collaborateur, permettant d'explorer des thématiques variées allant des compétences techniques avancées aux soft skills essentiels pour évoluer dans un environnement professionnel moderne. Nous encourageons nos employés à consacrer du temps à leur développement, sans pression, et à profiter de cette opportunité pour grandir tant sur le plan personnel que professionnel. De plus, nous mettons à disposition des ressources externes et des sessions avec des experts pour offrir des perspectives nouvelles et enrichissantes, garantissant ainsi un apprentissage holistique et continu."
  />
  <ULandingSection
    title="Ensemble, Construisons un Avenir Meilleur"
    description="Nous souhaitons que notre entreprise puisse être un exemple d'entreprise qui conjugue innovation, respect de l'humain et durabilité. Nous croyons que notre vision, centrée sur la transparence, l'autonomie et l'engagement, peut véritablement inspirer une nouvelle manière de travailler. Une manière où l'épanouissement personnel, la croissance professionnelle, le respect de l'environnement, et la collaboration active sont au cœur de la réussite collective. En plaçant nos collaborateurs au centre de nos préoccupations, nous créons un espace où chacun peut évoluer et contribuer à des projets qui ont un impact réel. Ensemble, faisons de MAX Digital Services un acteur de changement positif, tant pour nos collaborateurs que pour la société, en démontrant qu'il est possible de concilier performance économique, bien-être des employés et responsabilité environnementale. Nous sommes engagés à prouver que la réussite d'une entreprise peut être fondée sur des principes de respect et de durabilité, en créant un environnement qui nourrit l'innovation, tout en renforçant la cohésion sociale et l'impact sociétal de chaque initiative que nous entreprenons."
  />
</template>
<script setup lang="ts">
const principles = [
  {
    name: "L’Humain au Cœur de Notre Entreprise",
    description:
      "Nous sommes une entreprise libérée, centrée sur l'humain. Nous croyons en la force de chaque individu et nous nous efforçons de créer un environnement où chaque membre de l'équipe peut s'épanouir, prendre des initiatives et contribuer à l'amélioration de notre entreprise. L'équilibre entre vie professionnelle et personnelle est essentiel à cet épanouissement, et nous respectons ce besoin avec soin.",
  },
  {
    name: "Transparence et Accès à l'Information",
    description:
      "La transparence est l'un des piliers fondamentaux de notre philosophie. Chaque collaborateur a accès aux informations essentielles de l'entreprise et peut participer activement aux prises de décision. Nous avons confiance en nos collaborateurs et croyons qu'une information partagée favorise la responsabilisation et la collaboration.",
  },
  {
    name: "Durabilité et Responsabilité Environnementale",
    description:
      "Nous nous engageons à respecter notre environnement et à adopter des pratiques durables. Cela passe par des achats responsables, comme l'utilisation d'ordinateurs portables Framework modulaires, facilement réparables et évolutifs, ainsi que par notre soutien à des initiatives locales de développement durable. Pour nous, la croissance doit se faire en harmonie avec la nature.",
  },
  {
    name: "Libération du Potentiel et Prise d'Initiative",
    description:
      "Nous croyons fermement que chaque collaborateur a des idées précieuses à apporter. C'est pourquoi nous encourageons l'autonomie et la prise d'initiatives. Notre environnement de travail permet à chacun de contribuer activement, d’exprimer ses talents et de participer au développement d’une entreprise qui se veut innovante et équitable.",
  },
];
const engagements = [
  {
    name: "Encourager l'autonomie et la prise d'initiative",
    description:
      "Nous donnons à chaque collaborateur les moyens de contribuer activement en proposant des idées, en développant des projets novateurs, et en participant à des initiatives qui ont un impact direct sur la croissance de notre entreprise. Nous croyons que les meilleures idées viennent de ceux qui sont directement impliqués, et nous mettons tout en œuvre pour que chaque voix soit entendue et respectée.",
  },
  {
    name: "Soutien aux initiatives inclusives",
    description:
      "Participation à des associations comme l'IT Woman Movement pour promouvoir l'inclusivité dans la tech. Nous collaborons avec d'autres organisations pour soutenir des programmes qui visent à élargir l'accès aux métiers de la technologie, en particulier pour les personnes sous-représentées, telles que les femmes et les minorités. Notre objectif est de créer un secteur plus diversifié et équitable.",
  },
  {
    name: "Tech ouverte à tous ",
    description:
      " Promouvoir une culture ouverte et accessible, pour que la technologie soit inclusive pour toutes et tous. Nous organisons des ateliers, des conférences et des événements de sensibilisation pour inspirer et encourager les jeunes talents, quels que soient leur parcours ou leurs origines, à rejoindre le secteur technologique. Nous croyons qu'en démystifiant la technologie et en la rendant accessible, nous contribuons à une société plus inclusive.",
  },
  {
    name: "Engagement pour l'impact positif",
    description:
      "Soutenir des initiatives qui favorisent le bien-être et l'inclusion dans notre société. Nous investissons dans des projets communautaires et sociaux, soutenons des organisations qui œuvrent pour le bien-être des personnes vulnérables, et participons à des événements caritatifs. Nous nous engageons à favoriser des actions concrètes qui améliorent le quotidien des individus et renforcent la solidarité dans notre communauté.",
  },
];
</script>
<style scoped>
.hero-image {
  background-image: url("~/assets/images/philosophy.png");
  background-size: cover;
  background-position: center;
}
</style>
