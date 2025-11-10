import './App.css';

const candidate = {
  name: 'Davy Béré',
  slogan: 'UA rassemblée, Vue vers l’avenir',
  position: 'Candidat au poste de Délégué Général des Étudiants',
  description:
    'Étudiant en Marketing 2, je veux faire de l’Université UA un campus où chaque voix compte, où l’innovation étudiante devient réalité et où la solidarité guide nos actions quotidiennes.',
};

const programme = [
  {
    title: 'Réussite académique',
    description:
      'Renforcer l’accompagnement pédagogique, développer le tutorat entre promotions et négocier davantage de ressources numériques pour tous.',
  },
  {
    title: 'Qualité de vie sur le campus',
    description:
      'Améliorer les espaces communs, faciliter l’accès aux services de santé et promouvoir des actions sportives et culturelles régulières.',
  },
  {
    title: 'Engagement & solidarité',
    description:
      'Créer un fonds de soutien pour les projets étudiants, valoriser les initiatives citoyennes et renforcer la représentation de chaque filière.',
  },
];

const programmeDetail = [
  {
    title: 'Volet Académique',
    sections: [
      {
        title: 'Panels',
        items: [
          'La santé sexuelle et reproductive',
          'La sécurité routière',
          "Partage d’expérience des anciens Uamois",
          'Wifi pour tous',
          'Mentorat Uamois',
        ],
      },
      {
        title: 'Formations',
        items: [
          'Leadership, entrepreneuriat et développement personnel',
          'E-commerce et marketing digital',
          'Rédaction de business plan',
          'Initiation à la liberté financière',
        ],
      },
    ],
  },
  {
    title: 'Volet Social',
    sections: [
      {
        title: null,
        items: [
          'Opération 1 Uamois 1 compte Coris Money',
          'Opération 1 Uamois 1 permis de conduire',
          'Opération 1 Uamois un casque',
          'Mise en place du fonds interne Uamois',
          'Mise en place d’un comité de mobilisation des étudiants',
          'Mise en place d’une cellule d’accompagnement à la rédaction des écrits professionnels',
        ],
      },
    ],
  },
  {
    title: 'Volet Culturel',
    sections: [
      {
        title: null,
        items: [
          'BARBECUE Day',
          'Valentine’s Day',
          'Journée de la femme Uamoise',
          'Ciné plein air',
          'Master Chef UUA',
          'Pool party',
          'Vacances pour un Uamois',
          'Sortie d’études et de découvertes',
          'Full White Night',
          'Journée d’immersion à Faso Mbo',
          'UAA vu en incroyable talent',
          'Dîner de gala',
          'La journée de l’étudiant entrepreneur',
          'Rupture collective',
        ],
      },
    ],
  },
  {
    title: 'Volet Sanitaire',
    sections: [
      {
        title: null,
        items: [
          'Campagne de dépistage du cancer du col de l’utérus, hépatite B, cancer du sein et des IST',
          'Don de sang',
        ],
      },
    ],
  },
  {
    title: 'Volet Sportif',
    sections: [
      {
        title: null,
        items: [
          'Coupe du PCA',
          'Séances d’aérobic / fitness',
          'Tous en salle',
          'Cours de natation',
          'Le club des sportifs (participation féminine encouragée)',
          'Compétitions inter-universitaires',
          'Jeux Uamois',
          'Le 5 km Uamois (course populaire)',
        ],
      },
    ],
  },
];

const commitments = [
  {
    title: 'Transparence',
    details: [
      'Comptes rendus mensuels ouverts à tous les étudiants',
      'Budget participatif contrôlé par un comité indépendant',
      'Plateforme en ligne pour suivre chaque action engagée',
    ],
  },
  {
    title: 'Dialogue permanent',
    details: [
      'Permanences hebdomadaires dans chaque faculté',
      'Boîte à idées numérique « Vue sur UA »',
      'Rencontres trimestrielles avec la direction de l’université',
    ],
  },
  {
    title: 'Impact concret',
    details: [
      'Objectifs mesurables revus tous les 90 jours',
      'Équipe dédiée pour le suivi administratif des projets',
      'Partenariats associatifs pour amplifier nos actions',
    ],
  },
];

const team = [
  { name: 'Idriss Camara', role: 'Stratégie & Innovation', focus: 'Labs étudiants et hackathons interdisciplinaires.' },
  { name: 'Marie-Agnès Kouadio', role: 'Solidarités', focus: 'Accès aux aides sociales, égalité des chances.' },
  { name: 'Samir Benyamina', role: 'Vie de campus', focus: 'Sports & culture, partenariats associatifs UA.' },
  { name: 'Laura Mendes', role: 'Communication', focus: 'Transparence, médias étudiants et newsletter Vista.' },
];

