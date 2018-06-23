#!/usr/bin/python

import csv
import json
from yattag import Doc

encoder = json.JSONEncoder()

with open('roster.csv', 'r') as f:
    filenames = ['first', 'last', 'year', 'major', 'position', 'hometown', 'hs', 'hasRosterPicture']
    reader = csv.DictReader(f, filenames)
    cheerleaders = []
    i = 0
    for row in reader:
        if i > 0:
            cheerleaders.append(row)
        i += 1
    f.close()

with open('roster.js', 'w') as rosterfile:
    json_roster = json.dumps(encoder.encode(cheerleaders))
    rosterfile.write('var roster = ' + json_roster)
    f.close()

expand_year = {'Fr' : 'Freshman', 'Sp' : 'Sophomore', 'Jr' : 'Junior', 'Sr' : 'Senior', 'Grad' : 'Graduate Student'}

def generateMobileInfo(index, title):
    if cheerleader[index]:
        line('b', '%s: ' % title)
        if index is 'year':
            text(expand_year[cheerleader[index]])
        else:
            text(cheerleader[index])
        line('br', '')

# generate mobile views for each cheerleader
for cheerleader in cheerleaders:
    cheerleader = dict(cheerleader)
    name = cheerleader['first'] + ' ' + cheerleader['last']
    doc, tag, text, line = Doc().ttl()
    doc.asis('<!DOCTYPE html>')
    with tag('html'):
        with tag('head'):
            with tag('title'):
                text(name)
            with tag('script', src='http://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js'):
                pass
            with tag('script', src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js'):
                pass
            with tag('script', src='cheer.js'):
                pass
            doc.asis('<link rel="stylesheet" href="https://identity.uchicago.edu/c/fonts/proximanova.css">')
            doc.asis('<link rel="stylesheet" href="uccheer.css">')
        with tag('body'):
            with tag('div', klass='roster-page'):
                with tag('h1', klass='roster-name'):
                    text(name)
                if cheerleader['position']:
                    with tag('div', klass='position'):
                        with tag('em'):
                            text(cheerleader['position'])
                if cheerleader['hasRosterPicture'].lower() == "yes":
                    img_link = 'Media/roster_photos/Roster%s.jpg' % cheerleader['first']
                    alt_text = 'roster photo of %s' % name
                    doc.stag('img', src=img_link, alt=alt_text)
                with tag('div', klass='roster-info-mobile'):
                    generateMobileInfo('year', 'Year')
                    generateMobileInfo('major', 'Major')
                    generateMobileInfo('hs', 'High School')
                    generateMobileInfo('hometown', 'Hometown')
        with open('%s.html' % cheerleader['first'], 'w') as f:
            f.write(doc.getvalue())




    #print(doc.getvalue())
