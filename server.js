var express = require('express')
var faker = require('faker')
var bodyParser = require('body-parser')
var expressLayouts = require('express-ejs-layouts')
var app = express()
var port = 4000

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(bodyParser.urlencoded())

app.get('/', (req, res) => {
    var aulas = [{
            dia: 1,
            nome: 'Comunicação',
            modulo: 'Básico',
            timestamp: '22/09/2018',
            hora: '15:30',
            material: [{
                material: 'Teoria1.pdf'
            },
            {
                material: 'Slides.ppt'
            },
            {
                material: 'Atividades.docx'
            }
        ]
    },
        {
            dia: 2,
            nome: 'Gestão',
            modulo: 'Intermediário',
            timestamp: '22/09/2017',
            hora: '15:30',
            material: [{
                material: 'Teoria1.pdf'
            },
            {
                material: 'Slides.ppt'
            },
            {
                material: 'Atividades.docx'
            }
        ]
    },
        {
            dia: 3,
            nome: 'Administração',
            modulo: 'Básico',
            timestamp: '22/09/2018',
            hora: '15:30',
            material: [{
                    material: 'Teoria1.pdf'
                },
                {
                    material: 'Slides.ppt'
                },
                {
                    material: 'Atividades.docx'
                }
            ]
        },
        {
            dia: 1,
            nome: 'Comunicação',
            modulo: 'Básico',
            timestamp: '22/09/2018',
            hora: '15:30',
            material: [{
                material: 'Teoria1.pdf'
            },
            {
                material: 'Slides.ppt'
            },
            {
                material: 'Atividades.docx'
            }
        ]
    },
        {
            dia: 2,
            nome: 'Gestão',
            modulo: 'Intermediário',
            timestamp: '22/09/2017',
            hora: '15:30',
            material: [{
                material: 'Teoria1.pdf'
            },
            {
                material: 'Slides.ppt'
            },
            {
                material: 'Atividades.docx'
            }
        ]
    },
        {
            dia: 3,
            nome: 'Administração',
            modulo: 'Básico',
            timestamp: '22/09/2018',
            hora: '15:30',
            material: [{
                    material: 'Teoria1.pdf'
                },
                {
                    material: 'Slides.ppt'
                },
                {
                    material: 'Atividades.docx'
                }
            ]
        },{
            dia: 1,
            nome: 'Comunicação',
            modulo: 'Básico',
            timestamp: '22/09/2018',
            hora: '15:30',
            material: [{
                material: 'Teoria1.pdf'
            },
            {
                material: 'Slides.ppt'
            },
            {
                material: 'Atividades.docx'
            }
        ]
    },
        {
            dia: 2,
            nome: 'Gestão',
            modulo: 'Intermediário',
            timestamp: '22/09/2017',
            hora: '15:30',
            material: [{
                material: 'Teoria1.pdf'
            },
            {
                material: 'Slides.ppt'
            },
            {
                material: 'Atividades.docx'
            }
        ]
    },
        {
            dia: 3,
            nome: 'Administração',
            modulo: 'Básico',
            timestamp: '22/09/2018',
            hora: '15:30',
            material: [{
                    material: 'Teoria1.pdf'
                },
                {
                    material: 'Slides.ppt'
                },
                {
                    material: 'Atividades.docx'
                }
            ]
        }
    ]
    res.render('pages/home',{ aulas: aulas })
  })
  
  app.use(express.static(__dirname + '/public'))
  app.listen(port)
  console.log('Servidor iniciado em http://localhost:' + port)
