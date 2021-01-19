const BookInstance = require('../models/bookinstance');

// 显示完整的书籍列表
exports.bookinstance_list = (req, res, next) => { 
    BookInstance.find()
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });
};

// 为每位书籍显示详细信息的页面
exports.bookinstance_detail = (req, res) => { res.send('未实现：书籍详细信息：' + req.params.id); };

// 由 GET 显示创建书籍的表单
exports.bookinstance_create_get = (req, res) => { res.send('未实现：书籍创建表单的 GET'); };

// 由 POST 处理书籍创建操作
exports.bookinstance_create_post = (req, res) => { res.send('未实现：创建书籍的 POST'); };

// 由 GET 显示删除书籍的表单
exports.bookinstance_delete_get = (req, res) => { res.send('未实现：书籍删除表单的 GET'); };

// 由 POST 处理书籍删除操作
exports.bookinstance_delete_post = (req, res) => { res.send('未实现：删除书籍的 POST'); };

// 由 GET 显示更新书籍的表单
exports.bookinstance_update_get = (req, res) => { res.send('未实现：书籍更新表单的 GET'); };

// 由 POST 处理书籍更新操作
exports.bookinstance_update_post = (req, res) => { res.send('未实现：更新书籍的 POST'); };