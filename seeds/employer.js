exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          username: 'bobjones',
          firstName: 'Bob',
          secondName: 'Jones',
          companyName: 'Bob Jones Corp.',
          location: 'Auckland',
          contactPerson: 'Bob Jones',
          preferredPronouns: 'He/Him',
          email: 'bob.jones@bobjones.com',
          jobTitle: 'Office Fixer',
          jobDescription: 'Bob Jones needs an office fixer to join our team.  We are a very clumsy bunch and need a good fixer to help us mend what we break',
          jobValuesApplied: 'I will need someone who enjoys a good challenge and are curious as some of the broken items can be difficult to repair.  I like to work with honest people who communicate well. The office fixer will need to be innovative to be able to find the best fix. There is an opportunity for the office fix to show leadership and teach us ways to reduce how many things we break.',
          jobHours: '20',
          jobSalary: '$22 an hour'
        }
      ])
    })
}
