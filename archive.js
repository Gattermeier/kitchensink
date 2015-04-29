// Archive script: This script rewirtes a.href and img.src on the fly to ensure consistancy within the old ADL website archive and to account for directing to new content where appropriate
// Author: MGattermeier@adl.org
// Latest change: 2015-04-13

// Timer function: execute link rewrite only after set date and time
timer = function () {
    var current = new Date();
    var expiry = new Date("January 25, 2013 08:15:00");
    if (current.getTime() > expiry.getTime()) {
        return true;
    }
};




loadcss = function () {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = '/bannerfix.css';
    head.appendChild(link);
    return link;
};

createbanner = function () {
    var subdomain_check = false;
    var exception_handle = ['/holocaust/speech_palatucci.asp', 'PresRele/HolNa_52/4718_52.html', 'PresRele/HolNa_52/5394_52.html', 'sp_palatucci_2008.html', 'holocaust/speech_cuomo.html', 'Education_01/4717_01%2b.html', 'PresRele/ASInt_13/5148_13.htm'];
    var subdomain_list = ['education/miller', 'npfh', 'adltv', 'education/mdc', 'education/curriculum_connections', 'bibliography', 'hidden', 'mobilehatesymbols', 'personalfundraising' ];
    for (i = 0; i < subdomain_list.length; i++) {
        if (window.location.href.indexOf(subdomain_list[i]) >= 0) {
            subdomain_check = true;
        }
    }
    for (i = 0; i < exception_handle.length; i++) {
        if (window.location.href.indexOf(exception_handle[i]) >= 0) {
            subdomain_check = true;
        }
    }
    if (subdomain_check == false) {
        // the first line below is the normal Archive banner, the second displays one in blue.
        $('body').prepend("<div class='banner' style='margin-bottom:10px; margin-top:5px; position:fixed; width:100%; z-index:999;'><a class='btn btn-large btn-block btn-danger' href='http://www.adl.org' type='button' style='color: white; padding:20px; font-size: 20px;'>You are currently browsing the ADL archive website.<br> Consider visiting our <span style='color:black; text-decoration:underline;'>new website</span> !</a></div><!--[if !(IE)]><!--> <p style='height:80px;'></p> <!--<![endif]-->");
//            $('body').prepend("<div class='banner' style='margin-bottom:10px; margin-top:5px; position:fixed; width:100%; z-index:999;'><a class='btn btn-large btn-block btn-scraped' href='http://www.adl.org' type='button' style='color: green; padding:20px; font-size: 20px;'>You are currently browsing the ADL archive website.<br> Consider visiting our <span style='color:black; text-decoration:underline;'>new website</span> !</a></div><!--[if !(IE)]><!--> <p style='height:80px;'></p> <!--<![endif]-->");
    }
    for (i = 0; i < exception_handle.length; i++) {
        if (window.location.href.indexOf(exception_handle[i]) >= 0) {
            $('body').prepend("<div class='banner' style='margin-bottom:10px; margin-top:5px; position:fixed; width:100%; z-index:999;'>\
                              <p class='btn btn-large btn-block btn-primary' type='button' style='color: white; font-size: 14px; text-align: left;'>\
                              Editor's Note: New historical evidence has come to light documenting that the Italian police official Giovanni Palatucci did not play a role in rescuing Jews during the Holocaust as was once widely believed, and may have in fact been a Nazi collaborator.  A panel of historians and scholars, after examining nearly 700 pages of documents, concluded in June 2013 that Palatucci was a willing executioner of the racial legislation and may have even collaborated with the Mussolini government in helping to identify Jews for deportation.\
                              <br><br>As a result of this new information, the Anti-Defamation League will no longer present law enforcement officials with an award named for him and is now disassociating itself with any honors it previously bestowed upon him or in his memory.\
                              <a style='color: red;' href='http://www.adl.org/press-center/press-releases/holocaust-nazis/in-light-of-historical-evidence-adl-will-no-longer-honor-italian-police-official.html'>More>></a>\
                              </p></div><!--[if !(IE)]><!--> <p style='height:80px;'></p> <!--<![endif]-->");
        }
    }
};


