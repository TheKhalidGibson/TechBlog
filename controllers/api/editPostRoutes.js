const router = require('express').Router();
const { editPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
 
  const editpost = await editPost.findAll()

  editpost = editpost.map(editpost => editpost.get({plain:true}));

  res.json(editpost);

});

router.post('/', withAuth, async (req, res) => {
    try {
      const newEdit = await editPost.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      console.log(newEdit)
  
      res.status(200).json(newEdit);
    }catch (err) {
      console.log(err)
      res.status(400).json(err);
    }
  });
  
  router.put('/:id', withAuth, async (req, res) => {
    try {
      const newEdit = await editPost.update(req.body, {
       where:{
        id: req.params.id,
        user_id: req.session.user_id,
      },
      });
  
      res.status(200).json(newEdit);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const editData = await editPost.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      console.log(editData)
  
      if (!editData) {
        res.status(404).json({ message: 'No edit found with this id!' });
        return;
      }
  
      res.status(200).json(editData);
    } catch (err) {
      console.log(err)
      res.status(500).json(err);
    }
  });

module.exports = router;