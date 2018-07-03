exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('values').del()
    .then(function () {
      // Inserts seed entries
      return knex('values').insert([
        {id: 1,
          employer_id: 'bobjones',
          value1: 'challenge',
          value2: 'honesty',
          value3: 'curiosity',
          value4: 'innovation',
          value5: 'leadership'
        }, {
          id: 2,
          username: 'lucywu',
          value1: 'punctuality',
          value2: 'loyalty',
          value3: 'kindness',
          value4: 'inclusiveness',
          value5: 'cooperation'
        }, {
          id: 3,
          username: 'rubymcdonald',
          value1: 'community',
          value2: 'positivity',
          value3: 'diversity',
          value4: 'teamwork',
          value5: 'acceptance'
        }
      ])
    })
}
