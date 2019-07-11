const router = require('express').Router();
let Account = require('./accountmodel');



// post mapping
router.route('/add').post((req, res) => {
  const useraccount = req.body.useraccount;

  const newAccount = new Account({useraccount});

  newAccount.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;