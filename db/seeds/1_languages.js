
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('languages').del()
    .then(function () {
      // Inserts seed entries
      return knex('languages').insert([
        {
          id: 1, 
          title: 'English'
        },
        {
          id: 2, 
          title: 'French'
        },
        {
          id: 3, 
          title: 'Spanish'
        },
      ]);
    });
};
