const router = require('express').Router();
const { Posts } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
 
  const posts = await Posts.findAll()

  posts = posts.map(post => post.get({plain:true}));

  res.json(posts);

});

router.post('/', withAuth, async (req, res) => {
  try {
    const newPosts = await Posts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    console.log(newPosts)

    res.status(200).json(newPosts);
  }catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const newPosts = await Posts.update(req.body, {
     where:{
      id: req.params.id,
      user_id: req.session.user_id,
    },
    });

    res.status(200).json(newPosts);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postsData = await Posts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    console.log(postsData)

    if (!postsData) {
      res.status(404).json({ message: 'No posts found with this id!' });
      return;
    }

    res.status(200).json(postsData);
  } catch (err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;
