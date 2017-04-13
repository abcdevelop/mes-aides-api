module.exports = {
    dateDeValeur: new Date('2017-04-12'),
    individus: [
        {
            role: 'demandeur',
            // Le demandeur touche en réalité 1200 d'ARE par mois depuis 6 mois. Il déclare 7200 de revenus sur l'année glissante.
            // Mes-Aides ne connait que le montant sur l'année glissante et sur chacun des trois derniers mois. Il répartit de manière uniforme les revenus sur les mois M-12 à M-4.
            ressources: [
                {
                    periode: '2017-03',
                    type: 'allocationsChomage',
                    montant: 1200
                },
                {
                    periode: '2017-02',
                    type: 'allocationsChomage',
                    montant: 1200
                },
                {
                    periode: '2017-01',
                    type: 'allocationsChomage',
                    montant: 1200
                },
                {
                    periode: '2016-12',
                    type: 'allocationsChomage',
                    montant: 400
                },
                {
                    periode: '2016-11',
                    type: 'allocationsChomage',
                    montant: 400
                },
                {
                    periode: '2016-10',
                    type: 'allocationsChomage',
                    montant: 400
                },
                {
                    periode: '2016-09',
                    type: 'allocationsChomage',
                    montant: 400
                },
                {
                    periode: '2016-08',
                    type: 'allocationsChomage',
                    montant: 400
                },
                {
                    periode: '2016-07',
                    type: 'allocationsChomage',
                    montant: 400
                },
                {
                    periode: '2016-06',
                    type: 'allocationsChomage',
                    montant: 400
                },
                {
                    periode: '2016-05',
                    type: 'allocationsChomage',
                    montant: 400
                },
                {
                    periode: '2016-04',
                    type: 'allocationsChomage',
                    montant: 400
                },
            ],
            specificSituations: [],
            interruptedRessources: [],
        }
    ]
};
