const gw = require('../models/gowhere');
const express = require('express');
const router = express.Router();

router.put('/createData', (req, res) => {
    gw.create(req.body).then(data => {
        res.send({ status: 'ok', id: data._id })
    }).catch(err => {
        res.send(err);
    })
})
router.get('/getHomeData', (req, res) => {
    gw.findOne({data_name:req.query.data_name})
        .then(data => {
            res.send({ status: 'ok', HomeData: data.data })
        }).catch(e => res.send(e));
})
router.get('/getCityData', (req, res) => {
    gw.findOne({data_name:req.query.data_name})
        .then(data => {
            res.send({ status: 'ok', cityData: data.data })
        }).catch(e => res.send(e));
})
router.get('/getDetailData', (req, res) => {
    gw.findOne({data_name:req.query.data_name})
        .then(data => {
            res.send({ status: 'ok', detailData: data.data })
        }).catch(e => res.send(e));
})


module.exports = router;