# UC Cheer Webpage

## General
The site is written in AngularJS, HTML, and CSS. There are two distinct views for mobile and desktop rather than a responsive design.

### Design Credit
Feel free to make changes as needed but unless the website is significantly redesigned, 
please maintain a visible credit to me (Emmi Russo) for original design with a 
link to my personal portfolio (emrusso.github.io)

So, something like
`<a href="https://emrusso.github.io" target="_blank">
    Original design &copy; Emmi Russo, 2017
</a>`

## AngularJS
Angular is really nice because it lets you abstract repeated HTML into a template and tie it into your javascript. 
There are still lots of things (specifically, the navbar and it would be more appropriate to generate the mobile roster pages with Angular) 
that could stand to be abstracted out. But creating separate views like that requires some routing which just isn't worth changing at this point.

Additionally, this is running AngularJS 1 which is fairly old but updating to Angular 2 would require a significant reworking. 
Angular 1 is in long-term support though so this should be set for a good bit. If you need a reference for
AngularJS, go to the docs for [AngularJS 1.x](https://angularjs.org/) NOT the new Angular (angular.io). W3Schools also has a
good overview.

## Roster
For my term as webmaster, I've been lazy and hard-coded roster information. But, because I am a kind soul,
I have written a Python script to transform a csv sheet to JSON format which is then used by the angular
controller. All the script really does is read the csv file and then create the right string. 
The reason you need the Python script is because JavaScript can't read in from a local csv file for security reasons 
and it's more trouble than it's worth to set up something serverside.

`roster_transform.py` also generates the individual mobile views for roster. It uses [yattag](http://www.yattag.org/download-install)
to generate HTML. This isn't a base package so you'll probably have to install it - you can just install it with
python's package manager `pip` - the instructions are also linked above.


### Directions
1. Gather roster information in Google sheets of the form
`First Name, Last Name, Year, Major, Position, Hometown, High School, Do you have a roster picture?`
where "position" is cheerocracy position (not stunting position) 
- manually double check for
    - proper capitalization
    - year follows the Fr, Sp, Jr, Sr convention typically used on athletic rosters
        - use Grad if someone is a graduate student
    - majors, high schools are fully spelled out (e.g., Biochem should be Biological Chemistry, HS should be High School)
    - roster pictures should be all from the same batch - having people submit their own gets really gross to handle and maintain quality
    - response to "do you have a roster picture?" should be "yes" or "no"
2. Download the Google sheet as a csv
3. Move the download to the same directory as the Python script (roster_transform.py)
4. Ensure anyone that said that they have a roster photo actually has a roster photo
- Roster photos should live in the Media/roster_photos directory
- They should be named Roster<first_name>.jpg where first_name matches whatever was given in their roster info
5. Run `python roster_transform.py`
6. Check that you have
- <first_name>.html file for every cheerleader on the roster.
- a JSON string in `roster.js`

### CSS
#### Desktop
- A row for the roster is 4 cheerleaders, all of the CSS is based around that assumption
so know that if you want to change that it will be a good chunk of restyling and probably
isn't worth it in the end
- Remember when the size of the team changes that it could add or remove a row so you need
to update the background length
    - with 7 rows, I have the background height at 375%
    - I usually add/subtract 25% when I add/subtract a row
#### Animations
I use several animations - these are just basic CSS transform

## Performance
Whenever you add any new additions (including media) check out 
Google's [pagespeed test](https://developers.google.com/speed/pagespeed/insights/?url=cheerleading.uchicago.edu&tab=desktop)
It will give you specific optimizations to make. The only concession I try to
make is the render-blocking CSS/Javascript because I prefer the look of the
gradual appearance of our logo.

The biggest performance issue is images. Try to strike a balance between compressing
JPGs and maintaining quality. Google has an excellent resource about this compressing
images [here](https://developers.google.com/speed/docs/insights/OptimizeImages).

I wrote a bash script for you to run and it will adjust all of the JPEGs in /Media
Run as `sh convert_media.sh`

## Traffic
You can see traffic [here](https://webtraffic.uchicago.edu/awstats/awstats.pl?config=cheerleading)

## Uploading to UChicago server
Follow the UC IT [instructions](https://uchicago.service-now.com/it?id=kb_article&kb=KB00015299) to upload with Cyberduck.

## Immediate concerns
- Update roster
- Update recruitment information
- Update points of contact

### Suggested additions
- Improved accessibility
- Instagram link
- Alumni section
- Improve donation instructions
- Use our "Chicago" megaphone logo instead of the UChicago Sport Clubs Cheerleading logo