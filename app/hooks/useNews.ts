import { useMemo } from "react";

const useNews = () => {
    const news = useMemo(() => [
        {
            id: 1,
            title:"First season of the Tulian Lake trek starts on a great note!",
            img:"/images/upcoming/tulian_lake.jpg",
            body:`The first group that trekked to Tulian Lake is back! They experienced great weather on the trek, mostly sunny. And have come back mesmerized by the views and landscape of this trek.
            "Trekkers really loved the Tulian Lake trek. They also observed that the trek is easy on the legs and is doable by children or even seniors," shares Debadrita Ghosh, Experience Coordinator for the Tulian Lake trek.
            Most treks in Jammu and Kashmir are not easy on your legs. You need prior trek experience and good fitness to do them. This is why many families or even seniors hesitate to trek in Jammu and Kashmir.
            But the Tulian Lake trek is changing this. We are anticipating this trek to become more popular with families and seniors.
            This season, we have only two more groups doing the Tulian Lake trek. But we plan to open more groups for this scenic trek in the monsoon of 2024.
            We will share more updates from the Tulian Lake trek right here.`,
            date:"27th August, 2023",
            showBtn: false
        },
        {
            id: 2,
            title:"The weather clears up in the Valley of Flowers region. Trek is back on schedule.",
            img:"/images/upcoming/pipalkoti.jpg",
            body:`As soon as the weather cleared up early this morning, traffic started moving between Pipalkoti and Joshimath. As a result, the August 23 group to Valley of Flowers was able to reach Dhak by 7.30 a.m. today.
            They had their briefing and breakfast at Dhak and then quickly moved to Govindghat to start their trek towards Ghangria.
            The entry to Valley of Flowers also opened.           
            Here’s a group-wise update of the Valley of Flowers trek:           
            Aug 19: This team has successfully completed the trek and is returning to Rishikesh by tonight.           
            Aug 20: This team is returning to Dhak after completing the trek.           
            Aug 21 and Aug 22: These teams were able to trek from Ghangria to Valley of Flowers today.           
            Aug 23: This team is trekking from Dhak to Ghangria.          
            Aug 24: This team is on their way from Rishikesh to Karchhi.          
            “All Valley of Flowers groups are running on schedule. And we are expecting better weather in the coming days,” says Tilak Rawat, Experience Coordinator for the Valley of Flowers trek.         
            We are constantly receiving updates from our Valley of Flowers team. And we will keep posting all relevant information here.`,
            date:"26th August, 2023",
            showBtn: false
        },
        {
            id: 3,
            title:"Heavy Rains on the Valley of Flowers trek. Here's what you can expect.",
            img:"/images/upcoming/valleyofflowers.jpeg",
            body:`It has been raining heavily in the Valley of Flowers region since 3 a.m. today.
            In heavy rains, the Pushpavati river, which flows between Ghangria and the Valley of Flowers, swells up. Even with a bridge over it, it becomes risky to cross the river in such a situation. This is why the government has restricted access to the Valley of Flowers during heavy rains.
            The route from Ghangria to the Valley of Flowers is likely to open once the rainfall subsides.
            “There are high chances of encountering road blocks on the route from Rishikesh to Karchhi due to landslides in heavy rains,” cautions Tilak Rawat, Experience Coordinator for the Valley of Flowers trek. This may delay the team who is travelling on this route.
            We are constantly in touch with our teams, and we will keep posting relevant updates about the trek right here.`,
            date:"20th August, 2023",
            showBtn: false
        },
        {
            id: 4,
            title:"Latest Photos from the Pin Bhaba Pass trek by HikeHaven",
            img:"/images/upcoming/pin_bhabha.jpg",
            body:`A few days ago, Trek Purav Ajmera returned from the first Pin Bhaba Pass trek of the season. The photos he shared left us stunned!
            “I couldn't believe my eyes as I trekked from one day to the next. It was my 64th group as a Trek Leader. I have done multiple Himalayan treks, ranging from Kashmir to Himachal to Uttarakhand to Sikkim. But Pin Bhaba Pass is the grandest crossover trek I have done to date. There are very few treks that offer such variety in terms of change in landscapes, thrilling adventures, pretty campsites, and contrasting vistas,” he gushed, while sharing the photos.
            Simply put, these photos are an absolute must-see. They show you how the Pin Bhaba Pass trek offers a great mix of Kashmir and Ladakh landscapes.`,
            date:"10th August, 2023",
            showBtn: true,
            btnText: "View Gallery",
        },
        {
            id: 5,
            title:"Green Trails Report: Teams collected 1088 kg of waste in June/July 2023",
            img:"/images/upcoming/greentrails.jpg",
            body:`At the end of every month, we make a report of the amount of waste our teams and trekkers have collected from the trails. This waste is segregated and handed over to waste management units in the respective regions. 
            This time, 177 groups that trekked with us in June/July collected 1088 kg of waste from the various Himalayan treks in Jammu and Kashmir, Uttarakhand, and Himachal Pradesh.         
            Most of the waste consists of plastic packets and wrappers that do not weigh more than a fraction of a gram. Such flimsy plastic waste amounting to 1000 kg was lying strewn across in the mountains.           
            "Our trekkers and internal team members have done a back-breaking job, not only collecting every bit of litter, but segregating it too," shares Purav Ajmera, who is leading the Green Trails initiative at HikeHaven.           
            To keep the momentum going,  two new members have joined the Green Trails team -- Ankit Punekar & Satvik Rane. They will be working with us for the next three months to make trekking more sustainable and help us leave mountains better than we find them.`,
            date:"04th August, 2023",
            showBtn: false
        },
        {
            id: 6,
            title:"Team HikeHaven conducts safety and technical training to upskill guides in Uttarakhand",
            img:"/images/upcoming/technical.jpg",
            body:`HikeHaven conducted a 2-day training program for our guides at the Raithal Campus (basecamp for Dayara Bugyal trek).
            During this training, guides learned about safety and technical skills.          
            At HikeHaven, we place a lot of emphasis on upskilling all our team members—be it our Trek Leaders or guides—especially on safety and technical skills. These trainings focus on enabling them to secure any kind of trekking trail to make it safe for our trekkers.           
            To do this effectively, such trainings have a razor-sharp focus on the use of technical tools used during tricky sections, knowledge of ropes and knots, and basics of medical safety. It also focus on polishing the soft skills of our guides to help them communicate effectively with out trekkers.        
            Today is the final day of one such training.           
            “I can see the positive impact of this training. Some of the guides are already stepping forward to take on more responsibilities,” shares Ashish Sukhadare, Trek Leader, who conducted this training for the guides.          
            We have more training related updates coming up. We will be posting all of them right here.`,
            date:"30th July, 2023",
            showBtn: false,
        },
        {
            id: 7,
            title:"We're recruiting Trek Leaders & Volunteers at HikeHaven",
            img:"/images/upcoming/trekleaders.jpg",
            body:`We are actively looking for 20 more Trek Leaders to join our team.
            This is a growing need because not only are we actively exploring treks (we have opened six new treks this year), but our Experiential Learning Division has also been growing. Word has gotten out about the team-building and outdoor learning programmes that we offer to schools, colleges, and companies.       
            The tragedy is that we have had to turn down several schools and companies because we are short of team members, despite having 51 excellent Trek Leaders on our team.           
            Even as you read this update, ten new members are undergoing training at our office to be assistant trek leaders. Yet, we need at least 20 more Trek Leaders to take the scope of work forward.           
            If you’d like to apply, click on the Button below.`,
            date:"24th July, 2023",
            showBtn: true,
            btnText: "Apply Now",
        },
        {
            id: 8,
            title:"Irresponsible trekking groups in Maharashtra to face problems against their actions.",
            img:"/images/upcoming/overcrowd.jpg",
            body:`In the last few years, incidents of trekkers getting lost, drowned or falling down a gorge is on the rise. Every monsoon, numerous cases are registered, especially on weekends. 
            Overcrowded route of Peb fort, where two Mumbai trekkers were rescued after they survived a 200-foot fall(HT PHOTO)
            Overcrowded route of Peb fort, where two Mumbai trekkers were rescued after they survived a 200-foot fall(HT PHOTO)
            According to the rural police, almost 15 people have died so far while 50 others were injured at various waterfalls and forts around Pune and Mumbai. Recently, two Mumbai trekkers were rescued after a five-hour long rescue operation from Raigad district after they fell 200 feet. On the same day, two trekkers drowned at the Devkund waterfall, Bhira in Raigad district.  
            Though, several trekking organisations voluntarily come ahead to help the victims of such tragedies, the ever increasing number of the incidents is already taxing their resources.       
            Therefore, organisations like Shivdurga Mitra (Lonavala), Yashwanti Highkars (Khopoli), Nisargamitra (Panvel), Pimpri Chinchwad Mountaineering Association, Giripremi (Pune) and Vaintaiya Trekking Institute (Nashik), who actively participate in rescue operations, have come ahead and decided to take some severe action to curb the number of incidents.`,
            date:"14th July, 2023",
            showBtn: false
        },
    ],[])

    return news;
}

export default useNews;