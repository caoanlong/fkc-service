var mongoose = require('mongoose');

// 竞猜投注的表结构
module.exports = new mongoose.Schema({
    // 竞猜人
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Member'
    },
    // 竞猜选项
    projectOption: {
        content: String,
        odds: String
    },
    // 投注金额
    goldBeanNum: String,
    // 投注项目
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    },
    // 添加时间
    addTime: {
        type: Date,
        default: new Date()
    }
})