import React from 'react';
import Subtitle from '../components/text/Subtitle.jsx';
import Akamai from '../assets/Company logos/Akamai.png';
import CapitalOne from '../assets/Company logos/CapitalOne.png';
import BreakThroughTech from '../assets/Company logos/BreakThroughTech.png';
import Cisco from '../assets/Company logos/Cisco.png';
import Google from '../assets/Company logos/Google.png';
import UKG from '../assets/Company logos/UKG.png';
import Microsoft from '../assets/Company logos/Microsoft.png';
import CodePath from '../assets/Company logos/CodePath.png';
import FIUCEC from '../assets/Company logos/FIUCEC.png';
import RewriteTheCode from '../assets/Company logos/RewriteTheCode.png';


const sponsors = [
    { name: "Akamai", logo: Akamai },
    { name: "Capital One", logo: CapitalOne },
    { name: "Google", logo: Google },
    { name: "Microsoft", logo: Microsoft },
    { name: "Cisco", logo: Cisco },
    { name: "UKG", logo: UKG },
];

const communitySponsors = [
    { name: "Break Through Tech", logo: BreakThroughTech },
    { name: "Code Path Org", logo: CodePath },
    { name: "Rewriting the Code", logo: RewriteTheCode },
    { name: "FIU College of Engineering and Computing", logo: FIUCEC }
]

export default function SponsorsSection() {
    return (
        <section className="mb-10 grid place-content-center gap-y-10 max-w-screen-lg mx-auto px-2 pt-6">
            <div>
                <Subtitle className="flex space-x-3 py-10 place-content-center">
                    Our Sponsors
                </Subtitle>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 items-center justify-center">
                {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={sponsor.logo} alt={sponsor.name} className="h-52 w-auto object-contain"/>
                    </div>
                ))}
            </div>

            <div>
                <Subtitle className="flex space-x-3 py-10 place-content-center">
                    Our Community Partners
                </Subtitle>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-10 items-center justify-center">
            {communitySponsors.map((sponsor, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={sponsor.logo} alt={sponsor.name} className="h-42 w-auto object-contain"/>
                    </div>
                ))}
            </div>
        </section>
    );

}