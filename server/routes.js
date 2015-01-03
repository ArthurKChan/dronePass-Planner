var utils = require('./db/utils');

module.exports = {
  'test1': {
    get: function(req, res){
      console.log('GETTING THE STUFF')
      res.status(200).send('hello world');
    },
    post: function(req, res){
      res.status(200).send('whut');
    }
  },


  /**
  * expects post method
  * expects user_id (INTEGER), login (STRING), and owner_authority (INTEGER)
  * invokes addLandOwner to insert row to land_owner table
  */
  'registerUser': {
    post: function(req, res){
      rb = req.body;
      utils.addLandOwner(rb.user_id, rb.login, rb.owner_authority)
      .then(function(result){
        res.status(200).send(result);
      })
      .catch(function(error){
        res.status(400).send(error);
      });
    }
  },


  /**
  * expects delete method
  * expects user_id (INTEGER)
  * invokes removeLandOwner to delete row where id == user_id
  */
  'removeUser': {
    delete: function(req, res){
      rb = req.body;
      utils.removeLandOwner(rb.user_id)
      .then(function(removed_entry){
        res.status(200).send(removed_entry.toString());
      })
      .catch(function(error){
        res.status(400).send(error);
      });
    }
  },

  'registerAddress': {
    post: function(req, res){

    }
  },

  'removeAddress': {
    post: function(req, res){

    }
  },

  'togglePermissions': {
    post: function(req, res){

    }
  },

  'setException': {
    get: function(req, res){

    }
  },

  'removeException': {
    post: function(req, res){

    }
  }

}