const navigation = [
  { href: '#programme', label: 'Programme' },
  { href: '#engagements', label: 'Engagements' },
  { href: '#agenda', label: 'Agenda' },
  { href: '#equipe', label: 'Équipe Vue' },
  { href: '#contact', label: 'Nous rejoindre' },
];

function App() {
  return (
    <div className="app">
      <header className="hero" id="accueil">
        <div className="container">
          <div className="topbar">
            <div className="brand">
              <img src="/star.svg" alt="Logo Collectif Vue" className="brand-logo" />
              Collectif Vue
            </div>
            <nav className="nav" aria-label="Navigation principale">
              {navigation.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hero-content">
            <div className="hero-message">
              <span className="hero-badge">{candidate.position}</span>
              <h1 className="hero-title">
                {candidate.name}
                <span className="hero-highlight">{candidate.slogan}</span>
              </h1>
              <p className="hero-text">{candidate.description}</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#programme">
                  Découvrir le programme
                </a>
                <a className="btn btn-secondary" href="#contact">
                  Rejoindre l’équipe Vue
                </a>
              </div>

              <aside className="hero-card" aria-label="Priorités de campagne">
                <h3>Nos trois priorités</h3>
                <ul>
                  {programme.map((item) => (
                    <li key={item.title}>
                      <span aria-hidden="true" />
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <img
                src="/heros.jpeg"
                alt="Équipe du Parti Vue - En marche pour l’innovation"
                className="hero-photo"
              />
            </div>
          </div>

          <div className="hero-partner" aria-label="Partenaire design">
            <span>Identité visuelle soutenue par</span>
            <img src="/logoF.png" alt="Logo Digit Group" />
          </div>
        </div>
      </header>

      <main>
        <section className="section" id="programme">
          <div className="container">
            <header className="section-header">
              <span className="section-kicker">Programme Vue 2025</span>
              <h2 className="section-title">Un plan d’action pragmatique pour UA</h2>
              <p className="section-subtitle">
                Construit avec plus de 1 200 contributions étudiantes, notre programme place la réussite, l’écoute et la
                solidarité au cœur de la vie du campus.
              </p>
            </header>

            <div className="program-points">
              {programme.map((item, index) => (
                <article key={item.title} className="card-outer">
                  <div className="program-point">
                    <span className="program-number">{index + 1}</span>
      <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="program-grid">
              {programmeDetail.map((column) => (
                <article key={column.title} className="program-column">
                  <h3>{column.title}</h3>
                  {column.sections.map((section, index) => (
                    <div key={`${column.title}-${index}`} className="program-section">
                      {section.title ? <h4>{section.title}</h4> : null}
                      <ul>
                        {section.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </article>
              ))}
            </div>

          </div>
        </section>

        <section className="section" id="engagements">
          <div className="container">
            <header className="section-header">
              <span className="section-kicker">Nos engagements</span>
              <h2 className="section-title">La méthode Vue pour agir autrement</h2>
              <p className="section-subtitle">
                Gouverner, c’est rendre des comptes. Nous installons des garde-fous démocratiques pour que chaque
                décision soit co-construite et qu’aucune filière ne soit oubliée.
              </p>
            </header>

            <div className="cards-grid">
              {commitments.map((item) => (
                <article key={item.title} className="card-outer">
                  <h3>{item.title}</h3>
                  <ul>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="equipe">
          <div className="container">
            <header className="section-header">
              <span className="section-kicker">L’équipe Vue</span>
              <h2 className="section-title">Des étudiantes et étudiants engagés</h2>
              <p className="section-subtitle">
                Pour porter une vision ambitieuse, nous réunissons des talents issus de toutes les facultés UA. Leur
                mission : transformer vos idées en actions concrètes.
              </p>
            </header>

            <div className="team-grid">
              {team.map((member) => (
                <article key={member.name} className="teammate">
                  <div className="brand-badge" aria-hidden="true">
                    Vue
                  </div>
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <p>{member.focus}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="container">
            <div className="cta">
              <h3>Rejoignez le mouvement Vue pour UA !</h3>
              <p>
                Vous souhaitez participer à la campagne, animer un atelier, proposer une idée ou simplement soutenir
                Davy Béré ? L’équipe Vue vous répond sous 24 h.
              </p>
              <div className="cta-actions">
                
                <a className="btn btn-secondary" href="https://chat.whatsapp.com" target="_blank" rel="noreferrer">
                  Canal bénévoles WhatsApp
        </a>
      </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            <strong>Parti Vue - Université de l'Unité Africaine UA</strong> · Campagne 2025 · Construisons un campus audacieux, solidaire et
            durable.
        </p>
      </div>
      <div className="container">
          <p style={{ color: 'red', fontSize: '24px' }}>
            <strong style={{ color: 'black' }}>Designed by Digit</strong> Group.
          </p>
      </div>
      </footer>
    </div>
  );
}

export default App;
