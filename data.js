/* Anglais E2 BTS SIO · contenu du trainer
   Source : circulaire nationale BTS SIO session 2026, annexe IV (déroulement et évaluation de E2)
   + arrêté du 08/07/2024. Niveau visé : B2 CECRL. */

const DATA = [

/* ============================== 00 ============================== */
{
  id: "00-methode",
  num: "00",
  title: "L'épreuve E2 en 10 minutes",
  tag: "Format officiel",
  hot: true,
  intro: "Deux parties notées séparément, toutes deux au niveau B2. On ne note pas la grammaire parfaite : on note ta capacité à restituer des idées et à interagir.",
  cours: `
  <h2>1. Le format officiel</h2>
  <pre class="codeblock"><code class="lang-text">ECRIT   coefficient 1 · 2 heures · ponctuel national
        support : 1 ou plusieurs documents en anglais, ancres entreprise
                  et monde du travail, 50 lignes maximum (~4 300 signes)
        2 parties notees /20 chacune -> total /40 ramene sur /20
        dictionnaire UNILINGUE autorise (pas bilingue)

ORAL    coefficient 1 · 20 minutes + 20 minutes de preparation
        dossier : 2 supports ecrits maximum + 1 bref document video
        phase 1 : 5 minutes environ, presentation en continu
        phase 2 : 15 minutes, interaction avec l'examinateur
        niveau vise : B2 du CECRL</code></pre>

  <h2>2. Ce qui est réellement évalué</h2>
  <ul>
    <li><strong>Compréhension de l'écrit</strong> : repérer les idées essentielles, pas les détails.</li>
    <li><strong>Production écrite</strong> : écrire en anglais un écrit professionnel adapté à une situation.</li>
    <li><strong>Compréhension de l'oral</strong> : la vidéo du dossier oral.</li>
    <li><strong>Production et interaction orales</strong> : parler seul cinq minutes, puis dialoguer quinze minutes.</li>
  </ul>
  <p>Le niveau B2, en pratique : tu comprends un article de presse spécialisée, tu restitues sans traduire mot à mot, tu argumentes avec des phrases construites. Les fautes qui n'empêchent pas de comprendre coûtent presque rien ; l'incompréhension du document et le hors-sujet coûtent tout.</p>

  <h2>3. Les deux pièges de format qui coûtent une partie entière</h2>
  <div class="callout callout--warn">
    <span class="callout__label">Sens des langues</span>
    <p>Le <strong>compte rendu est en FRANÇAIS</strong>. L'<strong>écrit professionnel est en ANGLAIS</strong>. Inverser les deux, c'est perdre la moitié de la note, même avec un anglais correct.</p>
  </div>
  <ul>
    <li>Compte rendu : rédigé en français, environ <strong>un tiers</strong> de la longueur du texte source, avec une brève introduction qui donne <strong>la source et le thème</strong>.</li>
    <li>Écrit professionnel : en anglais, avec le <strong>format demandé</strong> (courriel, rapport, note, demande d'assistance), signé du <strong>nom fourni dans la consigne</strong> pour respecter l'anonymat.</li>
  </ul>

  <h2>4. Répartition du temps sur les deux heures</h2>
  <pre class="codeblock"><code class="lang-text">00-15   lecture active : titre, source, date, chapeau, une idee par paragraphe
15-50   compte rendu en francais (~230 mots si le texte fait 50 lignes)
50-65   plan de l'ecrit professionnel : destinataire, but, 3 informations cles
65-105  redaction en anglais, au propre apres 10 min de brouillon
105-120 relecture ciblee : 3e personne, temps, accords, formules d'ouverture</code></pre>

  <h2>5. Le réflexe qui rapporte le plus</h2>
  <p>Avant d'écrire une ligne, note sur le brouillon trois éléments : <strong>la source</strong>, <strong>le thème en une phrase</strong>, <strong>les trois idées essentielles</strong>. Ce sont exactement les trois choses que la grille de correction cherche. Tout le reste est de la rédaction.</p>
  `,
  cards: [
    { id: "m1", q: "Durée et coefficient de l'écrit d'anglais E2 ?", a: "<strong>2 heures, coefficient 1.</strong> Épreuve ponctuelle écrite nationale." },
    { id: "m2", q: "Comment se calcule la note de l'écrit ?", a: "Deux parties notées <strong>/20 chacune</strong> (compréhension et expression), soit /40, puis ramené sur <strong>/20</strong>. Une partie ratée plafonne la note." },
    { id: "m3", q: "Dans quelle langue rédige-t-on le compte rendu ?", a: "En <strong>français</strong>. La qualité de l'expression française est notée. Les termes anglais courants (email, spam, phishing) sont acceptés, mais leurs équivalents français sont valorisés." },
    { id: "m4", q: "Dans quelle langue rédige-t-on l'écrit professionnel ?", a: "En <strong>anglais</strong>. On évalue l'adéquation à la situation, le respect du format demandé et la qualité de l'expression." },
    { id: "m5", q: "Quelle longueur pour le compte rendu ?", a: "Environ <strong>un tiers</strong> du texte source. Pour un texte de 50 lignes (~4 300 signes), compte <strong>230 mots environ</strong>. La cohérence prime sur la longueur exacte." },
    { id: "m6", q: "Quel dictionnaire est autorisé ?", a: "<strong>Unilingue seulement</strong> (anglais-anglais). Le bilingue est interdit : c'est précisément ce qui t'oblige à reformuler plutôt qu'à traduire." },
    { id: "m7", q: "Que doit contenir l'introduction du compte rendu ?", a: "La <strong>source</strong> (journal, site, date) et le <strong>thème</strong> du document, en une ou deux phrases. C'est un point quasi automatique." },
    { id: "m8", q: "Combien de temps dure l'oral et comment se décompose-t-il ?", a: "<strong>20 minutes</strong> après <strong>20 minutes de préparation</strong> : environ <strong>5 minutes</strong> de présentation en continu du dossier, puis <strong>15 minutes</strong> d'interaction avec l'examinateur." },
    { id: "m9", q: "Avec quel nom signe-t-on l'écrit professionnel ?", a: "Avec le <strong>nom donné dans la consigne</strong>. Objectif : respecter l'anonymat des copies. Signer de son vrai nom est une maladresse inutile." }
  ],
  ateliers: []
},

/* ============================== 01 ============================== */
{
  id: "01-compte-rendu",
  num: "01",
  title: "Le compte rendu en français",
  tag: "La moitié de l'écrit",
  hot: true,
  intro: "C'est la partie la plus mécanique de l'épreuve : quatre étapes, toujours les mêmes, et la moitié de la note de l'écrit est sécurisée.",
  cours: `
  <h2>1. Étape 1 : le survol (5 minutes)</h2>
  <p>Tu ne lis pas encore le texte en entier. Tu relèves :</p>
  <ul>
    <li>la <strong>source</strong> : nom du journal ou du site, date de publication ;</li>
    <li>le <strong>titre</strong> et le <strong>chapeau</strong> (les deux ou trois lignes en gras sous le titre) ;</li>
    <li>la <strong>nature</strong> du document : article de presse, rapport, communiqué, interview, page de site.</li>
  </ul>
  <p>Ces trois informations suffisent à écrire l'introduction, qui est notée séparément dans la grille.</p>

  <h2>2. Étape 2 : repérage des idées (10 minutes)</h2>
  <p><strong>Une idée par paragraphe.</strong> Tu écris en marge, en français, l'idée du paragraphe en cinq mots maximum. Tu entoures les éléments factuels :</p>
  <ul>
    <li>les <strong>acteurs</strong> (entreprise, victime, autorité, chercheur) ;</li>
    <li>les <strong>chiffres</strong> (montant, nombre de victimes, durée, pourcentage) ;</li>
    <li>les <strong>causes</strong> et les <strong>conséquences</strong> (mots inducteurs : because, therefore, as a result, which led to).</li>
  </ul>
  <p>Un article de presse a une structure narrative : contexte, problème, causes, conséquences, réaction. Repère-la, elle te donne ton plan.</p>

  <h2>3. Étape 3 : le plan, dans l'ordre que tu veux</h2>
  <p>La circulaire autorise explicitement à <strong>ne pas suivre l'ordre linéaire</strong> du texte. Profites-en : regroupe par idées, pas par paragraphes.</p>
  <pre class="codeblock"><code class="lang-text">Contexte      qui, quoi, ou, quand
Probleme      ce qui arrive et a qui
Causes        ce qui a rendu l'attaque possible
Consequences  impact chiffre, humain, juridique
Reaction      mesures prises ou annoncees</code></pre>

  <h2>4. Étape 4 : la rédaction (35 minutes)</h2>
  <p>Trois règles, et elles suffisent :</p>
  <ol>
    <li><strong>Reformule, ne recopie pas.</strong> Une phrase recopiée du texte source est repérée immédiatement. Change la structure : « l'entreprise a subi une attaque » et non « the company suffered an attack ».</li>
    <li><strong>Enchaîne.</strong> Des connecteurs à chaque transition : <em>d'abord, en effet, en revanche, par conséquent, en définitive</em>. Une liste de phrases sans liens perd les points de cohérence.</li>
    <li><strong>Traduis les termes techniques.</strong> phishing → hameçonnage, ransomware → rançongiciel, breach → violation de données, patch → correctif, outage → panne ou indisponibilité, insider → menace interne.</li>
  </ol>
  <div class="callout callout--key">
    <span class="callout__label">La conclusion qui rapporte</span>
    <p>Une ou deux phrases sur l'<strong>intérêt professionnel</strong> du document (« pour un technicien SIO, ce cas illustre l'importance des sauvegardes hors ligne ») sont explicitement valorisées par la circulaire. C'est le meilleur rapport points/effort de l'épreuve.</p>
  </div>

  <h2>5. Ce qui fait perdre des points</h2>
  <ul>
    <li>Oublier la source dans l'introduction : c'est un point de la grille, gratuit à prendre.</li>
    <li>Traduire ligne à ligne : le texte devient illisible en français et la restitution s'effondre.</li>
    <li>Donner son avis personnel : ce n'est pas demandé, et ça prend la place des idées du document.</li>
    <li>Confondre idée essentielle et exemple : « l'entreprise de Roubaix » est un exemple, « les PME sont les premières cibles » est l'idée.</li>
    <li>Dépasser largement le tiers : plus long ne vaut jamais mieux, la grille note la cohérence.</li>
  </ul>

  <h2>6. Modèles de phrases (en français)</h2>
  <pre class="codeblock"><code class="lang-text">Cet article, publie le 12 mai 2026 dans The Register, traite de ...
Le document, un rapport publie par l'ANSSI en mars 2026, porte sur ...
L'auteur montre d'abord que ... Il explique ensuite que ...
En revanche, ... Par consequent, ...
En definitive, ce document illustre ... pour un professionnel du secteur.</code></pre>
  `,
  cards: [
    { id: "c1", q: "Par quoi commence le compte rendu ?", a: "Par une brève introduction qui indique la <strong>source</strong> (support, date) et le <strong>thème</strong> du document. C'est explicitement dans la circulaire." },
    { id: "c2", q: "Faut-il suivre l'ordre du texte source ?", a: "<strong>Non.</strong> Les idées doivent être restituées avec cohérence, sans nécessairement respecter l'ordre linéaire. Un plan thématique est même préférable." },
    { id: "c3", q: "Peut-on recopier une phrase du texte ?", a: "Non. La circulaire demande de <strong>s'éloigner de la reprise littérale</strong>. Reformule la structure de la phrase, pas seulement un mot sur deux." },
    { id: "c4", q: "Combien de mots pour un texte de 50 lignes ?", a: "Environ <strong>230 mots</strong> : un tiers des ~4 300 signes du support. La souplesse est admise, la cohérence compte plus que le compte exact." },
    { id: "c5", q: "Comment traduire <em>ransomware</em> et <em>breach</em> ?", a: "<em>Ransomware</em> → <strong>rançongiciel</strong>. <em>Breach</em> → <strong>violation de données</strong> (ou fuite). Les équivalents français sont valorisés par le correcteur." },
    { id: "c6", q: "Que faire des chiffres du document ?", a: "Les garder : ils prouvent la compréhension. Un ou deux chiffres clés bien placés valent mieux qu'une liste de statistiques." },
    { id: "c7", q: "Un avis personnel est-il attendu ?", a: "<strong>Non.</strong> Le compte rendu restitue les idées du document. Seule une brève conclusion sur l'intérêt professionnel est valorisée." },
    { id: "c8", q: "Trois connecteurs pour structurer en français ?", a: "<em>D'abord</em>, <em>en revanche</em>, <em>par conséquent</em>. Ajoute <em>en définitive</em> pour la conclusion." },
    { id: "c9", q: "Différence entre idée essentielle et exemple ?", a: "L'idée est générale et transférable (« les PME sont les premières cibles ») ; l'exemple est un cas particulier (« l'entreprise de Roubaix »). On garde les idées, on cite un exemple au maximum." }
  ],
  ateliers: [
    {
      id: "at-compte-rendu",
      title: "Rédige le compte rendu",
      lang: "text",
      prompt: `<p>Support (extrait, 9 lignes) :</p>
      <pre class="codeblock"><code class="lang-text">HOSPITAL CHAIN PAYS THE PRICE OF A MISSED PATCH
The Register, 12 May 2026

A group of six private clinics in the north of France spent four days
without access to patient records last week, after ransomware encrypted
its central file server. The attackers entered through a virtual private
network appliance that had not been updated since January. Staff had to
fall back on paper files, and two operating theatres were closed.

The group's IT manager said the nightly backups were stored on the same
network, so they were encrypted too. A cyber-security firm was called in
on day two. The regional health authority has opened an investigation.</code></pre>
      <p>Rédige le compte rendu <strong>en français</strong>, environ un tiers de la longueur du texte. Contraintes : introduire la source et le thème, restituer les idées essentielles sans recopier, enchaîner avec des connecteurs, terminer par une phrase sur l'intérêt professionnel.</p>`,
      starter: `Cet article, publié le 12 mai 2026 dans The Register, traite de `,
      model: `Cet article, publié le 12 mai 2026 dans The Register, traite de l'attaque par rançongiciel qui a paralysé six cliniques privées du nord de la France pendant quatre jours.

D'abord, les faits : le serveur de fichiers central a été chiffré, privant le personnel de tout accès aux dossiers patients. Deux blocs opératoires ont fermé et les équipes sont revenues au papier.

Ensuite, la cause est identifiée : les attaquants sont entrés par un équipement VPN qui n'avait pas été mis à jour depuis janvier. Le défaut de correctif est donc à l'origine de l'intrusion.

En revanche, la sauvegarde n'a pas joué son rôle : les copies nocturnes étaient stockées sur le même réseau, elles ont été chiffrées en même temps. C'est l'erreur d'architecture la plus coûteuse du dossier.

Par conséquent, un prestataire de cybersécurité a été dépêché dès le deuxième jour et l'autorité régionale de santé a ouvert une enquête.

En définitive, ce cas illustre deux règles directement utiles à un technicien SIO : appliquer les correctifs et isoler les sauvegardes du réseau de production.`,
      checks: [
        { label: "Source citée (support et date)", test: /(12 mai 2026|The Register)/i },
        { label: "Thème énoncé dès l'introduction", test: /rançongiciel|attaque/i },
        { label: "Cause technique restituée (correctif / mise à jour / VPN)", test: /correctif|mise à jour|mis à jour|VPN/i },
        { label: "Conséquence sur les sauvegardes", test: /sauvegarde/i },
        { label: "Au moins deux connecteurs logiques", test: /(d'abord|ensuite|en revanche|par conséquent|en définitive)[\s\S]*(d'abord|ensuite|en revanche|par conséquent|en définitive)/i },
        { label: "Conclusion sur l'intérêt professionnel", test: /(technicien|professionnel|SIO)/i }
      ]
    }
  ]
},

/* ============================== 02 ============================== */
{
  id: "02-ecrit-pro",
  num: "02",
  title: "Écrits professionnels en anglais",
  tag: "L'autre moitié de l'écrit",
  hot: true,
  intro: "On ne te demande pas de littérature : un format reconnaissable, un but clair, trois informations, une action attendue. Le format se prépare, il ne s'improvise pas.",
  cours: `
  <h2>1. Les formats qui tombent</h2>
  <pre class="codeblock"><code class="lang-text">courriel / email      demande d'assistance, demande d'informations, suivi
bref rapport          rapport d'incident, compte rendu de reunion
document explicatif   notice d'utilisation, mode operatoire
courrier              reclamation, reponse a un client
note / instruction    consigne a une equipe technique</code></pre>
  <p>La consigne précise toujours le destinataire, la situation et parfois un nombre de mots indicatif. Le destinataire détermine le registre : client, supérieur, prestataire, utilisateur final.</p>

  <h2>2. Le squelette d'un courriel professionnel</h2>
  <pre class="codeblock"><code class="lang-text">Subject: Incident report - Intranet unavailable since 08:15
Dear Mr Smith,
  [1 phrase]     I am writing to report / to request / to follow up on ...
  [2-3 phrases]  les faits : quoi, quand, impact, ce qui a deja ete fait
  [1 phrase]     I would be grateful if you could ... / Could you please confirm ...?
  [1 phrase]     I look forward to hearing from you.
Kind regards,
Alex Martin</code></pre>

  <h3>Les formules d'appel et de politesse</h3>
  <ul>
    <li><strong>Dear Sir or Madam</strong> (destinataire inconnu) → <strong>Yours faithfully</strong>.</li>
    <li><strong>Dear Mr Smith / Dear Ms Jones</strong> (nom connu) → <strong>Yours sincerely</strong>.</li>
    <li><strong>Kind regards / Best regards</strong> : accepté et courant dans un courriel professionnel.</li>
    <li>Jamais <em>Hey</em>, jamais <em>Cheers</em> dans une copie d'examen.</li>
  </ul>

  <h2>3. Le rapport d'incident (format le plus probable en SIO)</h2>
  <pre class="codeblock"><code class="lang-text">INCIDENT REPORT - Unplanned intranet outage
Date and time     12 May 2026, 08:15 to 11:40
Impact            approximately 180 users, no access to the intranet
Cause             failed storage array after a power cut, no UPS on that rack
Actions taken     1. service restarted  2. data restored from the nightly backup
Next steps        install a UPS, test the restore procedure quarterly
Reported by       Alex Martin, IT support</code></pre>
  <p>Verbes utiles, tous à connaître : <em>to report, to escalate, to investigate, to roll back, to patch, to restore, to confirm, to schedule, to deploy</em>.</p>
  <div class="callout callout--warn">
    <span class="callout__label">Forme passive</span>
    <p>Un rapport d'incident se rédige souvent au passif : <em>the server was patched</em>, <em>the backup was restored</em>, <em>the ticket has been closed</em>. Le passif fait disparaître l'agent, ce qui est exactement l'effet recherché dans un rapport technique.</p>
  </div>

  <h2>4. Registre : ce qui sonne faux</h2>
  <ul>
    <li>Trop familier : <em>I wanna know</em>, <em>gonna</em>, <em>Thanx</em>.</li>
    <li>Trop littéraire : <em>I would be most delighted to inform you that</em>. Un professionnel écrit court.</li>
    <li>Traduction littérale du français : <em>I have the pleasure to</em>, <em>Please find herewith</em>.</li>
    <li>Formules bateau sans contenu : le correcteur veut des faits, pas de la politesse.</li>
  </ul>

  <h2>5. Le plan qui marche en 12 minutes</h2>
  <pre class="codeblock"><code class="lang-text">1. Objet          une ligne : type d'ecrit + sujet + reference
2. Ouverture      Dear ..., + I am writing to ...
3. Faits          3 informations maximum, dans l'ordre chronologique
4. Demande        une action precise et realisable
5. Cloture        formule + nom de la consigne</code></pre>
  <p>Douze minutes suffisent si les cinq blocs sont connus d'avance. Le reste du temps doit aller au compte rendu, qui rapporte autant de points et se rate plus facilement.</p>
  `,
  cards: [
    { id: "e1", q: "Quels sont les cinq blocs d'un courriel professionnel ?", a: "<strong>Objet</strong>, <strong>appel</strong> (Dear ...), <strong>but</strong> (I am writing to ...), <strong>faits et demande</strong>, <strong>formule de clôture + nom</strong>." },
    { id: "e2", q: "Dear Sir or Madam : quelle formule de politesse ?", a: "<strong>Yours faithfully</strong>. Avec un nom (<em>Dear Mr Smith</em>), on utilise <strong>Yours sincerely</strong>." },
    { id: "e3", q: "Comment commence la phrase qui annonce le but ?", a: "<em>I am writing to report / to request / to follow up on / to apply for ...</em> Puis un infinitif, jamais <em>for reporting</em>." },
    { id: "e4", q: "Comment demande-t-on poliment une action ?", a: "<em>I would be grateful if you could ...</em> ou <em>Could you please confirm ...?</em> Le conditionnel est la marque du registre professionnel." },
    { id: "e5", q: "Quelle phrase de clôture ?", a: "<em>I look forward to hearing from you.</em> Attention : <strong>to hearing</strong>, pas <em>to hear</em>, car <em>look forward to</em> est suivi de -ing." },
    { id: "e6", q: "Quelles rubriques dans un rapport d'incident ?", a: "<strong>Date et heure</strong>, <strong>impact</strong>, <strong>cause</strong>, <strong>actions menées</strong>, <strong>mesures de prévention</strong>, <strong>auteur</strong>. Le passif domine : <em>was patched</em>, <em>has been restored</em>." },
    { id: "e7", q: "Pourquoi le passif dans un rapport technique ?", a: "Il met l'accent sur le <strong>fait</strong> plutôt que sur la personne, et il est plus court : <em>the backup was restored</em> plutôt que <em>the technician restored the backup</em>." },
    { id: "e8", q: "Trois verbes utiles pour décrire une intervention ?", a: "<em>to roll back</em> (revenir en arrière), <em>to patch</em> (corriger), <em>to restore</em> (restaurer). Aussi : <em>to escalate</em>, <em>to investigate</em>." },
    { id: "e9", q: "Que signifie <em>deadline</em> et que ne signifie-t-il pas ?", a: "<em>Deadline</em> = <strong>date limite</strong>. Ce n'est pas le « délai » de exécution, qui se dit <em>lead time</em> ou <em>timeframe</em>." }
  ],
  ateliers: [
    {
      id: "at-email-incident",
      title: "Écris le courriel d'incident",
      lang: "text",
      prompt: `<p>Situation : tu es technicien support. Ce matin, l'intranet de l'entreprise est inaccessible depuis 08:15. La cause est une baie de stockage en panne après une coupure de courant. Le service a été rétabli à 11:40 après redémarrage et restauration de la sauvegarde de la veille. 180 utilisateurs ont été touchés.</p>
      <p>Rédige en <strong>anglais</strong> le courriel au responsable informatique (nom de la consigne : <strong>Alex Martin</strong>) : objet explicite, faits, impact chiffré, actions menées, mesure de prévention proposée, formule de politesse. 120 à 150 mots.</p>`,
      starter: `Subject: `,
      model: `Subject: Incident report - Intranet outage, 12 May 2026

Dear Mr Smith,

I am writing to report an unplanned outage of the company intranet, which started at 08:15 this morning. Approximately 180 users could not access any page until 11:40.

The cause was a failed storage array following a power cut; the rack has no uninterruptible power supply. The service was restarted and the data was restored from the previous night's backup, which took about one hour.

I would be grateful if you could approve the purchase of a UPS for that rack. We should also test the restore procedure every quarter.

I look forward to hearing from you.

Kind regards,
Alex Martin`,
      checks: [
        { label: "Objet présent et explicite", test: /^Subject\s*[:：]/im },
        { label: "Formule d'appel", test: /Dear\s+(Mr|Ms|Sir|Madam)/i },
        { label: "Phrase de but (I am writing to ...)", test: /I\s+am\s+writing\s+to/i },
        { label: "Impact chiffré", test: /\b\d{2,3}\s*(users|people|employes|employees)/i },
        { label: "Cause technique", test: /(storage|power cut|coupure|failure|failed)/i },
        { label: "Action ou prévention proposée", test: /(I would be grateful|could you|UPS|quarterly|backup)/i },
        { label: "Clôture professionnelle", test: /(Kind regards|Best regards|Yours sincerely)/i },
        { label: "Texte bien en anglais (pas de mots français courants)", test: /^(?![\s\S]*\b(nous|vous|notre|nous avons|c'est|je suis)\b)/i }
      ]
    }
  ]
},

/* ============================== 03 ============================== */
{
  id: "03-grammaire",
  num: "03",
  title: "Grammaire : les 10 erreurs qui coûtent",
  tag: "Rentabilité maximale",
  hot: false,
  intro: "Tu n'as pas besoin de toute la grammaire anglaise. Ces dix points couvrent la majorité des fautes réellement pénalisées dans une copie de BTS.",
  cours: `
  <h2>1. Le tableau des fautes (FR → EN)</h2>
  <pre class="codeblock"><code class="lang-text">FAUX                        JUSTE
I am agree                  I agree
I have seen him yesterday   I saw him yesterday
I work here since 2020      I have worked here since 2020
He don't know               He doesn't know
She have a laptop           She has a laptop
I must to patch             I must patch
informations / advices      information / advice (indénombrables)
the software are            the software is
I look forward to hear      I look forward to hearing
Actually, the server is down  Currently, the server is down</code></pre>

  <h2>2. Present perfect contre past simple</h2>
  <ul>
    <li><strong>Past simple</strong> : action datée et terminée. <em>We patched the server in May.</em></li>
    <li><strong>Present perfect</strong> : bilan, sans date précise, ou conséquence présente. <em>We have patched the server, so the flaw is closed.</em></li>
    <li><strong>For / since</strong> : <em>for</em> + durée (<em>for three years</em>), <em>since</em> + point de départ (<em>since 2020</em>). Les deux vont avec le present perfect.</li>
  </ul>

  <h2>3. Les modaux</h2>
  <p>Un modal est toujours suivi de la <strong>base verbale</strong> : <em>must patch</em>, <em>should check</em>, <em>can restore</em>. Jamais <em>to</em>, jamais de -s.</p>
  <ul>
    <li><em>must</em> : obligation forte / quasi-certitude.</li>
    <li><em>should</em> : recommandation. C'est le modal d'une préconisation technique : <em>you should enable two-factor authentication</em>.</li>
    <li><em>may / might</em> : possibilité. Utile pour nuancer un diagnostic.</li>
    <li><em>could</em> : capacité au passé ou demande polie.</li>
  </ul>

  <h2>4. Le passif</h2>
  <pre class="codeblock"><code class="lang-text">actif   The technician restored the backup.
passif  The backup was restored (by the technician).
        The flaw has been fixed.        (present perfect passif)
        The server must be patched.     (modal + be + participe)</code></pre>
  <p>Construction : <strong>be</strong> + <strong>participe passé</strong>. C'est la structure reine du rapport d'incident.</p>

  <h2>5. Les conditionnels</h2>
  <ul>
    <li><strong>Type 1</strong> (réel, futur) : <em>If we patch now, the risk will drop.</em></li>
    <li><strong>Type 2</strong> (hypothèse présente) : <em>If we had a spare server, the failover would be immediate.</em></li>
    <li><strong>Type 3</strong> (regret, passé) : <em>If we had patched in January, the attack would not have succeeded.</em></li>
  </ul>

  <h2>6. Les indénombrables du monde IT</h2>
  <p><strong>Information, advice, software, hardware, evidence, research, equipment</strong> n'ont pas de pluriel en -s. On dit <em>a piece of software</em>, <em>two pieces of advice</em>, <em>some information</em>.</p>

  <h2>7. Faux amis à surveiller</h2>
  <pre class="codeblock"><code class="lang-text">actually      = en fait            (pas "actuellement" -> currently)
eventually    = finalement         (pas "éventuellement" -> possibly)
to assist     = aider              (pas "assister à" -> to attend)
a demand      = une exigence       (pas "une demande" -> a request)
sensible      = raisonnable        (pas "sensible" -> sensitive)
a delay       = un retard          (pas "un délai" -> a deadline)
to achieve    = atteindre          (pas "achever")
library       = bibliothèque       (pas "librairie" -> bookshop)</code></pre>

  <h2>8. Les questions et l'oral</h2>
  <ul>
    <li>Question fermée : <em>auxiliaire + sujet + verbe</em>. <em>Do you use a VPN?</em> / <em>Have you tested it?</em></li>
    <li>Question ouverte : <em>What / How / Why / When + auxiliaire</em>. <em>What would you change?</em></li>
    <li>Pas de double auxiliaire : <em>What did you do?</em> et non <em>What did you did?</em></li>
  </ul>
  `,
  cards: [
    { id: "g1", q: "Traduis « je suis d'accord » : <em>I am agree</em> ou <em>I agree</em> ?", a: "<strong>I agree.</strong> <em>Agree</em> est un verbe : il n'a pas besoin de <em>be</em>. Même logique pour <em>I disagree</em>." },
    { id: "g2", q: "« Je travaille ici depuis 2020 » ?", a: "<strong>I have worked here since 2020.</strong> <em>Since</em> + point de départ impose le present perfect ; le présent simple est la faute la plus fréquente." },
    { id: "g3", q: "<em>for</em> ou <em>since</em> avec <em>three years</em> ?", a: "<strong>for</strong> + durée (<em>for three years</em>). <strong>since</strong> + point de départ (<em>since 2020, since Monday</em>)." },
    { id: "g4", q: "Après un modal, quelle forme verbale ?", a: "La <strong>base verbale</strong>, sans <em>to</em> et sans -s : <em>you should check</em>, <em>we must patch</em>. « I must to patch » est faux." },
    { id: "g5", q: "Comment construire le passif ?", a: "<strong>be</strong> + <strong>participe passé</strong> : <em>the backup was restored</em>, <em>the flaw has been fixed</em>, <em>the server must be patched</em>." },
    { id: "g6", q: "Conditionnel 3 : « si nous avions corrigé la faille… »", a: "<em>If we had patched the flaw, the attack would not have succeeded.</em> <strong>had + participe</strong> puis <strong>would have + participe</strong>." },
    { id: "g7", q: "Quel est le pluriel de <em>information</em> et <em>software</em> ?", a: "Ils sont <strong>indénombrables</strong> : pas de -s. On dit <em>some information</em>, <em>a piece of software</em>, <em>two pieces of advice</em>." },
    { id: "g8", q: "<em>Actually</em> signifie quoi ?", a: "<strong>En fait</strong>, pas « actuellement » (qui se dit <em>currently</em> ou <em>at the moment</em>). Faux ami classique." },
    { id: "g9", q: "<em>I look forward to hear from you</em> : correct ?", a: "<strong>Non.</strong> <em>Look forward to</em> est suivi de -ing : <em>I look forward to hearing from you.</em>" },
    { id: "g10", q: "Traduis « je dois vérifier le correctif » (modal).", a: "<em>I must check the patch</em> ou <em>I have to check the patch</em>. Jamais <em>I must to check</em>." }
  ],
  ateliers: [
    {
      id: "at-grammaire",
      title: "Corrige les six phrases",
      lang: "text",
      prompt: `<p>Corrige chaque phrase et écris uniquement la version correcte (une ligne par phrase, en anglais).</p>
      <ol>
        <li>I am agree with your analysis.</li>
        <li>I work in this company since 2021.</li>
        <li>The server have been patched yesterday.</li>
        <li>You must to enable two-factor authentication.</li>
        <li>I look forward to hear from you.</li>
        <li>Actually, the intranet is down.</li>
      </ol>`,
      starter: `1. `,
      model: `1. I agree with your analysis.
2. I have worked in this company since 2021.
3. The server was patched yesterday.
4. You must enable two-factor authentication.
5. I look forward to hearing from you.
6. Currently, the intranet is down.`,
      checks: [
        { label: "1. I agree (sans be)", test: /I\s+agree/i },
        { label: "2. present perfect + since", test: /have\s+worked[\s\S]{0,40}since/i },
        { label: "3. past simple (was patched)", test: /was\s+patched/i },
        { label: "4. modal + base verbale", test: /must\s+enable/i },
        { label: "5. look forward to hearing", test: /look\s+forward\s+to\s+hearing/i },
        { label: "6. currently au lieu de actually", test: /currently/i }
      ]
    }
  ]
},

/* ============================== 04 ============================== */
{
  id: "04-vocabulaire",
  num: "04",
  title: "Vocabulaire IT, cyber et entreprise",
  tag: "Le lexique du dossier",
  hot: false,
  intro: "Le lexique tombe toujours dans la même zone : sécurité, cloud, données, support. Si tu reconnais ces 60 mots à la lecture, la compréhension écrite devient mécanique.",
  cours: `
  <h2>1. Sécurité (le thème le plus probable)</h2>
  <pre class="codeblock"><code class="lang-text">threat              menace
vulnerability       vulnerabilite / faille
breach              violation de donnees, intrusion reussie
ransomware          rancongiciel
phishing            hameconnage
malware             logiciel malveillant
patch / update      correctif / mise a jour
backup              sauvegarde
restore             restauration
least privilege     moindre privilege
two-factor auth      authentification a deux facteurs
credentials         identifiants
insider threat      menace interne
outage / downtime   panne / indisponibilite</code></pre>

  <h2>2. Infra, cloud, données</h2>
  <pre class="codeblock"><code class="lang-text">server / host       serveur / hote
load balancer       repartiteur de charge
firewall            pare-feu
VPN                 reseau prive virtuel
on-premises         sur site (dans les locaux)
cloud provider      fournisseur cloud
scalability         montee en charge
availability        disponibilite
redundancy          redondance
legacy system       systeme obsolescent
database            base de donnees
query               requete
row / column        ligne / colonne
dataset             jeu de donnees</code></pre>

  <h2>3. Support et travail</h2>
  <pre class="codeblock"><code class="lang-text">ticket              ticket d'incident
to escalate         faire remonter
to troubleshoot     diagnostiquer
root cause          cause racine
workaround          solution de contournement
deadline            date limite
stakeholder         partie prenante
rollout             deploiement
feedback            retour d'experience
on-call             d'astreinte
handover            passation
training            formation</code></pre>

  <h2>4. Les collocations à ne pas rater</h2>
  <ul>
    <li><em>to <strong>raise</strong> a ticket</em> (pas <em>open up</em>) · <em>to <strong>close</strong> a ticket</em></li>
    <li><em>to <strong>run</strong> a backup</em> · <em>to <strong>restore</strong> from a backup</em></li>
    <li><em>to <strong>apply</strong> a patch</em> · <em>to <strong>deploy</strong> an update</em></li>
    <li><em>to <strong>meet</strong> a deadline</em> · <em>to <strong>miss</strong> a deadline</em></li>
    <li><em>to <strong>carry out</strong> an audit</em> · <em>to <strong>conduct</strong> a test</em></li>
    <li><em>to <strong>be exposed to</strong> a risk</em> (pas <em>exposed at</em>)</li>
  </ul>

  <h2>5. Les sigles qu'on ne traduit pas</h2>
  <p><strong>VPN, SQL, API, SaaS, GDPR</strong> (RGPD en anglais), <strong>ISO 27001, NIS2, SLA, KPI, ROI</strong>. À l'oral, tu peux les prononcer tels quels : l'examinateur les connaît. À l'écrit en français, donne la version française quand elle existe (RGPD, chiffrement, etc.).</p>

  <h2>6. Comment apprendre ce lexique efficacement</h2>
  <p>Pas de liste apprise par cœur dans l'ordre. Tu prends un article technique en anglais et tu surlignes les mots que tu ne reconnais pas ; tu les notes avec <strong>la phrase d'origine</strong>, pas isolés. C'est le contexte qui fixe le mot, et le contexte est exactement ce que l'épreuve te donne.</p>
  `,
  cards: [
    { id: "v1", q: "Traduis <em>breach</em> et <em>leak</em>.", a: "<em>Breach</em> = <strong>violation de données</strong> (intrusion réussie). <em>Leak</em> = <strong>fuite</strong>. Une fuite peut être accidentelle, une violation suppose un accès non autorisé." },
    { id: "v2", q: "Que signifie <em>downtime</em> ?", a: "<strong>Indisponibilité</strong> d'un service, ou temps d'arrêt. L'inverse est <em>uptime</em>." },
    { id: "v3", q: "Complète : <em>to ______ a ticket</em> et <em>to ______ a patch</em>.", a: "<em>to <strong>raise</strong> a ticket</em> et <em>to <strong>apply</strong> a patch</em>. On dit aussi <em>to log a ticket</em>." },
    { id: "v4", q: "Que veut dire <em>least privilege</em> ?", a: "<strong>Moindre privilège</strong> : chaque compte ne possède que les droits strictement nécessaires à sa mission. Principe central de l'épreuve U7." },
    { id: "v5", q: "Différence entre <em>vulnerability</em> et <em>threat</em> ?", a: "La <strong>vulnérabilité</strong> est une faiblesse du système ; la <strong>menace</strong> est ce qui peut l'exploiter. Le risque combine les deux avec un impact." },
    { id: "v6", q: "Traduis <em>legacy system</em>.", a: "<strong>Système obsolescent</strong> ou hérité, encore en production mais difficile à maintenir. Souvent la cause d'un défaut de correctif." },
    { id: "v7", q: "Que signifie <em>to escalate</em> ?", a: "<strong>Faire remonter</strong> un incident à un niveau supérieur (niveau 2, éditeur, responsable). Verbe clé du support." },
    { id: "v8", q: "Que veut dire <em>root cause</em> ?", a: "<strong>Cause racine</strong> : l'origine réelle de l'incident, par opposition au symptôme. C'est ce qu'un rapport d'incident doit identifier." },
    { id: "v9", q: "Complète : <em>to ______ a deadline</em>.", a: "<em>to <strong>meet</strong> a deadline</em> (respecter) ou <em>to <strong>miss</strong> a deadline</em> (rater). Jamais <em>to respect</em>." },
    { id: "v10", q: "Que veut dire <em>on-premises</em> ?", a: "<strong>Sur site</strong>, dans les locaux de l'entreprise, par opposition au cloud. Souvent abrégé <em>on-prem</em>." }
  ],
  ateliers: [
    {
      id: "at-vocab",
      title: "Traduis les six termes",
      lang: "text",
      prompt: `<p>Donne l'équivalent anglais de chaque terme (un seul mot par ligne, dans l'ordre).</p>
      <ol>
        <li>hameçonnage</li>
        <li>rançongiciel</li>
        <li>correctif</li>
        <li>sauvegarde</li>
        <li>indisponibilité</li>
        <li>moindre privilège</li>
      </ol>`,
      starter: `1. `,
      model: `1. phishing
2. ransomware
3. patch
4. backup
5. downtime
6. least privilege`,
      checks: [
        { label: "1. phishing", test: /phishing/i },
        { label: "2. ransomware", test: /ransomware/i },
        { label: "3. patch", test: /\bpatch(es)?\b/i },
        { label: "4. backup", test: /backup/i },
        { label: "5. downtime", test: /downtime|outage/i },
        { label: "6. least privilege", test: /least\s+privilege/i }
      ]
    }
  ]
},

/* ============================== 05 ============================== */
{
  id: "05-oral",
  num: "05",
  title: "L'oral : 20 minutes pour convaincre",
  tag: "Coefficient 1",
  hot: false,
  intro: "Le dossier fait deux textes maximum et une courte vidéo. La note ne vient pas de la perfection linguistique mais de la capacité à restituer puis à dialoguer sans laisser de silence.",
  cours: `
  <h2>1. Phase 1 : les 5 minutes de présentation</h2>
  <pre class="codeblock"><code class="lang-text">0:00-0:30  cadrage : nature, source, date, theme des documents
0:30-2:00  document ecrit : idees cles, sans detail inutile
2:00-3:00  document video : ce qu'on voit, ce qui est dit, ton general
3:00-4:00  mise en relation : ce que les documents disent ensemble
4:00-5:00  commentaire : ce qui t'a marque, lien avec les metiers SIO</code></pre>
  <p>Quatre phrases d'amorce à connaître par cœur :</p>
  <ul>
    <li><em>The first document is an article from ..., published on ...</em></li>
    <li><em>The second document is a short video about ...</em></li>
    <li><em>Both documents deal with ..., but they approach it differently.</em></li>
    <li><em>What struck me most is ...</em></li>
  </ul>

  <h2>2. Phase 2 : les 15 minutes d'interaction</h2>
  <p>L'examinateur rebondit : il demande ton avis, ton expérience, une comparaison avec la France, une solution. Trois stratégies :</p>
  <ol>
    <li><strong>Reformuler avant de répondre</strong> : <em>So you are asking whether ...?</em> Ça te donne deux secondes et prouve la compréhension.</li>
    <li><strong>Structurer à voix haute</strong> : <em>There are two points here. First ..., second ...</em> Un plan audible vaut mieux qu'une réponse confuse.</li>
    <li><strong>Assumer une position</strong> : <em>From my point of view ..., because ...</em> Le correcteur note la prise de parole, pas la neutralité.</li>
  </ol>

  <h2>3. Gérer un trou de mémoire</h2>
  <pre class="codeblock"><code class="lang-text">Sorry, could you rephrase that?
Let me put it another way ...
I'm not sure about the exact figure, but the idea is ...
That's an interesting point, because ...
What about you - do you think ...?</code></pre>
  <p>Un blanc de trois secondes ne coûte rien. Une phrase française au milieu de l'anglais coûte cher. Si tu bloques, dis-le en anglais et continue.</p>

  <h2>4. Décrire un graphique ou un chiffre</h2>
  <ul>
    <li><em>The figure rose from 12% to 34% between 2024 and 2026.</em></li>
    <li><em>It more than doubled / it fell by a third.</em></li>
    <li><em>This accounts for about half of the total.</em></li>
    <li><em>Roughly / approximately / just over / just under</em> pour rester prudent.</li>
  </ul>

  <h2>5. Ce qui est réellement noté</h2>
  <ul>
    <li><strong>Compréhension</strong> : as-tu saisi l'idée des documents, y compris de la vidéo ?</li>
    <li><strong>Aisance en continu</strong> : peux-tu parler cinq minutes sans lire tes notes ?</li>
    <li><strong>Interaction</strong> : réponds-tu aux questions, ou récites-tu un texte préparé ?</li>
    <li><strong>Richesse</strong> : vocabulaire du domaine, pas seulement des phrases génériques.</li>
  </ul>
  <div class="callout callout--warn">
    <span class="callout__label">Erreur fatale</span>
    <p>Lire ses notes mot à mot. La grille évalue la production en continu : une lecture baissée coûte plus que trois fautes de grammaire.</p>
  </div>
  `,
  cards: [
    { id: "o1", q: "Comment commence la présentation orale ?", a: "Par le cadrage : <em>The first document is an article from ..., published on ...</em> Nature, source, date, thème. Trente secondes maximum." },
    { id: "o2", q: "Combien de temps pour la phase 1 et la phase 2 ?", a: "Environ <strong>5 minutes</strong> de présentation en continu, puis <strong>15 minutes</strong> d'interaction. Total 20 minutes après 20 minutes de préparation." },
    { id: "o3", q: "Que faire si tu ne comprends pas une question ?", a: "Le dire en anglais : <em>Sorry, could you rephrase that?</em> C'est une stratégie notée positivement, pas un aveu de faiblesse." },
    { id: "o4", q: "Comment structurer une réponse en interaction ?", a: "Annoncer le plan à voix haute : <em>There are two points here. First ..., second ...</em> puis conclure par une position personnelle." },
    { id: "o5", q: "Faut-il donner son avis ?", a: "<strong>Oui, en phase 2.</strong> L'interaction est notée : <em>From my point of view ..., because ...</em> Rester neutre fait perdre des points." },
    { id: "o6", q: "Que contient le dossier de l'oral ?", a: "<strong>Deux supports écrits maximum</strong> (article, page de site, extrait de notice) et <strong>un bref document vidéo</strong> non didactisé." },
    { id: "o7", q: "Comment commenter un chiffre ?", a: "<em>The figure rose from 12% to 34% between 2024 and 2026</em> ; <em>it more than doubled</em> ; <em>roughly half of the total</em>." },
    { id: "o8", q: "Pourquoi ne pas lire ses notes ?", a: "La grille évalue la <strong>production orale en continu</strong>. Une lecture baissée et mot à mot coûte plus cher que quelques fautes de grammaire." },
    { id: "o9", q: "Comment relier les deux documents ?", a: "<em>Both documents deal with ..., but they approach it differently.</em> Puis une phrase sur ce que chacun apporte de plus." }
  ],
  ateliers: [
    {
      id: "at-oral-plan",
      title: "Construis le plan de tes 5 minutes",
      lang: "text",
      prompt: `<p>Dossier : un article de <em>BBC Technology</em> (mars 2026) sur les attaques par rançongiciel contre les hôpitaux britanniques, et une vidéo de 90 secondes montrant le service informatique d'un hôpital revenir au papier pendant trois jours.</p>
      <p>Rédige en anglais le plan détaillé de ta prise de parole (5 minutes), en 5 blocs avec une phrase d'amorce par bloc. Tiens compte du cadrage, des deux supports, de la mise en relation et de ton commentaire.</p>`,
      starter: `1. Framing: `,
      model: `1. Framing: The first document is an article from BBC Technology, published in March 2026, about ransomware attacks against British hospitals.
2. Written document: The article explains that attackers target hospitals because patient data is critical, and that several trusts had not applied security patches.
3. Video: The short video shows the IT team of one hospital switching back to paper files for three days, which illustrates the operational impact.
4. Connection: Both documents deal with the same threat, but the article focuses on causes while the video shows the consequences on the ground.
5. Comment: What struck me most is the human cost; as a future IT professional, I would insist on offline backups and staff training.`,
      checks: [
        { label: "Cadrage (nature, source, date)", test: /(BBC|article)[\s\S]{0,120}(2026|March)/i },
        { label: "Idée principale du document écrit", test: /(ransomware|attack|patch|hospital)/i },
        { label: "Contenu de la vidéo restitué", test: /(video|paper|three days)/i },
        { label: "Mise en relation des deux supports", test: /(both documents|connection|whereas|while the)/i },
        { label: "Commentaire personnel + lien métier", test: /(struck me|as a future|IT professional|I would)/i }
      ]
    }
  ]
},

/* ============================== 06 ============================== */
{
  id: "06-pieges",
  num: "06",
  title: "Les 10 pièges de l'épreuve",
  tag: "À relire la veille",
  hot: true,
  intro: "Ces dix erreurs reviennent à chaque session. En les éliminant, tu gagnes des points sans apprendre un mot d'anglais supplémentaire.",
  cours: `
  <h2>La liste</h2>
  <ol>
    <li><strong>Écrire le compte rendu en anglais.</strong> Il est en français, la circulaire le dit explicitement.</li>
    <li><strong>Écrire l'écrit professionnel en français.</strong> Même erreur, dans l'autre sens.</li>
    <li><strong>Oublier la source.</strong> Un point de grille offert, perdu en dix secondes d'inattention.</li>
    <li><strong>Recopier des phrases entières.</strong> La circulaire exige de s'éloigner de la reprise littérale.</li>
    <li><strong>Traduire au lieu de restituer.</strong> Un compte rendu n'est pas une version : c'est une synthèse.</li>
    <li><strong>Raconter le document paragraphe par paragraphe.</strong> On regroupe par idées, pas par ordre linéaire.</li>
    <li><strong>Donner son avis dans le compte rendu.</strong> Seule la conclusion sur l'intérêt professionnel est valorisée.</li>
    <li><strong>Négliger le format de l'écrit professionnel.</strong> Un courriel sans objet ni formule perd la moitié de la note d'expression, même bien écrit.</li>
    <li><strong>Confondre les formules de politesse.</strong> <em>Yours faithfully</em> avec un nom, <em>Yours sincerely</em> sans nom : c'est une faute de registre.</li>
    <li><strong>Lire ses notes à l'oral.</strong> La production en continu est notée ; la lecture aussi, mais négativement.</li>
  </ol>
  <div class="callout callout--key">
    <span class="callout__label">Relecture en 5 minutes</span>
    <p>Trois passes, dans cet ordre : (1) les langues sont-elles dans le bon sens ? (2) la source est-elle citée ? (3) les verbes sont-ils au bon temps et les sujets à la 3e personne correctement marqués ?</p>
  </div>
  <h2>Ce qui ne coûte presque rien</h2>
  <p>Une faute d'orthographe, un article manquant, un accord approximatif : le correcteur note le niveau B2, pas l'excellence. Ce qui coûte, c'est l'incompréhension, le hors-sujet, le format manqué et la langue inversée.</p>
  `,
  cards: [
    { id: "p1", q: "Piège 1 : dans quelle langue le compte rendu ?", a: "<strong>En français.</strong> C'est écrit noir sur blanc dans l'annexe IV de la circulaire. L'écrit professionnel, lui, est en anglais." },
    { id: "p2", q: "Piège 2 : que doit-on citer obligatoirement ?", a: "La <strong>source</strong> du document : support, date, éventuellement auteur. C'est un point de la grille de compréhension." },
    { id: "p3", q: "Piège 3 : peut-on recopier une phrase du texte ?", a: "<strong>Non.</strong> La consigne impose de s'éloigner de la reprise littérale : reformule la structure entière de la phrase." },
    { id: "p4", q: "Piège 4 : comment organiser le compte rendu ?", a: "Par <strong>idées</strong>, pas par paragraphes. Le plan thématique (contexte, problème, causes, conséquences, réaction) est autorisé et plus lisible." },
    { id: "p5", q: "Piège 5 : un avis personnel dans le compte rendu ?", a: "Non. Seule une <strong>conclusion brève sur l'intérêt professionnel</strong> est valorisée par la circulaire." },
    { id: "p6", q: "Piège 6 : que doit contenir l'objet d'un courriel ?", a: "Une ligne : <strong>type d'écrit + sujet + référence ou date</strong>. Exemple : <em>Incident report - Intranet outage, 12 May 2026</em>." },
    { id: "p7", q: "Piège 7 : <em>Yours faithfully</em> ou <em>Yours sincerely</em> ?", a: "<strong>Faithfully</strong> quand tu ne connais pas le nom (<em>Dear Sir or Madam</em>), <strong>sincerely</strong> quand tu l'utilises (<em>Dear Mr Smith</em>)." },
    { id: "p8", q: "Piège 8 : faut-il lire ses notes à l'oral ?", a: "<strong>Non.</strong> La grille évalue la production en continu. Une lecture baissée coûte plus que des fautes de grammaire." },
    { id: "p9", q: "Piège 9 : que faire d'une faute de grammaire ?", a: "Rien, si le sens passe. Le niveau visé est <strong>B2</strong> : la communication prime. Ne t'arrête pas en cours de phrase pour te corriger." },
    { id: "p10", q: "Piège 10 : combien de temps pour la relecture ?", a: "<strong>10 à 15 minutes</strong>, en trois passes : sens des langues, source citée, temps et 3e personne." }
  ],
  ateliers: []
},

/* ============================== 07 ============================== */
{
  id: "07-checklist",
  num: "07",
  title: "Checklist J-1 et jour J",
  tag: "Dernière passe",
  hot: false,
  intro: "Une page, à relire la veille. Rien de nouveau, uniquement ce qui rapporte ou ce qui coûte.",
  cours: `
  <h2>Le matériel et le cadre</h2>
  <ul>
    <li>Dictionnaire <strong>unilingue</strong> autorisé : vérifie qu'il est bien dans ton sac.</li>
    <li>Montre ou chrono : l'épreuve fait deux heures, il faut savoir où tu en es à 50 et à 105 minutes.</li>
    <li>Brouillon : plan du compte rendu à gauche, plan de l'écrit professionnel à droite.</li>
  </ul>

  <h2>Ordre de travail</h2>
  <pre class="codeblock"><code class="lang-text">1. Survol : source, date, nature, theme      (5 min)
2. Lecture active, une idee par paragraphe   (10 min)
3. Compte rendu en francais, ~230 mots       (35 min)
4. Plan de l'ecrit pro : 5 blocs             (10 min)
5. Redaction en anglais                      (45 min)
6. Relecture en 3 passes                     (15 min)</code></pre>

  <h2>Relecture : les trois passes</h2>
  <ol>
    <li><strong>Langues</strong> : compte rendu en français, écrit pro en anglais. Une seule question, deux secondes.</li>
    <li><strong>Grille</strong> : source citée ? idées essentielles présentes ? format respecté ? nom de la consigne utilisé ?</li>
    <li><strong>Langue</strong> : 3e personne (-s), temps (present perfect vs past simple), modaux sans <em>to</em>, <em>look forward to hearing</em>.</li>
  </ol>

  <h2>Les cinq phrases à avoir en tête</h2>
  <ul>
    <li><em>I am writing to report / to request ...</em></li>
    <li><em>I would be grateful if you could ...</em></li>
    <li><em>I look forward to hearing from you.</em></li>
    <li><em>Both documents deal with ..., but they approach it differently.</em></li>
    <li><em>From my point of view ..., because ...</em></li>
  </ul>

  <h2>Le jour de l'oral</h2>
  <ul>
    <li>20 minutes de préparation : 5 minutes pour lire, 10 pour écrire le plan en 5 blocs, 5 pour répéter à voix basse.</li>
    <li>Tu parles cinq minutes sans notes, puis tu dialogues quinze minutes. Si tu bloques, tu le dis en anglais.</li>
    <li>Tu connais ton parcours par cœur en anglais : formation, stage, projet, ce que tu veux faire ensuite. Ces questions tombent presque toujours.</li>
  </ul>
  <div class="callout callout--key">
    <span class="callout__label">Le seul vrai risque</span>
    <p>Le hors-sujet. Si tu n'as pas compris le document, appuie-toi sur le titre, le chapeau et les deux premières phrases : ils donnent le thème, et le thème suffit pour ne pas être hors-sujet.</p>
  </div>
  `,
  cards: [
    { id: "k1", q: "Combien de temps pour le compte rendu le jour J ?", a: "Environ <strong>35 minutes</strong>, après 15 minutes de lecture active. Il fait ~230 mots pour un support de 50 lignes." },
    { id: "k2", q: "Que vérifier en premier à la relecture ?", a: "Le <strong>sens des langues</strong> : compte rendu en français, écrit professionnel en anglais. C'est le contrôle le plus rentable." },
    { id: "k3", q: "Quelles cinq phrases avoir en tête ?", a: "<em>I am writing to report ...</em> · <em>I would be grateful if you could ...</em> · <em>I look forward to hearing from you.</em> · <em>Both documents deal with ...</em> · <em>From my point of view ...</em>" },
    { id: "k4", q: "Comment utiliser les 20 minutes de préparation de l'oral ?", a: "5 minutes de lecture, 10 minutes de plan en cinq blocs, 5 minutes de répétition à voix basse. Pas de rédaction complète." },
    { id: "k5", q: "Que faire si tu n'as pas compris le document ?", a: "T'appuyer sur le <strong>titre</strong>, le <strong>chapeau</strong> et les premières phrases : ils donnent le thème, et le thème évite le hors-sujet." }
  ],
  ateliers: []
}

];
