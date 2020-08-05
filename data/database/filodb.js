let filodb = {
    name: 'filodb',
    displayName: 'FiloDB',
    website: 'https://github.com/filodb/FiloDB',
    github: 'https://github.com/filodb/FiloDB',
    status: 'active',
    lang: 'scala',
    backend: ['cassandra'],
    protocol: ['http'], // TODO: it's actually influxdb line protocol
    query: ['promql', 'metricsql'],
    license: 'apache-2.0',
    author: [
        'velvia',
        'vishramachandran',
        'broneill'
    ],
    contributedBy: [
        'at15'
    ],
}

export { filodb }