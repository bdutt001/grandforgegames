import {useState} from "react";

import Bullet from "../assets/icons/hammer.svg";

import Map from "../components/Map.tsx";

import Member from "../components/Member.tsx";
import Placeholder from "../assets/logos/gfg-icon-gold-black.svg";
import Nick from "../assets/photos/Nick_S.jpg";
import Nate from "../assets/photos/Nathan_Y.jpg";
import Ben from "../assets/photos/Ben_D.PNG";
import Alex from "../assets/photos/Alexander_H.jpg";
import Col from "../assets/photos/Col_R.jpg";
import Billiam from "../assets/photos/Billy_L.jpg";
import Leo from "../assets/photos/Leo_E.jpg";
import Hazel from "../assets/photos/Olivia_B.jpg";
import Tavier from "../assets/photos/Tavier_F.jpg";
import Elhadg from "../assets/photos/Elhadg.jpg";



export default function Team() {
    const members = [
        {
            name: "Nick Scherer",
            photoUrl: Nick,
            roles: ["Project Lead","Programmer"],
            links: [
                { type: "linkedin", url: "https://linkedin.com/in/nicholas-scherer-6273a62aa/" }
            ]
        },
        {
            name: "Nathan Young",
            photoUrl: Nate,
            roles: ["Programmer"],
            links: [
                { type: "linkedin", url: "https://linkedin.com/in/nathan-young-799965293/" }
            ]
        },
        {
            name: "Ben Dutton",
            photoUrl: Ben,
            roles: ["Programmer","Web Designer"],
            links: [
                { type: "linkedin", url: "https://linkedin.com/in/benjamin-dutton-a557343a5" },
                { type: "github", url: "https://github.com/bdutt001" }
            ]
        },
        {
            name: "Cole Reese",
            photoUrl: Col,
            roles: ["Lead Artist","Visual Design"],
            links: [
                { type: "linkedin", url: "https://linkedin.com/in/colereese/" }
            ]
        },
        {
            name: "William Latimer",
            photoUrl: Billiam,
            roles: ["Creative Director","Lead Composer","Lead Writer"],
            links: [
                { type: "linkedin", url: "https://linkedin.com/in/wiliam-latimer-08687a395/" }
            ]
        },
        {
            name: "Elhadg Diouf",
            photoUrl: Elhadg,
            roles: ["Sound Designer","Composer"],
            links: [
                { type: "linkedin", url: "https://linkedin.com/in/elhadg-diouf/" }
            ]
        },
        {
            name: "Tavier Futrell",
            photoUrl: Tavier,
            roles: ["Animator","Visual Design"],
            links: [
                { type: "linkedin", url: "https://linkedin.com/in/tavier-futrell-8a97442ba/" }
            ]
        },
        {
            name:"Leonardo Evangelisti",
            photoUrl: Leo,
            roles: ["Visual Design"],
            links: [
                { type: "linkedin", url: "https://www.linkedin.com/in/leonardo-evangelisti-56677a15b/" }
            ]
        },
        {
            name: "Shavon",
            photoUrl: Placeholder,
            roles: ["Visual Design"],
            links: [

            ]
        },
        {
            name: "Jacob",
            photoUrl: Placeholder,
            roles: ["Writer"],
            links: [

            ]
        },
        {
            name: "Alex",
            photoUrl: Alex,
            roles: ["Writer"],
            links: [

            ]
        },
        {
            name: "Hazel",
            photoUrl: Hazel,
            roles: ["Writer"],
            links: [
                
            ]
        }
    ]

    const allRoles = [...new Set(members.flatMap(m => m.roles))];

    const roleGroups: Record<string, string[]> = {
        Leads: ["Project Lead", "Creative Director", "Lead Artist", "Lead Composer", "Lead Writer"],
        Programming: ["Programmer", "Web Designer"],
        Art: ["Lead Artist", "Artist", "Visual Design", "Animator"],
        Audio: ["Sound Designer", "Music Producer", "Lead Composer"],
        Writing: ["Lead Writer", "Writer"]
    };

    const allTags = Object.keys(roleGroups);

    const [selectedRoles, setSelectedRoles] = useState<string[]>([]);

    const filteredMembers = members.filter((member) => {
        if (selectedRoles.length === 0) return true;

        return selectedRoles.some((tag) =>
            roleGroups[tag].some((role) => member.roles.includes(role))
        );
    });

    const toggleRole = (role: string) => {
        setSelectedRoles((prev) =>
            prev.includes(role)
            ? prev.filter((r) => r !== role)
            : [...prev, role]
        );
    };
    
    return (
        <>
            <main className="main">
                <h2>
                    <img src={Bullet} className="bullet"></img>
                    About Us
                </h2>

                <p>
                    Founded in 2025, Grand Forge Games is an independent game studio 
                    based in Yorktown, Virginia.
                    {/* <iframe 
                        src="https://www.google.com/maps?q=Yorktown,VA&z=5&output=embed"
                        width="600" 
                        height="450"
                        style= {{border:0}}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    ></iframe> */}
                </p>
            </main>
            <div className="map-parent">
                <div className="map-wrapper">
                    <Map />
                </div>
            </div>
            <main className="main">
                <p>
                    <br></br><br></br> 
                    Members of our team have competed in game building competitions,
                    winning the recent
                    <a href="https://itch.io/jam/shadows-of-the-imagination-fall25">
                        "Shadows of the Imagination: A Game Jam"
                    </a>
                    , hosted by Old Dominion University in October of 2025.
                </p>
                <div id="meet-the-team">
                    <h2>
                        <img src={Bullet} className="bullet" alt="bullet"/>
                        Meet the Team
                    </h2>
                    <p>
                        The Grand Forge Games team is comprised of twelve talented members from across the world.
                    </p>
                    <h3>
                        Filters
                    </h3>
                    <div className="role-filters">
                        {allTags.map((tag) => (
                            <span
                                key={tag}
                                className={`filter-tag ${selectedRoles.includes(tag) ? "active" : ""}`}
                                onClick={() => toggleRole(tag)}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button onClick={() => setSelectedRoles([])} className="clear-filters">
                        Clear Filters
                    </button>
                    <div className="members">
                        {filteredMembers.map((member) => (
                            <Member
                            key={member.name}
                            name={member.name}
                            photoUrl={member.photoUrl}
                            roles={member.roles}
                            links={member.links}
                            />
                        ))}
                    </div>

                </div>
            </main>
        </>
    )
}