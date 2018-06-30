exports.seed = function (knex, Promise) {

  return knex('jobseeker').del()

  .then(function () {

      return knex('jobseeker').insert(
        {
          username: 'lucywu',
          firstName: 'Lucy',
          secondName: 'Wu',
          location: 'Auckland',
          preferedPronouns: 'She/Her',
          email: 'lucywu@hotmail.com',
          personalIntro: 'Hi my name is Lucy and I am currently looking for a job that allows me to pursue my passion for writing on the side.  I love working on tasks in small teams so would like an administrative or hospitality role to achieve this.',
          valuesApplied: 'I am a very punctual person and value others who are as well. I worked in a cafe where I always arrived on time. I am loyal, kind, co-operative and inclusive, which is why I love working on small teams.  When I am in this environment I am most motivated and happy when I work.'
        },{
          username: 'rubymcdonald',
          firstName: 'Ruby',
          secondName: 'McDonald',
          location: 'Taupo',
          preferedPronouns: 'They/Them',
          email: 'ruby.m@yahoo.com',
          personalIntro: 'Hi I am a enthusiastic person who is loves dogs and flying kites!  I would love a job where I can be active outside ',
          valuesApplied: 'I have worked at the SPCA for 3 years.  This work has been very important to me as I got to contribute to a diverse communities needs. Although there was sometimes a lot of pressure to look after pets, I learn a great deal about teamwork and acceptance when it came to making sure the pet got to live in a good home.'
        })
  })
}
