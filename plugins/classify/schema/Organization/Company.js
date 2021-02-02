module.exports = {
  id: 'Company',
  //
  children: {},
  //
  categories: {
    mapping: [
      'companies listed on the new york stock exchange',
      'jazz record labels',
      'video game development companies',
      'american record labels',
      'companies listed on nasdaq',
      'video game companies of the united states',
      'companies formerly listed on the london stock exchange',
      'multinational companies headquartered in the united states',
      'companies listed on the tokyo stock exchange',
      're-established companies',
      'companies based in new york city',
      'defunct video game companies',
      'companies formed by merger',
      'entertainment companies based in california',
    ],
    patterns: [/companies (established|based) in ./],
  },
  //
  descriptions: {
    patterns: [],
  },
  //
  infoboxes: {
    mapping: [],
    patterns: [],
  },
  //
  sections: {
    mapping: [],
    patterns: [],
  },
  //
  templates: {
    mapping: [],
    patterns: [],
  },
  //
  titles: {
    mapping: [],
    patterns: [],
  },
}
