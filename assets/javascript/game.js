// Javascript for Hangman

window.onload = function () {

    var termsJson = [
        {
            "term":"accessibility",
             "definition":"Refers to a web page or web site that people interacting with different kinds of disabilities, the difficulty they can experience due to physical and or technological barriers. A web page or site that address these users limitations is said to be Accessibly friendly."
         },
        {
            "term":"algorithm",
            "definition":"Set of factors and rules by which search engines determine relevance to compile their SERP rankings."
        },
        {
            "term":"allintitle",
            "definition":"Google search command which returns sites that contain the search terms in the page title."
        },
        {
            "term":"allinurl",
            "definition":"Google search command which returns sites that contain the search terms in the URL."
        },
        {
            "term":"alt-attribute",
            "definition":"HTML element placed within an image tag which is used to describe the image to blind viewers or those with images turned off. Placing keywords here doesn’t carry much weight anymore because that technique has been abused in the past."
        },
        {
            "term":"analytics",
            "definition":"A program which assists in gathering and analyzing data about website usage. Google analytics is a feature rich, popular, free analytics program."
        },
        {
            "term":"anchor-text",
            "definition":"The words that appear clickable in a text link."
        },
        {
            "term":"applet",
            "definition":"An applet is a small program designed to run within another application. Java is one of the major languages used for creating Web-based applets."
        },
        {
            "term":"active-server-pages",
            "definition":"(ASP) Microsoft technology similar to CGI that is used to create dynamic content for a web page. Pages using ASP are created with programming scripts (eg; JavaScript) and integrated with the HTML of a page. It is a server−side scripting language and is mostly used on Windows platforms."
        },
        {
            "term":"authority",
            "definition":"In SEO terms, a site attains authority when it has many inbound links coming from other authority sites within the same content neighborhood."
        },
        {
            "term":"back-link",
            "definition":"(IBL, inbound link, inlink, incoming link) An incoming link to a page from any other page or site."
        },
        {
            "term":"bandwidth",
            "definition":"Bandwidth is the amount of data that can be transferred over the network in a fixed amount of time. On the Internet, it is usually expressed in bits per second (bps). A hosting server will allocate your site a fixed amount of bandwidth usage within a regular period of time."
        },
        {
            "term":"blogroll",
            "definition":"A collection of links on a blog to other blogs."
        },
        {
            "term":"bot",
            "definition":"Software application that runs automated tasks over the internet, such as a search engine spider."
        },
        {
            "term":"bounce-rate",
            "definition":"The percentage of visitors who leave a site without viewing any page other than the landing page."
        },
        {
            "term":"bread-crumbs",
            "definition":"Navigation links arranged horizontally above the page content that maps the path the user has taken to arrive at the present page."
        },
        {
            "term":"browser",
            "definition":"Often called a Web browser, it is simply a software application used to interpret HTML commands and display page content. The two most popular browsers are Microsoft Internet Explorer (IE) and Netscape Navigator."
        },
        {
            "term":"captcha",
            "definition":"Program that generates tests which most humans can pass, but computer programs can’t. This verifies the user as human when a form submit button has been activated."
        },
        {
            "term":"clustering",
            "definition":"Search engine technique to group different pages from the same domain in SERPS. Clusters usually list up to 2 pages from the same domain together in its search results to prevent one site from dominating the top spots."
        },
        {
            "term":"content",
            "definition":"A word you'll likely see around a lot is 'web content' and by definition, content is the 'stuff' that makes up a web site. This could be words, pictures, images or sounds. In essence however, when we talk about web content, we are essentially referring to content in a textual nature. Content therefore is the 'information' in text form a web site provides."
        },
        {
            "term":"content-management-system",
            "definition":"Content Management Systems (CMS) are applications used to manage website content.  They have the ability to manage news or blogs.  All CMS’s include templates that enable the user to control the appearance and style of the webpages within the website.  Depending on how advanced the chosen CMS is, some can include a limitless number of features such as user logins, file managers, commenting, and statistics to name a few."
        },
        {
            "term":"conversion-rate",
            "definition":"The percentage of visitors who deliver the desired response, such as: making a purchase, clicking an ad, subscribing to a content feed, etc."
        },
        {
            "term":"crawler",
            "definition":"(aka 'spider') Component of a search engine that gathers listings by automatically 'crawling' the web. A search engine's crawler (also called a spider or robot) follows links to web pages. It makes copies of the web pages found and stores these in the search engine's index."
        },
        {
            "term":"cascading-style-sheets",
            "definition":"(CSS) A simple mechanism for adding style (e.g. fonts, colors, spacing) to Web documents. Not all browsers (of specific versions) implement the full specification of CSS."
        },
        {
            "term":"directories",
            "definition":"A type of search engine where listings are gathered through human efforts, rather than by automated crawling of the web. In directories, web sites are often reviewed, summarized in about 25 words, and placed in a particular category."
        },
        {
            "term":"domain-name-service",
            "definition":"(DNS) An Internet system/service that translates domain names into IP addresses. Domain names are alphabetic so they're easier to remember. The Internet however, is really based on IP addresses. Every time you use a domain name, therefore, a DNS service must translate the name into the corresponding IP address. For example, our domain name http://www.amyhissom.com is really http://72.167.232.9."
        },
        {
            "term":"domain-name",
            "definition":"An unique name that identifies one or more IP addresses. Domain names are used in URLs' to identify particular Web sites. Every web site is located by its unique IP address."
        },
        {
            "term":"frames",
            "definition":"An HTML technique for combining two or more separate HTML documents within a single web browser screen. A web site using frames often causes great problems for search engines, and may not be spidered and indexed correctly."
        },
        {
            "term":"file-transfer-protocol",
            "definition":"One of the common methods of transferring files over the Internet. A typical method used for uploading files (pages) to a hosting server for viewing on the Internet."
        },
        {
            "term":"heading",
            "definition":"HTML tag of up to 6 sizes: <H1> through <H6>. Text within <H1> [headline] and <H2> [sub-headline] tags are given more weight by search engines when indexing page content and therefore are a good place to fit in keywords."
        },
        {
            "term":"hits",
            "definition":"Are the individual requests a server answers in order to render a single Web page completely. The page document itself and the various images on the page represent a separate hit."
        },
        {
            "term":"homepage",
            "definition":"It is a first page (also referred as an opening page, start page or main page) of a Web site. This would technically be your index page or default page of your directory."
        },
        {
            "term":"hosting",
            "definition":"Usually refers to a computer (or a network of servers) that stores the files of a web site which has web server software running on it, connected to the Internet. Your site is then said to be Hosted."
        },
        {
            "term":"hypertext-markup-language",
            "definition":"HTML is a basic markup language derived from the Standardized General Markup Language (SGML), providing the means for creating simple hypertext documents, intended for publishing on the World Wide Web."
        },
        {
            "term":"image-map",
            "definition":"An image that has several links geographically mapped onto it."
        },
        {
            "term":"ibl",
            "definition":"In-Bound Link; A one-way link from another web site pointing to your web page. Commonly referred to as a backlink."
        },
        {
            "term":"index",
            "definition":"The collection of information a search engine has that searchers can query against. Typically, with crawler-based search engines, the index contains copies of all the web pages they have found from crawling the web. With human-powered directories, the index contains the summaries of all web sites that have been categorized."
        },
        {
            "term":"interactive",
            "definition":"A Web page is interactive when it prompts a response from the user or in some way can interact with the user dynamically (eg; filling out a form or a poll etc)."
        },
        {
            "term":"internet",
            "definition":"A global network connecting millions of computers. Each Internet computer, called a host, is independent. The Internet is not synonymous with World Wide Web. The Internet and the Web are two related but separate things."
        },
        {
            "term":"internet-protocol",
            "definition":"(IP) The method or protocol by which data is sent from one computer to another on the Internet. Each computer (known as a host) on the Internet has at least one IP address that uniquely identifies it from all other computers on the Internet."
        },
        {
            "term":"ip delivery",
            "definition":"Legitimate form of delivering different pages to different users based on IP address, such as providing content based on geographical location."
        },
        {
            "term":"javascript",
            "definition":"JavaScript is an object-based, client−side scripting language developed by Netscape. Embedded in the head section of a web document, It can produce interactivity to a web page dynamically."
        },
        {
            "term":"key-phrase",
            "definition":"Two or more words that form a ‘keyword’ - the words potentially used in a search query that the page has been optimized for."
        },
        {
            "term":"keywords",
            "definition":"The most popular search terms identified for the subject of your wiki. Many different online tools can help you identify the most effective keywords."
        },
        {
            "term":"hyperlink",
            "definition":"An element in an electronic document that links to another place in the same document or to an entirely different document. Typically, you click on the hyperlink to follow the link. Hyperlinks are the most essential ingredient of all hypertext systems, including the World Wide Web."
        },
        {
            "term":"link-popularity",
            "definition":"A measure of the quantity and quality of other web sites that link to your site. This is one factor used by the search engine algorithm to determine SERP rankings."
        },
        {
            "term":"log-file",
            "definition":"Server file which details a web site’s statistics including number of visitors, where they come from, and which queries are used to access the site."
        },
        {
            "term":"meta-crawler",
            "definition":"A type of search engine which, instead of maintaining its own database, queries other search engines’ databases to return results from all of them."
        },
        {
            "term":"meta-description",
            "definition":"Meta tag that allows page authors to define how the page will be described in the SERP. Not all engines use this tag; Google uses the first 150 characters [including spaces]."
        },
        {
            "term":"meta-keyword",
            "definition":"Meta tag that identifies the keyword phrase[s] which the page is optimized in an attempt to improve SERP ranking. Due to prior abuse, this tag now carries little weight with the major engines."
        },
        {
            "term":"meta-robots",
            "definition":"Meta tag that indicates to visiting web robots if a page should be indexed, or links on the page should be followed. Default settings are: <meta name=”robots” content=”index,follow”>"
        },
        {
            "term":"meta-tag",
            "definition":"A special HTML tag that provides information about a Web page. Unlike normal HTML tags, meta tags do not affect how the page is displayed."
        },
        {
            "term":"mouseover",
            "definition":"A JavaScript element that triggers a change on an item (typically a graphic change, such as making an image or hyperlink appear) in a Web page when the mouse pointer passes over it."
        },
        {
            "term":"obl",
            "definition":"Out-Bound Link; A link on a web page pointing to another page, either within the same site or to a different site."
        },
        {
            "term":"organic-listings",
            "definition":"Listings that search engines do not sell (unlike paid listings; see below). Instead, sites appear solely because a search engine has deemed it editorially important for them to be included, regardless of payment. Paid inclusion content is also often considered 'organic' even though it is paid for. This is because that content usually appears intermixed with unpaid organic results."
        },
        {
            "term":"outbound-links",
            "definition":"Links on a particular web page leading to other web pages, whether they are within the same web site or other web sites."
        },
        {
            "term":"page-title",
            "definition":"The name of your site that will appear in the blue browser bar at the very top of every page. This title is the first thing a search engine crawler will read, so it's important to use as many keywords as possible here to describe your site."
        },
        {
            "term":"paid-listings",
            "definition":"(a.k.a. PPC) Listings that search engines sell to advertisers, usually through paid placement or sponsored listings on Google, Yahoo!, MSN, etc. and are commonly known as PPC (pay-per-click) programs. In contrast, organic listings are not sold."
        },
        {
            "term":"perl",
            "definition":"Perl is a server−side, interpreted language that provides much of the web's interactivity."
        },
        {
            "term":"pixel",
            "definition":"Refers to how monitors divide the display screen into thousands or millions of individual dots to display an image. A pixel is one dot."
        },
        {
            "term":"hypertext-preprocessor",
            "definition":"(PHP) A server−side, HTML embedded scripting language used to create dynamic Web pages. Designed for Windows and Unix type platforms."
        },
        {
            "term":"ranking",
            "definition":"The number (order of ranking; ie 1 being the highest) that a web site is listed for a specific search term in a specific search engine. Search Engines utilize a ranking algorithm (mathematical formulas, variables, and set of weights) to determine a site's ranking for a particular keyword or keyword phrase."
        },
        {
            "term":"resolution",
            "definition":"The resolution of an image describes how fine the dots are that make up that image. The more dots, the higher the resolution. When displayed on a monitor, the dots are called pixels. A 640 x 480 screen (resolution) is capable of displaying 640 distinct dots on each of its 480 lines, or about 300,000 pixels."
        },
        {
            "term":"robots",
            "definition":"(Robots.txt) A text file that instructs a search engine spider which content it should not index."
        },
        {
            "term":"really-simple-syndication",
            "definition":"RSS; web feed format used to publish frequently updated content such as a blog or podcast."
        },
        {
            "term":"reciprocal-link",
            "definition":"A link on Site A to Site B placed with the understanding that Site B will link to Site A."
        },
        {
            "term":"redirect",
            "definition":"A technique for making a web page available under different URLs. Redirections are often used when moving a page or site to a new domain and to direct visitors to the correct site when registering common domain misspellings"
        },
        {
            "term":"script",
            "definition":"A script is an executable list of commands created by a scripting language. Scripts that are executed on a web server (eg; Perl, PHP) are said to be server−side scripts. Scripts that execute on your own home PC (eg; JavaScript) are said to be client−side scripts. Scripts can be embed within HTML to produce a web page with dynamic actions."
        },
        {
            "term":"scripting-language",
            "definition":"A scripting language is a simple programming language used to write an executable list of commands, called a script. JavaScript, Perl, VBscript are scripting languages rather than general-purpose programming languages."
        },
        {
            "term":"search-engine",
            "definition":"A server (computer) or commonly a collection of servers dedicated to indexing internet web pages, storing the results in a giant database and returning lists of pages which match particular searched queries from within its database. The indexes are normally and automatically generated using spiders."
        },
        {
            "term":"search-engine-marketing",
            "definition":"(SEM) The act of marketing a web site via search engines, such as Google, Yahoo!, MSN, etc. The end-result might be to improve rank with organic listings, purchasing paid listings or a combination of the two, along with other search engine-related activities."
        },
        {
            "term":"search-engine-optimization",
            "definition":"(SEO) The act of altering a website so that it rises higher in the organic, crawler-based listings of search engines. SEO strategies and tactics are what ultimately garner 'free' traffic or drive users to a website, rather than paying for listings via paid listings on Google, Yahoo, etc."
        },
        {
            "term":"search-terms",
            "definition":"The words a person uses when trying to find information through a search engine."
        },
        {
            "term":"server",
            "definition":"A computer, program or process which responds to requests for information from an user. On the internet, all web pages reside on servers (computers)."
        },
        {
            "term":"site-map",
            "definition":"Web page containing links to each page on a site. A site map’s major SEO benefit is to help a spider quickly locate a site’s content and properly index its pages."
        },
        {
            "term":"social-media",
            "definition":"Web sites that are driven by interactive, user generated content. Examples include: Digg, Flickr, Wikipedia, Facebook, Hi5 and MySpace."
        },
        {
            "term":"spider",
            "definition":"An automated software robot that continuously crawls hyperlinks and pages on the Internet and collects data that is returned to its database for indexing. This is how Search Engines function. The process of crawling the web, storing URLs' and indexing keywords, links and text, is the act of Spidering."
        },
        {
            "term":"server-side-includes",
            "definition":"(SSI) Tells a server to include information (source from a separate file) in a document before sending it to the browser. A very effective method of producing the same information over many pages as one file can be altered to produce the changes over the many the pages that includes the SSI file."
        },
        {
            "term":"subdomain",
            "definition":"A sub−domain is a domain that is part of a larger domain name. DNS hierarchy consists of the root-level domain at the top, underneath which are the top−level domains, followed by second−level domains and finally sub−domains."
        },
        {
            "term":"tag",
            "definition":"An HTML tag is a formatting command written into a document that specifies how it should be formatted. A web browser interprets these tags and outputs the intended command (action)."
        },
        {
            "term":"template",
            "definition":"HTML templates are skeletal HTML pages with the main content left out. Templates provide an effective solution in creating many pages with an identical look or navigational structure but different content."
        },
        {
            "term":"title",
            "definition":"The most important area on a web page for keyword placement to affect search engine rankings. Google uses this text as the anchor text linking to your page from the SERP."
        },
        {
            "term":"trackback",
            "definition":"Method for web publishers to be notified when their content has been linked to."
        },
        {
            "term":"traffic",
            "definition":"Similar to a real−world sense of traffic on a road or freeway, traffic in a web−sense is a measurement of the amount of users that visit a Web site."
        },
        {
            "term":"trust-rank",
            "definition":"Link analysis technique for search engines to distinguish legitimate web pages from spam."
        },
        {
            "term":"uniform-resource-locator",
            "definition":"(URL) Each separate page accessible on the Web has a unique address which can by identified by it's URL. The first part of the address (eg; http or ftp etc) indicates what protocol to use, and the second part specifies the IP address or the domain name where the resource is located."
        },
        {
            "term":"usability",
            "definition":"Refers to the level or degree of a page's operating friendliness for the user."
        },
        {
            "term":"validation",
            "definition":"Validation is a way to make sure that your (HTML) code is compliant with current HTML specifications."
        },
        {
            "term":"world-wide-web",
            "definition":"(WWW) Is a way of accessing information over the medium of the Internet. Browsers, such as Internet Explorer or Netscape are utilized to access the vast collection of interconnected (hyperlinked) documents on the web."
        },
        {
            "term":"wysiwyg",
            "definition":"‘What You See Is What You Get’ HTML editors such as Dreamweaver and FrontPage."
        },
        {
            "term":"white-hat",
            "definition":"SEO tactics which conform to search engine guidelines by creating content that is useful for visitors rather than focused on deceiving search engine spider"
        },
    ];

    var wordIndex;             // Randomly selected index into JSON 
    var word;                  // Selected word (by index)
    var guess;                 // Guess (letter)
    var guesses = [];          // Guessed letters
    var gameboard = [];        // Gameboard [H _ l l _ - W _ _l _]
    var guessesRemaining = 6;  // Num guessesRemaining
    var countCorrect;          // Count correct guesses
    var countDashes = 0;       // Number of spaces in word '-'
    var gameOver = false;      // Boolean (stop checking input)
    var wins = 0;              // num Wins
    var loss = 0;              // num Loss


    // Setup Victory Sound
    var audioWin = document.createElement("audio");
    audioWin.setAttribute("src", "./assets/javascript/TaDa.mp3");
    // Setup ULose Sound
    var audioLose = document.createElement("audio");
    audioLose.setAttribute("src", "./assets/javascript/WaWa.mp3");

    // Get handle on HTML elements
    var showGameboard = document.getElementById("tileHolder")
    var showguessesRemaining = document.getElementById("myguessesRemaining");
    var showwinloss = document.getElementById("winloss");
    var showGuesses = document.getElementById("myguesses");
    var showClue = document.getElementById("clue");

    // Function to refresh gameboard
    var refreshBoard = function () {
        showGameboard.innerHTML = "";
        for (var i = 0; i < word.length; i++) {
            if (word[i] == "-") {
                gameboard[i] = "-";
            }
            else if ( guesses.includes(word[i]) ) {
                gameboard[i] = word[i];
            }
            else {
                gameboard[i] = "_";
            }
        }
        showwinloss.innerHTML = "Wins: " + wins + " Losses: " + loss;
        showGameboard.innerHTML = gameboard.join(" ");
    }


    // Check win/loss
    var updateStats = function () {
        showguessesRemaining.innerHTML = "You have " + guessesRemaining + " Guesses Remaining";
        if (guessesRemaining < 1) {
            showguessesRemaining.innerHTML = "Game Over";
            loss++;
            audioLose.load();
            audioLose.play();
            gameOver = true;
        }

        if (countCorrect + countDashes === word.length){
            showguessesRemaining.innerHTML = "YOU WIN!";
            wins++;
            audioWin.load();
            audioWin.play();
            gameOver = true;
        }
        myguesses.innerHTML = "Guessed: " + guesses;
    }


    // OnKeyUp Function
    var userGuess = function () {
        document.onkeyup = function (event) {
            var letter = event.key.toLowerCase();

            if (!gameOver && guesses.includes(letter) == false) {

                guesses.push(letter);

                for (var i = 0; i < word.length; i++) {
                    if (word[i] === letter) {
                        countCorrect++;
                    }
                }

                var j = (word.indexOf(letter));
                if (j === -1) {
                    guessesRemaining--;
                }

                updateStats();

                refreshBoard();
            }
        }
    }


    // INIT function (common place for reset vars)
    var initState = function () {
        gameOver = false;
        guesses = [];
        guessesRemaining = 6;
        countCorrect = 0;
        gameboard = [];
        showClue.innerHTML = "";
        showGameboard.innerHTML = "";
        showClue.innerHTML = "Clue: " ;
        word = "";
    }

    // Play
    var play = function () {
        initState();
        // Choose a random word
        wordIndex = Math.floor(Math.random() * termsJson.length);
        word = termsJson[wordIndex].term;
        word = word.replace(/\s/g, "-").toLowerCase();
        countDashes = word.split("-").length - 1;

        console.log("Dashes: " + countDashes);
        console.log(word);

        updateStats();
        refreshBoard();
        userGuess();
    }

    // Let's play the game
    play();

    // Hint 
    hintBtn.onclick = function () {
        var aHint = termsJson[wordIndex].definition;

        showClue.innerHTML = "Clue: " + aHint;
    };

    // Reset
    document.getElementById('resetBtn').onclick = function () {
        initState();
        refreshBoard();
        play();
    }
}


