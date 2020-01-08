let prometheus = {
  name: 'prometheus',
  displayName: 'Prometheus',
  website: 'https://prometheus.io/',
  github: 'https://github.com/prometheus/prometheus',
  status: 'active',
  lang: 'go',
  backend: ['localfs'],
  protocol: ['prometheus'],
  query: ['promql'],
  license: 'apache-2.0',
  author: [
    'fabxc', // wrote the new tsdb engine, now at google, heck ... everyone is going to google ...
    'juliusv',
    'brian-brazil', // RobustPerception
    'beorn7', // now at grafana
    'tomwilkie', // also grafana, worked on cortex
  ],
  contributedBy: [
    'at15'
  ]
}

export { prometheus }