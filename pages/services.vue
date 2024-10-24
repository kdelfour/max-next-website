<template>
  <ULandingHero
    class="hero-image relative overflow-hidden bg-no-repeat"
    title="Nos Services - Des solutions sur-mesure pour vos besoins"
  />

  <ULandingSection
    headline="Nous sommes à votre service"
    title="Nos Services"
    description="Nous fournissons une gamme complète de services numériques afin
    de répondre aux besoins spécifiques de chaque client. Nous sommes persuadés
    que le succès d'un projet repose sur une compréhension en profondeur des
    enjeux métiers ainsi que sur l'adoption des meilleures pratiques techniques
    disponibles. Nos experts collaborent étroitement avec vous pour transformer
    vos idées en solutions concrètes, tout en respectant nos engagements de
    durabilité, d’éthique et de transparence."
  >
    <ULandingGrid
      :ui="{ wrapper: 'flex flex-col lg:grid gap-8 lg:grid-cols-3 relative' }"
    >
      <ULandingCard>
        <template #title>
          <div class="flex flex-col items-center">
            <h1 class="text-2xl font-bold">Développement sur Mesure</h1>
            <img
              src="~/assets/images/illustrations/services/dev.png"
              class="w-full rounded-3xl"
            />
          </div>
        </template>
        <template #description>
          <span>
            Nos équipes de développement sont spécialisées dans la création de
            solutions logicielles sur mesure, répondant aux exigences uniques de
            chaque client. Que vous ayez besoin d'un produit web, d'une
            application mobile ou d'un logiciel d'entreprise, nous adoptons une
            approche agile et centrée sur l'utilisateur, garantissant des
            livraisons itératives et adaptées aux besoins évolutifs.
          </span>
          <ul>
            <li>
              - <b>Développement Full-Stack</b>: Expertise complète en front-end
              et back-end pour fournir des solutions performantes et
              maintenables.
            </li>
            <li>
              - <b>Applications Web et Mobiles</b> : Développement
              d'applications intuitives, optimisées pour offrir une expérience
              utilisateur de qualité.
            </li>
            <li>
              - <b>Qualité et Tests</b> : Processus rigoureux d'assurance
              qualité incluant tests automatisés et manuels pour garantir la
              fiabilité et la sécurité des solutions livrées.
            </li>
          </ul>
        </template>
      </ULandingCard>

      <ULandingCard>
        <template #title>
          <div class="flex flex-col items-center">
            <h1 class="text-2xl font-bold">DevOps</h1>
            <img
              src="~/assets/images/illustrations/services/devops.png"
              class="w-full rounded-3xl"
            />
          </div>
        </template>

        <template #description>
          <span>
            Nous mettons en œuvre des pratiques DevOps afin de rapprocher les
            équipes de développement et d'opérations, réduisant ainsi le délai
            de mise en production et améliorant la qualité des livrables. Notre
            expertise s'étend à l'automatisation des processus, à l'intégration
            continue et à l'optimisation des environnements de déploiement.
          </span>
          <ul>
            <li>
              - <b>Automatisation</b>: Mise en œuvre de solutions automatisées
              pour le déploiement rapide et efficace des environnements de
              développement et de production.
            </li>
            <li>
              - <b>CI/CD</b>: Conception et gestion de pipelines d'intégration
              et de livraison continue afin de garantir un flux de travail
              fluide et constant.
            </li>
            <li>
              - <b>Infrastructure as Code</b>: Utilisation de technologies
              modernes comme l'Infrastructure as Code (IaC) pour provisionner et
              gérer les ressources de manière fiable et évolutive.
            </li>
          </ul>
        </template>
      </ULandingCard>

      <ULandingCard>
        <template #title>
          <div class="flex flex-col items-center">
            <h1 class="text-2xl font-bold">Architecture Logicielle</h1>
            <img
              src="~/assets/images/illustrations/services/architecture.png"
              class="w-full rounded-3xl"
            />
          </div>
        </template>
        <template #description>
          <span>
            Nous accompagnons nos clients dans la définition de leur stratégie
            numérique, la conception de solutions sur mesure, ainsi que
            l'optimisation de leurs systèmes existants. Notre approche repose
            sur une analyse rigoureuse des besoins métiers et technologiques,
            combinée à une forte collaboration avec vos équipes afin de
            concevoir des solutions à haute valeur ajoutée.
          </span>
          <ul>
            <li>
              - <b>Analyse des Besoins</b> : Études approfondies des exigences
              métiers et technologiques de votre entreprise.
            </li>
            <li>
              - <b>Architecture Logicielle</b> : Conception d'architectures
              robustes, évolutives et performantes adaptées aux besoins actuels
              et futurs.
            </li>
            <li>
              - <b>Stratégie Technologique</b> : Définition de stratégies de
              transformation numérique pour soutenir vos objectifs d'innovation
              et de croissance.
            </li>
          </ul>
        </template>
      </ULandingCard>

      <ULandingCard>
        <template #title>
          <div class="flex flex-col items-center">
            <h1 class="text-2xl font-bold">Pilotage de Projets</h1>
            <img
              src="~/assets/images/illustrations/services/project-management.png"
              class="w-full rounded-3xl"
            />
          </div>
        </template>
        <template #description>
          <span>
            Nous adoptons les méthodologies agiles pour assurer flexibilité,
            transparence et adaptation continue de nos projets. Nos équipes
            utilisent des outils de gestion collaboratifs qui permettent une
            communication fluide entre toutes les parties prenantes,
            garantissant la réussite de chaque projet.
          </span>
          <ul>
            <li>
              - <b>Scrum et Kanban</b> : Utilisation des méthodologies Scrum et
              Kanban pour gérer les sprints, les tâches, et les priorités.
            </li>
            <li>
              - <b>Pilotage Transparent</b> : Mise à jour fréquente sur
              l'avancement des projets, organisation de revues et de
              rétrospectives pour améliorer constamment le processus.
            </li>
            <li>
              - <b>Interaction Client</b> : Forte implication des clients tout
              au long du cycle de développement, permettant d'assurer une
              adéquation parfaite entre les livrables et les attentes.
            </li>
          </ul>
        </template>
      </ULandingCard>

      <ULandingCard>
        <template #title>
          <div class="flex flex-col items-center">
            <h1 class="text-2xl font-bold">Audit et Conseil</h1>
            <img
              src="~/assets/images/illustrations/services/consulting.png"
              class="w-full rounded-3xl"
            />
          </div>
        </template>
        <template #description>
          <span>
            Nous offrons des services d'audit détaillés pour évaluer vos
            systèmes actuels et identifier des axes d'amélioration destinés à
            maximiser l'efficacité de vos processus. Nos experts vous aident
            également à définir une stratégie numérique adaptée à vos objectifs
            commerciaux et aux besoins spécifiques de votre secteur.
          </span>
          <ul>
            <li>
              - <b>Audit Technique</b> : Analyse complète de l'architecture
              existante, des performances et des processus actuels pour
              identifier les points de blocage.
            </li>
            <li>
              - <b>Conseil Stratégique</b> : Élaboration de plans d'action
              concrets visant à améliorer l'efficacité, la durabilité et la
              résilience de vos systèmes.
            </li>
            <li>
              - <b>Accompagnement personnalisé</b> : Nous travaillons en étroite
              collaboration avec vos équipes afin de garantir une adoption
              fluide et efficace des recommandations proposées.
            </li>
          </ul>
        </template>
      </ULandingCard>

      <ULandingCard>
        <template #title>
          <div class="flex flex-col items-center">
            <h1 class="text-2xl font-bold">Coaching</h1>
            <img
              src="~/assets/images/illustrations/services/coaching.png"
              class="w-full rounded-3xl"
            />
          </div>
        </template>
        <template #description>
          <span>
            Nous proposons des services de coaching technique visant à renforcer
            vos équipes, en formant des CTO, leads techniques, et directeurs
            techniques pour qu'ils puissent exceller dans leur rôle. Nous
            accompagnons vos leaders techniques pour développer des compétences
            spécifiques et faire progresser leurs équipes de manière
            collaborative, tout en insufflant notre ADN.
          </span>
          <ul>
            <li>
              - <b>Coaching CTO, Lead Technique, Directeur Technique</b> :
              Coaching personnalisé pour aider les leaders techniques à
              développer des compétences clés en leadership, gestion de projets,
              et stratégie technique.
            </li>
            <li>
              - <b>Engagement des Équipes Techniques</b> : Programmes de
              coaching centrés sur la motivation et l'engagement, visant à
              renforcer la cohésion et l'implication des équipes, grâce à nos
              valeurs d'autonomie et de collaboration.
            </li>
            <li>
              - <b>Culture</b> : Partage de nos approches basées sur la
              transparence, l'innovation, et l'autonomie pour cultiver un
              environnement de travail épanouissant et productif.
            </li>
          </ul>
        </template>
      </ULandingCard>
    </ULandingGrid>
  </ULandingSection>

  <ULandingSection
    title="Pourquoi nous choisir pour vos projets numériques ?"
    :features="items"
    :links="[
      {
        label: 'Discutons de votre projet',
        trailingIcon: 'i-heroicons-arrow-right',
        size: 'lg',
        to: 'contact',
      },
    ]"
  />
</template>
<script setup lang="ts">
const items = [
  {
    name: "Approche Centrée sur l'Humain",
    description:
      "Nous mettons un point d'honneur à placer nos clients et leurs utilisateurs au centre de chaque projet, garantissant une expérience utilisateur exceptionnelle et un service personnalisé.",
  },
  {
    name: "Engagement de Durabilité",
    description:
      "Nos pratiques sont conçues pour minimiser notre impact environnemental tout en offrant des solutions pérennes et performantes, respectant nos engagements éthiques.",
  },
  {
    name: "Expertise Technique et Polyvalence",
    description:
      "Nos équipes sont composées de professionnels aux compétences variées et approfondies, capables de résoudre les défis technologiques les plus complexes et d'accompagner votre transformation numérique.",
  },
];
</script>
<style scoped>
.hero-image {
  background-image: url("~/assets/images/services.png");
  background-size: cover;
  background-position: center;
}
</style>
