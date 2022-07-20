'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'BirdsPictures', // name of Source model
        'bird_id', // name of the key we're adding 
        {
            type: Sequelize.INTEGER,
            references: {
                model: 'Birds', // name of Target model
                key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
        }
    );
},
down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'BirdsPictures', // name of Source model
        'bird_id' // key we want to remove
    );
}
};
