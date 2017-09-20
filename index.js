const express = require('express');

const {json} = require('body-parser');

const port = 3005;

const app = express();

app.use(json());

const tsmCtrl = require("./controllers/tsmCtrl");

const c9Ctrl = require("./controllers/c9Ctrl");

const clgCtrl = require("./controllers/clgCtrl");

//get all teams
//get teams by ID 
//get teams by name

app.get('/api/teams', () => {}) //get ALL teams

app.get('/api/TSM', tsmCtrl.getTSM)
app.get('/api/TSM', tsmCtrl.getTSMType)
app.get('/api/TSM/:id', tsmCtrl.getTSMId)

app.get('/api/CLG', clgCtrl.getCLG)
app.get('/api/CLG', clgCtrl.getCLGType)
app.get('/api/CLG/:id', clgCtrl.getCLGId)

app.get('/api/C9', c9Ctrl.getC9)
app.get('/api/C9', c9Ctrl.getC9Type)
app.get('/api/C9/:id', c9Ctrl.getC9Type)

//put each team

//post each team

//del each team 

app.listen(port, () => {
    console.log(`I'll be right by your side till ${3005}`)
})