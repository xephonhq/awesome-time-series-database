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
  license: 'apache-2.0'
}

export { prometheus }