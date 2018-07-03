exports.seed = function (knex, Promise) {
  return knex('users').del()

    .then(function () {
      return knex('users').insert(
        [{
          id: 1,
          username: 'lucywu',
          firstName: 'Lucy',
          lastName: 'Wu',
          userType: 'Jobseeker',
          location: 'Auckland',
          preferredPronouns: 'She/Her',
          email: 'lucywu@hotmail.com',
          introduction: 'Hi my name is Lucy and I am currently looking for a job that allows me to pursue my passion for writing on the side.  I love working on tasks in small teams so would like an administrative or hospitality role to achieve this.',
          value1: 'punctuality',
          value2: 'loyalty',
          value3: 'kindness',
          value4: 'inclusiveness',
          value5: 'cooperation',
          valuesApplied: 'I am a very punctual person and value others who are as well. I worked in a cafe where I always arrived on time. I am loyal, kind, co-operative and inclusive, which is why I love working on small teams.  When I am in this environment I am most motivated and happy when I work.'
        }, {
          id: 2,
          username: 'rubymcdonald',
          firstName: 'Ruby',
          lastName: 'McDonald',
          userType: 'Jobseeker',
          location: 'Taupo',
          preferredPronouns: 'They/Them',
          email: 'ruby.m@yahoo.com',
          introduction: 'Hi I am a enthusiastic person who is loves dogs and flying kites!  I would love a job where I can be active outside ',
          value1: 'community',
          value2: 'positivity',
          value3: 'diversity',
          value4: 'teamwork',
          value5: 'acceptance',
          valuesApplied: 'I have worked at the SPCA for 3 years.  This work has been very important to me as I got to contribute to a diverse communities needs. Although there was sometimes a lot of pressure to look after pets, I learn a great deal about teamwork and acceptance when it came to making sure the pet got to live in a good home.'
        }, {
          id: 3,
          username: 'bobjones',
          firstName: 'Bob',
          lastName: 'Jones',
          userType: 'Employer',
          location: 'Auckland',
          preferredPronouns: 'He/Him',
          email: 'bob.jones@bobjones.com',
          introduction: 'Bob Jones needs an office fixer to join our team.  We are a very clumsy bunch and need a good fixer to help us mend what we break',
          value1: 'challenge',
          value2: 'honesty',
          value3: 'curiosity',
          value4: 'innovation',
          value5: 'leadership',
          valuesApplied: 'I will need someone who enjoys a good challenge and are curious as some of the broken items can be difficult to repair.  I like to work with honest people who communicate well. The office fixer will need to be innovative to be able to find the best fix. There is an opportunity for the office fix to show leadership and teach us ways to reduce how many things we break.'
        }]
      )
    })
}
