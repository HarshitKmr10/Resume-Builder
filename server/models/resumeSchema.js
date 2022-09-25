const mongoose = require('mongoose')

const ResumeSchema = new mongoose.Schema({

        basics: {
          "name": "Piyush",
          "label": "Programmer",
          "image": "",
          "email": "piyush@gmail.com",
          "phone": "XXXX",
          "url": "https://piyush.com",
          "summary": "A summary of piyush…",
          "location": {
            "address": "2712 Broadway St",
            "postalCode": "CA 94115",
            "city": "New Delhi",
            "countryCode": "+91",
            "region": "India"
          },
          profiles: [{
            "network": "Twitter",
            "username": "piyushjha0409",
            "url": "https://twitter.com/piyushj"
          }]
        },
        work: [{
          "name": "Company",
          "position": "Project-Head",
          "url": "https://company.com",
          "startDate": "2013-01-01",
          "endDate": "2014-01-01",
          "summary": "Description…",
          "highlights": [
            "Started the company"
          ]
        }],
        education: [{
          "institution": "University",
          "url": "https://institution.com/",
          "area": "Software Development",
          "studyType": "Bachelor",
          "startDate": "2011-01-01",
          "endDate": "2013-01-01",
          "score": "4.0",
          "courses": [
            "DB1101 - Basic SQL"
          ]
        }],

        skills: [{
          "name": "Web Development",
          "level": "Graduation",
          "keywords": [
            "HTML",
            "CSS",
            "JavaScript"
          ]
        }],

        languages: [{
          "language": "Hindi",
          "fluency": "Native speaker"
        }],
        intrest: [{
          "name": "Wildlife",
          "keywords": [
            "Ferrets",
            "Unicorns"
          ]
        }],
        projects: [{
          "name": "Project",
          "description": "Description…",
          "highlights": [
            "Won award at AIHacks 2016"
          ],
          keywords: [
            "HTML"
          ],
          startDate: "2019-01-01",
          endDate: "2021-01-01",
          url: "https://project.com/",
          roles: [
            "Team Lead"
          ],
          entity: "Entity",
          type: "application"
        }]
})

module.exports = ResumeSchema = mongoose.model('Resume', ResumeSchema);