const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postsRoutes = require('./postsRoutes');
const commentsRoutes = require('./commentsRoutes');
const editPostRoutes = require('./editPostRoutes');

router.use('/users', userRoutes);
router.use('/posts', postsRoutes);
router.use('/comments', commentsRoutes);
router.use('/editPost', editPostRoutes);

module.exports = router;
