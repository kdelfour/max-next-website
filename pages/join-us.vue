<template>
  <ULandingHero
    class="hero-image relative overflow-hidden bg-no-repeat"
    title="Rejoignez nous - Construisons ensemble un futur durable et innovant"
    description="Une Culture centrée sur l'humain et la collaboration"
  />

  <ULandingSection
    title="Pourquoi nous rejoindre ?"
    description="Nous croyons que le succès d'une entreprise passe par l'épanouissement de chaque collaborateur. 
Nous construisons un environnement où chaque individu peut exprimer ses talents, prendre des initiatives et grandir tout en contribuant à des projets d'envergure. 
Nous rejoindre, c’est participer à une aventure humaine au sein d’une entreprise libérée, éthique, et résolument tournée vers l’avenir."
  >
    <ULandingGrid
      :ui="{ wrapper: 'flex flex-col lg:grid gap-8 lg:grid-cols-3 relative' }"
    >
      <ULandingCard
        title="Entreprise Libérée et Culture Collaborative"
        icon="i-heroicons-building-office"
      >
        <p>
          Nous fonctionnons selon les principes d'une entreprise libérée. Cela
          signifie plus de liberté, plus d'autonomie et une véritable
          responsabilisation de chaque membre de l'équipe. Nous encourageons une
          culture de transparence, où l’information est partagée, et où chaque
          collaborateur est impliqué dans la prise de décision.
        </p>
      </ULandingCard>
      <ULandingCard
        title="Équilibre Vie Pro/Vie Perso"
        icon="i-heroicons-building-office"
      >
        <p>
          L’équilibre entre vie professionnelle et personnelle est une de nos
          priorités. Nous veillons à ce que nos collaborateurs puissent
          travailler dans un cadre respectueux de leur bien-être, sans
          surcharger leurs emplois du temps avec des obligations
          extra-professionnelles. MAX se veut un lieu de travail inspirant, mais
          qui respecte aussi votre espace personnel.
        </p>
      </ULandingCard>
      <ULandingCard
        title="Développement Professionnel et Formation Continue"
        icon="i-heroicons-building-office"
      >
        <p>
          Nous offrons un accès à la formation continue, afin que chacun puisse
          développer ses compétences selon ses propres objectifs de carrière.
          Nos modules de micro learning sont conçus pour être flexibles et
          adaptables, permettant à nos collaborateurs de se former quand ils le
          souhaitent, tout en intégrant les pratiques les plus modernes et les
          plus éthiques.
        </p>
      </ULandingCard>
      <ULandingCard
        title="Environnement de Travail Inclusif et Diversifié"
        icon="i-heroicons-building-office"
      >
        <p>
          Nous nous engageons activement pour l’inclusivité et la diversité.
          Nous valorisons les parcours uniques et cherchons à créer un
          environnement où chacun se sent accueilli, respecté et valorisé. Nous
          collaborons avec des associations telles que l'IT Woman Movement pour
          encourager une meilleure représentation des femmes dans le secteur
          technologique.
        </p>
      </ULandingCard>
      <ULandingCard
        title="Autonomie et Prise d'Initiative"
        icon="i-heroicons-building-office"
      >
        <p>
          Nous croyons en la capacité de chaque individu à apporter des idées
          novatrices. C’est pourquoi nous donnons à chacun la liberté de prendre
          des initiatives, de développer des projets qui leur tiennent à cœur et
          de contribuer activement à l’évolution de l’entreprise. Votre voix est
          entendue et vos idées sont encouragées.
        </p>
      </ULandingCard>
    </ULandingGrid>
  </ULandingSection>

  <ULandingSection
    title="Ce Que Nous Offrons"
    description="Nous sommes convaincus qu'une entreprise prospère est une entreprise qui prend soin de ses employés. 
Nous offrons bien plus qu’un simple poste : nous offrons un environnement où chacun peut évoluer, apprendre, et s’épanouir, tout en contribuant activement à des projets qui ont un impact positif sur le monde."
    :features="offers"
  />

  <ULandingSection
    title="Nos Postes Ouverts"
    description="Découvrez nos opportunités actuelles et trouvez le poste qui correspond à vos aspirations. 
Nous recherchons des talents passionnés, prêts à s’investir dans une aventure humaine, technologique et durable. 
Que vous soyez développeur, chef de projet, architecte logiciel, ou expert DevOps, nous avons hâte de vous rencontrer !"
    :links="[
      {
        label: 'Consultez nos offres d’emploi',
        to: 'https://recrutement.maxds.fr/',
        target: '_blank',
      },
    ]"
  />
</template>
<script setup lang="ts">
const offers = [
  {
    name: "Cadre Flexibilisé",
    description:
      "Horaires flexibles et possibilité de télétravail afin de s’adapter à votre vie personnelle.",
  },
  {
    name: "Projets en adequation avec vos aspirations",
    description:
      "Travailler sur des projets innovants et ambitieux qui ont un impact positif, tant sur nos clients que sur la société qui vous correspond.",
  },
  {
    name: "Partage des Bénéfices",
    description:
      "Une répartition équitable des bénéfices, incluant un tiers directement redistribué aux collaborateurs pour reconnaître leur contribution essentielle à notre succès.",
  },
  {
    name: "Engagement Sociétal",
    description:
      "Participation à des initiatives locales et des actions de soutien communautaire, afin de construire un avenir plus juste et plus durable.",
  },
];
</script>

<style scoped>
.hero-image {
  background-image: url("~/assets/images/join-us.png");
  background-size: cover;
  background-position: center;
}
</style>
