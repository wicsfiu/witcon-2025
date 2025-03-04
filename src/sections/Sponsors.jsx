import React from 'react';
import Subtitle from '../components/text/Subtitle.jsx';
import MegaSponsor from '../assets/Company logos/MEGABYTE.png';
import MegaSponsor2 from '../assets/Company logos/MEGABYTE (2).png';
import MegaSponsor3 from '../assets/Company logos/MEGABYTE (3).png';
import Sponsor4 from '../assets/Company logos/4.png';
import Sponsor5 from '../assets/Company logos/5.png';
import Sponsor6 from '../assets/Company logos/6.png';
import Sponsor7 from '../assets/Company logos/7.png';
import Sponsor8 from '../assets/Company logos/8.png';
import communityPartner from '../assets/Company logos/community partner.png';
import communityPartner2 from '../assets/Company logos/community partner (2).png';
import communityPartner3 from '../assets/Company logos/community partner (3).png';

const megaSponsors = [
    { name: "Chevron", logo: MegaSponsor },
    { name: "Akamai", logo: MegaSponsor2 },
    { name: "Capital One", logo: MegaSponsor3 }
]

const sponsors = [
    { name: "Google", logo: Sponsor4 },
    { name: "Microsoft", logo: Sponsor5 },
    { name: "Cisco", logo: Sponsor6 },
    { name: "UKG", logo: Sponsor7 },
    { name: "Break Through Tech", logo: Sponsor8 }
];

const communitySponsors = [
    { name: "Code Path Org", logo: communityPartner },
    { name: "Rewriting the Code", logo: communityPartner2 },
    { name: "FIU KFSCIS", logo: communityPartner3 }
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
                {megaSponsors.map((sponsor, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={sponsor.logo} alt={sponsor.name} className="h-92 w-auto object-contain"/>
                    </div>
                ))}

                {sponsors.map((sponsor, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={sponsor.logo} alt={sponsor.name} className="h-52 w-auto object-contain"/>
                    </div>
                ))}

                {communitySponsors.map((sponsor, index) => (
                    <div key={index} className="flex justify-center">
                        <img src={sponsor.logo} alt={sponsor.name} className="h-42 w-auto object-contain"/>
                    </div>
                ))}
            </div>
        </section>
    );

}