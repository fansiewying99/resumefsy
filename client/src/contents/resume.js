export function resume() {
    var data = {
        profile_img: "img_profile.jpg",
        name: "Fan Siew Ying",
        subtitle: "Software Engineeringing Graduate With Honours",
        location: "Bentong, Pahang",
        phone: "012-9513528",
        email: "fsying1999@gmail.com",
        linkedin: "linkedin.com/in/fsying99",
        educations: [
            {
                img: "logo_um.png",
                certificate: "BACHELOR OF COMPUTER SCIENCE (SOFTWARE ENGINEERING)",
                location: "University of Malaya, WP Kuala Lumpur",
                graduation_date: "Feb 2022",
                result: "CGPA 3.66/4.0",
                key_modules: "Fundamentals of Programming, Database, Software Testing, Web programming, Mobile Application Development"
            }
        ],
        works: [
            {
                img: "logo_si.jpg",
                position: "INTERN SOFTWARE ENGINEER",
                duration: "Aug 2020-Feb 2021",
                location: "Software International Corporation (M) Sdn Bhd, WP Kuala Lumpur",
                responsibilities: [
                    "User Acceptance testing (UAT) on existing application",
                    "Bugs fixing on developing application (ReactJs & Django framework)",
                    "Development in new application's Proof Of Concept(POC) (Spring framework)"
                ]
            }
        ],
        achievements: [
            {
                title: "School Project",
                year: "2018-2022",
                description: [
                    {
                        desc: "Honed project management skills and was the project leader for:",
                        pt:
                            [
                                "MazeRunner - a maze runner game to learn the fundamental of Java programming",
                                "VillagersStory - a Java project on a virtual environment which applied design patterns",
                                "TimeTask - a mobile application developed using Android Studio with Java which allows user to manage timetable and tasks"
                            ]
                    }
                ]
            },
            {
                title: "Final Year Project",
                year: "2021-2022",
                description: [
                    "Development on Learning Management System for Young Students",
                    "Application of ReactJs and Django framework for project development",
                    "Application of component-based architecture, software development life cycle, and project management"
                ]
            },
            {
                title: "UM Wushu Club",
                year: "2018-2021",
                description: [
                    "Won 2 Gold and 2 Bronze in 2018 Wucui Wushu Intervarsity Championship",
                    "Experienced Wushu athlete and team leader",
                    "Conducted online classes for Wushu practice for around 20 members"
                ]
            },
            {
                title: "Sukan Mahasiswa UM (SUKMUM)",
                year: "2018 & 2019",
                description: [
                    "Silver medalist for Womens Long Jump and Triple Jump in SUKMUM Track and Field events",
                    "Represented the residental college volleyball team in Volleyball events"
                ]
            }
        ],
        languages: {
            beginner: ["Japanese"],
            intermediate: [],
            proficient: ["English", "Bahasa Malaysia"],
            fluent: ["Mandarin"],
            native: [],
        }
    };
    return data;
}