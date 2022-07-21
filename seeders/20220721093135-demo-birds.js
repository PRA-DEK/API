'use strict';

module.exports = {
async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Birds', [{
        public_name: 'Pigeon',
        scientific_name: 'Columba livia',
        family: 'Columbidés',
        size: 34,
        weigth: 240,
        description: "Le pigeon biset peut être considéré comme l'ancêtre du pigeon domestique particulièrement bien connu et abondant dans les villes et dans les villages, même si ce dernier, en raison de croisements continus, a perdu beaucoup des caractéristiques morphologiques qui définissent son prédécesseur. Il possède une sihouette assez remarquable : corps trapu, ailes étoites et pointues, tête ronde et petite, bec mince et court. En général, son plumage est gris bleuté, plus pâle sur le dos et avec des tons verts et violacés sur les côtés du cou. Le croupion est blanc, les ailes portent deux barres de couleur noire qui se remarquent bien, surtout en vol. Vu du dessous, on aperçoit parfaitement les axillaires blanches. (C'est le seul pigeon à posséder cette caractéristique). La tête, la poitrine et le ventre ont un ton gris bleuté plus sombre que les plumes du dos. Le bec est gris avec la base blanche. Les jambes et les pieds sont rouges, et l'iris orange rougeâtre avec un anneau oculaire intérieur jaune.",
        main_picture_url: "",
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
},

async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Birds', null, {});
}
};
