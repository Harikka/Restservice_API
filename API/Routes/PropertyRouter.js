'use strict';

module.exports = function (app) {
    var userlist = require('../Controller/PropertyListcontroller');
    app.route('/users')
        .get(userlist.list_all_users)
        .post(userlist.create_a_user);
    app.route('/House')
        .get(userlist.list_all_Houserisks)
        .post(userlist.create_a_user);
    app.route('/AutoMobile')
        .get(userlist.list_all_AutoMobilerisks)
        .post(userlist.create_a_user);
    app.route('/Medical')
        .get(userlist.list_all_Medicalrisks)
        .post(userlist.create_a_user);
    app.route('users/:userId')
        .get(userlist.read_a_user);
}