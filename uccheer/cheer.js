// The below route provider code was adopted from a Stack Overflow answer
// http://stackoverflow.com/questions/16297238/angularjs-different-views-based-on-desktop-or-mobile

'use strict';

angular.module('uccheerApp', [])
  .controller('CheerController', function($http) {
    var uccheerApp = this;
    this.roster = new Array();
    
    this.roster[0] = new RosterEntry('Isa', 'Alvarez', 'Sp',
    'Psychology, French minor', 'Outreach and Marketing Chair', 'Chicago, IL',
    'Westinghouse College Prep', '', true);

    this.roster[1] = new RosterEntry('Vera', 'Beilinson', 'Fr',
    'Computer Science, Mathematics', '', 'River Forest, IL', 'Oak Park and River Forest HS',
    '5\'7', false);
    
    this.roster[2] = new RosterEntry('Grace', 'Bologna', 'Sp',
    'Political Science, East Asian Languages and Civilizations', '', 'Chicago, IL',
    'Northside College Prep HS', '5\'1', false);

    this.roster[3] = new RosterEntry('David', 'Chien', 'Jr', 'Psychology',
      '', 'Sierra Madre, CA', 'Polytechnic HS', '5\'10', true)

    this.roster[4] = new RosterEntry('John', 'Francis', 'Jr',
        'Political Science, Global Studies', '', 'Indianapolis, IN',
        'Arsenal Technical HS', '5\'11', true);
    
    this.roster[5] = new RosterEntry('Emily', 'Garcia', 'Jr',
        'Neuroscience, Biology', '', 'Jenison, MI',
        'Jenison Public HS', '5\'1', true);

    this.roster[6] = new RosterEntry('Kara', 'Hairston', 'Sp',
    'Psychology', 'Captain', 'Indianapolis, IN',
    'Lawrence Central HS', '5\'4', true);

    this.roster[7] = new RosterEntry('Freda', 'Hu', 'Sp',
    'Biology', '', 'Chicago, IL',
    'Culver Academies', '5\'0', false);

    this.roster[8] = new RosterEntry('Abby', 'Huntoon', 'Jr', 'Global Studies, Political Science',
    'Cheer Czar', 'Maryville, TN', 'Maryville HS', '5\'5', true);

    this.roster[9] = new RosterEntry('Bethany', 'Ko', 'Fr',
        'Biochemistry', '', 'San Jose, CA',
        'Seoul International School', '5\'6', false);

    this.roster[10] = new RosterEntry('Sydney', 'Ko', 'Jr',
    'Computer Science', '', 'San Jose, CA', 'Seoul International School',
    '5\'5', true);

    this.roster[11] = new RosterEntry('Dani', 'Moreno', 'Sp',
    'Political Science, Latin American Studies', 'Treasurer', 'Coconut Creek, FL',
    'Pompano Beach High School', '5\'6', false);

    this.roster[12] = new RosterEntry('Emmi', 'Russo', 'Jr',
    'Computer Science, Psychology', 'Secretary', 'Boulder, CO',
    'Peak to Peak Charter School', '5\'0', true);

    this.roster[13] = new RosterEntry('Daniel', 'Schwartz', 'Jr',
    'Philosophy, Political Science', 'Captain', 'Baltimore, MD',
    'Pikesville High School', '\"6\'1 in heels\"', true);

    this.roster[14] = new RosterEntry('Caitlin', 'Sheehan', 'Jr',
    'History, Turkish', 'Choreographer', 'Dover, MA',
    'Dover-Sherborn Regional High School', '5\'4', true);

    this.roster[15] = new RosterEntry('Alex', 'Stutzman', 'Jr',
    'Biology, Sociology', 'Social Chair', 'Middlebury, IN',
    'Northridge High School', '5\'8', true);

    this.roster[16] = new RosterEntry('Baizhen', 'Zhu', 'Jr',
    'Biology, Public Policy', '', 'Zionsville, IL',
    'Zionsville Community High School', '6\'4', true);

    this.roster_by_rows = new Array();
    var j = 0;
    for(var i = 0; i < this.roster.length; j++) {
      if (i + 4 < this.roster.length) {
        this.roster_by_rows[j] = this.roster.slice(i, i+4);
      } else {
        this.roster_by_rows[j] = this.roster.slice(i);
      }
      i = i+4;
    }

    this.albums = new Array();
    this.albums[0] = new PhotoAlbum("Football 2014", "Media/FB14.jpg", "https://www.flickr.com/photos/147670721@N02/albums/72157679204078342");
    this.albums[1] = new PhotoAlbum("Basketball 2015", "Media/BB15.jpg", "https://www.flickr.com/photos/147670721@N02/albums/72157679203855652");
    this.albums[2] = new PhotoAlbum("Football 2015", "Media/FB15.jpg", "https://www.flickr.com/photos/147670721@N02/albums/72157681507976796");
    this.albums[3] = new PhotoAlbum("Football 2016", "Media/FB16.jpg", "https://www.flickr.com/photos/147670721@N02/albums/72157681542655945");
 
    this.albums_by_rows = new Array();
    j = 0;
    for (var i = 0; i < this.albums.length; j++) {
      if (i + 2 < this.albums.length) {
        this.albums_by_rows[j] = this.albums.slice(i, i+2);
      } else {
        this.albums_by_rows[j] = this.albums.slice(i);
      }
      i = i + 2;
    }
    window.mobilecheck = function() {
      var check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      return check;
    };
  });


var RosterEntry = function(first, last, year, major, position, hometown, hs, height, old) {
  this.first = first;
  this.last = last;
  this.year = year;
  this.major = major;
  this.position = position;
  this.hometown = hometown;
  this.hs = hs;
  this.height = height;
  if(old) {
    this.photo = "Media/roster_photos/Roster" + first + ".jpg";
    this.class = "roster-info";
  } else {
    this.photo = "";
    this.class = "roster-info-nm"
  }
  this.name = first + " " + last;
}

var PhotoAlbum = function(title, cover, link) {
  this.title = title;
  this.cover = cover;
  this.link = link;
}