// Rewrite links to microsites with links to new subdomains
subdomain_rewrites = function (i) {
    if (document.links[i].href.indexOf("adltv") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/adltv', 'http://video.adl.org/');
    }
    if (document.links[i].href.indexOf("npfh") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/npfh', 'http://noplaceforhate.adl.org/');
    }
    if (document.links[i].href.indexOf("education/miller") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/education/miller', 'http://earlychildhood.adl.org/');
    }
    if (document.links[i].href.indexOf("education/mdc") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/education/mdc', 'http://makingdiversitycount.adl.org/');
    }
    if (document.links[i].href.indexOf("education/curriculum_connections") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/education/curriculum_connections', 'http://curricula.adl.org/');
    }
    if (document.links[i].href.indexOf("bibliography") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/education/curriculum_connections', 'http://booksforchildren.adl.org/');
    }
    if (document.links[i].href.indexOf("hidden") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/hidden', 'http://hiddenchild.adl.org/');
    }
    if (document.links[i].href.indexOf("mobilehatesymbols") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/mobilehatesymbols', 'http://hateid.adl.org/');
    }
    if (document.links[i].href.indexOf("adl.org/hateid") > -1) {
        document.links[i].href = document.links[i].href.replace('http://www.adl.org/hateid', 'http://hateid.adl.org/');
    }
    if (document.links[i].href.indexOf("personalfundraising-login") <= 0) {
        if (document.links[i].href.indexOf("personalfundraising") > -1) {
            document.links[i].href = document.links[i].href.replace('http://www.adl.org/personalfundraising', 'http://personalfundraising.adl.org/');
        }
    }
};

// Basic rewrite of www. links to archive. links
regular_rewrites = function (i) {
    // added by A. Arens
//    if ( document.links[i].href.indexOf( ".asp" ) > -1 ) {document.links[i].href = document.links[i].href.replace('.asp','.html');};
    document.links[i].href = document.links[i].href.replace('http://www.adl.org/search/query.asp', '/search.html');
    document.links[i].href = document.links[i].href.replace('http://archive.adl.org/search/query.asp', '/search.html');

    document.links[i].href = document.links[i].href.replace('http://www.adl.org/?s=topmenu', '/');
    document.links[i].href = document.links[i].href.replace('http://www.adl.org/home.asp?s=topmenu', '/');
    document.links[i].href = document.links[i].href.replace('http://archive.adl.org/', '/');
    if (document.links[i].href.indexOf("http://archive.adl.org/") > -1) {
        document.links[i].href = document.links[i].href.replace('http://archive.adl.org/', '/');
    }

    document.links[i].href = document.links[i].href.replace('http://www.adl.org/', '/'); // rewrite all www.adl.org links
    document.links[i].href = document.links[i].href.replace('https://www.adl.org/', '/'); // account for https://www links
    document.links[i].href = document.links[i].href.replace('http://adl.org/', '/'); // fix broken links
    document.links[i].href = document.links[i].href.replace('http://archive.adl.org/', '/');


    // document.links[i].href = document.links[i].href.replace('http://www.adl.org/','index.html'); // rewrite all www.adl.org links
    // document.links[i].href = document.links[i].href.replace('https://www.adl.org/','index.html'); // account for https://www links
    // document.links[i].href = document.links[i].href.replace('http://adl.org/','index.html'); // fix broken links
};

// Point links to old donate, contact us, newsletter, press center pages to counterpart on new website
// Account for fallback solution for links to outdated and non-working donation forms
special_rewrites = function (i, new_donate_link, new_contactus_link, new_newsletter_link) {
    if (document.links[i].href.indexOf("donations.html") > -1) {
        document.links[i].href = new_donate_link
    }
    if (document.links[i].href.indexOf("donations.asp") > -1) {
        document.links[i].href = new_donate_link
    }
    if (document.links[i].href.indexOf("https://secure2.convio.net/adl/site/Donation2?df_id=1020&amp;1020.donation=form1") > -1) {
        document.links[i].href = "http://support.adl.org/site/Donation2?3600.donation=form1&df_id=3600"
    } // one time gifts
    else if (document.links[i].href.indexOf("https://secure2.convio.net/adl/site/Donation2?df_id=2640&amp;2640.donation=form1") > -1) {
        document.links[i].href = "http://support.adl.org/site/Donation2?df_id=3620&3620.donation=form1"
    }
    // recurring gift
    else if (document.links[i].href.indexOf("https://secure2.convio.net/adl/site/Donation2?df_id=1120&amp;1120.donation=form1") > -1) {
        document.links[i].href = "http://support.adl.org/site/Donation2?df_id=3621&3621.donation=form1"
    } // tribute card
    else if (document.links[i].href.indexOf("convio.net/adl/site/Donation") > -1) {
        document.links[i].href = new_donate_link
    } // fallback
    if (document.links[i].href.indexOf("https://secure2.convio.net/adl/site/Donation2?df_id=1020&1020.donation=form1") > -1) {
        document.links[i].href = "http://support.adl.org/site/Donation2?3600.donation=form1&df_id=3600"
    } // one time gifts
    else if (document.links[i].href.indexOf("https://secure2.convio.net/adl/site/Donation2?df_id=2640&2640.donation=form1") > -1) {
        document.links[i].href = "http://support.adl.org/site/Donation2?df_id=3620&3620.donation=form1"
    }
    // recurring gift
    else if (document.links[i].href.indexOf("https://secure2.convio.net/adl/site/Donation2?df_id=1120&1120.donation=form1") > -1) {
        document.links[i].href = "http://support.adl.org/site/Donation2?df_id=3621&3621.donation=form1"
    } // tribute card
    else if (document.links[i].href.indexOf("convio.net/adl/site/Donation") > -1) {
        document.links[i].href = new_donate_link
    } // fallback
    if (document.links[i].href.indexOf("contact_us.html") > -1) {
        document.links[i].href = new_contactus_link
    }
    if (document.links[i].href.indexOf("contact_us.asp") > -1) {
        document.links[i].href = new_contactus_link
    }
    if (document.links[i].href.indexOf("PageServer?pagename=contact_us") > -1) {
        document.links[i].href = new_contactus_link
    }
    if (document.links[i].href.indexOf("PageServer?pagename=quickreg") > -1) {
        document.links[i].href = new_newsletter_link
    }
    if (document.links[i].href.indexOf("press-center.html") > -1) {
        document.links[i].href = 'http://www.adl.org/press-center'
    } // rewrite links to the new press center
    if (document.links[i].href.indexOf("press-center.asp") > -1) {
        document.links[i].href = 'http://www.adl.org/press-center'
    } // rewrite links to the new press center
    if (document.links[i].href.indexOf("about.html") > -1) {
        document.links[i].href = 'http://www.adl.org/about-adl'
    } // rewrite links to the new about us section
    if (document.links[i].href.indexOf("about.asp") > -1) {
        document.links[i].href = 'http://www.adl.org/about-adl'
    } // rewrite links to the new about us section
    if (document.links[i].href.indexOf("education-") > -1) {
        document.links[i].href = 'http://www.adl.org/education-outreach/'
    } // rewrite links to the new education second level page (as per request by Naomi)
};

