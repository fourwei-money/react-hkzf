/*
 * @Author: alkun
 * @Date:   2019-03-25 23:06:48
 * @Last Modified by:   alkun
 * @Last Modified time: 2019-03-26 09:57:15
 */

'use strict';
const fs = require('fs')
const express = require('express')
const Student = require('./student')
const router = express.Router()
router
    .get('/', (req, res) => {
        fs.readFile('./db.json', (err, data) => {
            if (err) {
                return res.status(500).send('Server error.')
            }
            var students = JSON.parse(data).students
            res.render('index.html', {
                students
            })
        })
    })
    .get('/students/add', (req, res) => {
        Student.find()
        res.render('new.html')
    })
    .post('/students/add', (req, res) => {
        fs.readFile('./db.json', (err, data) => {
            if (err) {
                return res.status(500).send('Server error.')
            }
            var students = JSON.parse(data).students
            students.push(req.body)
            // fs.writeFile('./db.json', (err, data) => {})
            res.render('index.html', {
                students
            })
        })


        // res.render('post.html')
        // arr.unshift(req.body)
        console.log(req.body);
        // res.render('post.html')
        // res.redirect('/')
    })
    .get('/post', (req, res) => {
        res.render('post.html')
    })
    .post('/post', (req, res) => {
        console.log(req.body);
        arr.unshift(req.body)
            // res.render('post.html')
        res.redirect('list')

    })
    .get('/list', (req, res) => {
        res.render('list.html', {
            list: arr
        })
    })

module.exports = router
/*module.exports = function(app) {
    app
        .get('/', (req, res) => {
            fs.readFile('./db.json', (err, data) => {
                if (err) {
                    return res.status(500).send('Server error.')
                }
                var students = JSON.parse(data).students
                res.render('index.html', {
                    students
                })
            })
        })
        .get('/student', (req, res) => {
            res.render('new.html')
        })
        .get('/student', (req, res) => {
            // res.render('post.html')
            // arr.unshift(req.body)
            console.log(req.body);
            // res.render('post.html')
            res.redirect('/')
        })
        .get('/post', (req, res) => {
            res.render('post.html')
        })
        .post('/post', (req, res) => {
            console.log(req.body);
            arr.unshift(req.body)
                // res.render('post.html')
            res.redirect('list')

        })
        .get('/list', (req, res) => {
            res.render('list.html', {
                list: arr
            })
        })
}*/
