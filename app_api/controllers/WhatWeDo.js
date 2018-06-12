var sendJSONresponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.LandingPage = function (req, res) {
    sendJSONresponse(res, "200", 
    {
        wordBoxes: [
            {
                title: 'Legislations',
                text: "ASIS's primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on Australia's interests and the well-being of its citizens.\n ASIS's primary goal is to obtain and distribute secret intelligence about the capabilities, intentions and activities of individuals or organisations outside Australia, which may impact on Australia's interests and the well-being of its citizens.",
                href : "/Legislations"
            },
            {
                title: 'Organisation',
                text: "The Australian Government expects us to be adaptable and to respond effectively to the growing number and diverse nature of threats facing Australia and its citizens. Our work can involve collecting intelligence relating to national defence, international relations and economic issues. We also contribute to Australia's coordinated national efforts against terrorism, proliferation of weapons of mass destruction, and trans-national issues such as people smuggling.",
                href : "/Organisation"
            },
            {
                title: 'Accountability',
                text: "The Australian Government expects us to be adaptable and to respond effectively to the growing number and diverse nature of threats facing Australia and its citizens. Our work can involve collecting intelligence relating to national defence, international relations and economic issues. We also contribute to Australia's coordinated national efforts against terrorism, proliferation of weapons of mass destruction, and trans-national issues such as people smuggling.",
                href : "/Accaountability"
            }
        ],
        dashBox : {
            title : "Public Interest Disclosures",
            text : "Our functions, as set out in the Intelligence Services Act 2001, are to:",
            DashElements : [
                {
                    text : "collect foreign intelligence, not available by other means, which may impact on Australia's interests;"
                },
                {
                    text : "distribute that intelligence to the Government, including key policy departments and agencies;"
                },
                {
                    text : "undertake counter-intelligence activities which protect Australia's interests and initiatives; and,"
                },
                {
                    text : "engage other intelligence and security services overseas in Australia's national interests."
                }
            ]
        },
        blocks : [
            {
                pic : "./img/sheild.png",
                title : "CHALLENGE 1",
                text : "Our mission is to protect and promote Australia's vital interests through the provision of unique foreign intelligence services as directed by Government."
            },
            {
                pic : "./img/gloabl.png",
                title : "CHALLENGE 2",
                text : "Our mission is to protect and promote Australia's vital interests through the provision of unique foreign intelligence services as directed by Government."
            },
            {
                pic : "./img/message.png",
                title : "CHALLENGE 3",
                text : "Our mission is to protect and promote Australia's vital interests through the provision of unique foreign intelligence services as directed by Government."
            }
        ]
    }
    );


};