// Fix broken images referencing absolute paths
imgsrc_rewrites = function (i) {
    if (document.images[i].src.indexOf("www.adl.org/") > -1) {
//        document.images[i].src = document.images[i].src.replace('www.adl.org/','archive.adl.org/');
        document.images[i].src = document.images[i].src.replace('http://www.adl.org/', '/');
    }
    if (document.images[i].src.indexOf("archive.adl.org/") > -1) {
        document.images[i].src = document.images[i].src.replace('http://archive.adl.org/', '/');
    }

};

// Ensure consitancy of www.adl.org.il links
israel_fix = function (i) {
    if (document.links[i].href.indexOf("archive.adl.org.il") > -1) {
        document.links[i].href = document.links[i].href.replace('http://archive.adl.org.il/', 'http://www.adl.org.il/');
    }
};

rewrite = function () {
    var new_donate_link = "http://www.adl.org/donate";
    var new_contactus_link = "http://support.adl.org/site/PageNavigator/contactus.html";
    var new_newsletter_link = "http://support.adl.org/site/PageServer?pagename=12quickreg";
    if (timer) {
        for (var i = 0; i < document.links.length; i++) {
            var IEfix = document.links[i].innerHTML; // fix IE issue replacing link text
            // subdomain_rewrites(i); // rewrite links to microsites with links to new subdomains -- ATTENTION: Do NOT uncomment this line until subdomains are confirmed live and running!!
            regular_rewrites(i); // the main rewrite of regular www. links to archive. links
            special_rewrites(i, new_donate_link, new_contactus_link, new_newsletter_link); // account for special pages such as donate, contact us and newsletter sign up
            israel_fix(i); // account for links to Israeli adl website
            document.links[i].innerHTML = IEfix; // overwrite linktext - IE fix
        }
        for (var j = 0; j < document.images.length; j++) {
            imgsrc_rewrites(j); // fix issues with absolute image paths
        }
    }
};

redirect = function () {
    if (window.location.href.indexOf("hate_symbols") > -1) {
        window.location.replace("http://www.adl.org/combating-hate/hate-on-display/");
    }
    if (window.location.href.indexOf("bibliography") > -1) {
        window.location.replace("http://www.adl.org/education-outreach/books-matter/");
    }
};

window.onload = function() {
    redirect(); // avoid completely outdated content sections on archive and redirect users to new website
    // load libraries to head
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    var script2 = document.createElement('script');
    script2.src = 'http://code.jquery.com/ui/jquery-ui-git.js';
    script2.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script2);

    setTimeout("rewrite();", 800); // delay execution to ensure all elements are loaded -- for slow pageloads
    loadcss();
    setTimeout("createbanner();", 1000); // delay execution to ensure all elements are loaded -- for slow pageloads & avoid overwrite through archive script
};
