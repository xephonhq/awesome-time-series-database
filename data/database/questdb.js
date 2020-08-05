let questdb = {
    name: 'questdb',
    displayName: 'QuestDB',
    website: 'https://questdb.io/',
    github: 'https://github.com/questdb/questdb',
    status: 'active',
    lang: 'java', // TODO: it also uses cpp for SIMD
    backend: ['localfs'],
    protocol: ['postgres'],
    query: ['sql'],
    license: 'apache-2.0',
    author: [
        'bluestreak01', // 2,287 commits out of 2,582 as of 2020-08-05
        'mpsq'
    ],
    contributedBy: [
        'asafm',
        'killme2008',
        'at15'
    ]
}

export {questdb}