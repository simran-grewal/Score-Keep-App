import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from "./../imports/api/players";
import App from "./../imports/ui/App";

Meteor.startup(() => {

  Tracker.autorun(() => {
    var players = Players.find({}, {sort: {score: -1}}).fetch();
    let positionedPlayer = calculatePlayerPositions(players);
    let title = "Score Keep";
    var createdBy = "CreatedBy Simran Grewal";

    ReactDom.render(
      <App title = {title} players = {positionedPlayer} createdBy = {createdBy}/>,
      document.getElementById('app')
    );
  });

});
