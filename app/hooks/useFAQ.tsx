import { useMemo } from "react";

const useFAQ = () => {
    const faq = useMemo(() => [
        {
            id: 1,
            question: "Which are the best treks in Maharashtra to do from June to October?",
            answer: (
                <>
                    India and the state of Maharashtra offer some beautiful trekking opportunities from June to October, especially in the Western Ghats and the Himalayan region. Here are some of the best treks to consider during this time in Maharashtra: <br />

                    <b>Harishchandragad Trek:</b> Located in the Western Ghats, Harishchandragad is famous for its Konkan Kada cliff, a challenging trek with breathtaking views. The monsoon season transforms the region into a lush green paradise. It's best done from June to September. <br />

                    <b>Rajmachi Trek:</b> Rajmachi is a historic hill fort near Lonavala, Maharashtra. The trek takes you through dense forests and offers stunning views of the Sahyadri Mountains. This trek is suitable from June to October. <br />

                    <b>Kalsubai Trek:</b> Kalsubai is the highest peak in Maharashtra. The trek can be done year-round but is especially beautiful during the monsoon when the surroundings are covered in vibrant greenery. <br />

                    <b>Lohagad Trek:</b> Lohagad is an easily accessible trek near Lonavala. It's a great option for beginners and offers panoramic views of the Sahyadri range. Trekking here is possible from June to October. <br />

                    <b>Torna Fort Trek:</b> Torna Fort is historically significant and offers a fantastic trekking experience. The monsoon season makes the surroundings lush, and the fort comes alive with greenery. Best done from June to September. <br />

                    <b>Sinhagad Trek:</b> Located near Pune, Sinhagad is a popular trekking spot. The monsoon season adds charm to the trek with its misty atmosphere and green landscapes. It's accessible from June to September. <br />

                    <b>Bhimashankar Trek:</b> Bhimashankar is not only a revered temple but also a trekking destination known for its biodiversity. The trek is best done during the monsoon season when the hills are covered in lush greenery. <br />

                    <b>Andharban Trek:</b> Known as the "Dark Forest," this trek takes you through dense forests in the Sahyadri range. The monsoon season brings out the beauty of the forest with numerous waterfalls and streams. <br /><br/>

                    Please note that trekking in the Western Ghats during the monsoon season can be challenging due to heavy rainfall and slippery trails. It's essential to take necessary precautions, wear appropriate trekking gear, and be prepared for changing weather conditions. Additionally, always check for local guidelines, permissions, and the current status of the trek before embarking on your adventure.
                </>
            )
        },
        {
            id: 2,
            question: "Which are the best treks to do in India from June to October",
            answer: (
            <>
                In addition to the treks mentioned in Maharashtra, India offers a wide range of trekking options from June to October in various regions. Here are some fantastic treks to consider in different parts of India during this period: <br/>

                <b>Valley of Flowers Trek, Uttarakhand:</b> This UNESCO World Heritage Site comes to life with a burst of vibrant flowers during the monsoon season. June to September is the best time to witness this natural spectacle.<br/>
                
                <b>Hampta Pass Trek, Himachal Pradesh:</b> Hampta Pass offers a mix of lush green valleys and high-altitude desert landscapes. The trek is usually accessible from June to early October.<br/>
                
                <b>Pin Parvati Pass Trek, Himachal Pradesh:</b> This is one of the more challenging treks in the region, but it offers stunning views of the Pin Parvati Valley. It's best attempted from late June to early October.<br/>
                
                <b>Roopkund Trek, Uttarakhand:</b> Roopkund is famous for its mysterious lake filled with skeletal remains. The trek is best done from June to September when the snow melts, revealing the lake.<br/>
                
                <b>Stok Kangri Trek, Ladakh:</b> If you're looking for a challenging high-altitude trek, Stok Kangri is a great option. It's best undertaken from June to September when the weather is milder.<br/>
                
                <b>Great Lakes Trek, Jammu and Kashmir:</b> This trek takes you through a series of alpine lakes with stunning mountain scenery. The best time for this trek is from late June to early September.<br/>
                
                <b>Rupin Pass Trek, Himachal Pradesh:</b> As mentioned earlier, this trek offers beautiful landscapes and is accessible from June to early October.<br/>
                
                <b>Goechala Trek, Sikkim:</b> Offering spectacular views of the Kanchenjunga Range, this trek is best done from late June to early October.<br/>
                
                <b>Tarsar Marsar Trek, Jammu and Kashmir:</b> These twin alpine lakes in the Kashmir Valley are surrounded by lush meadows and pine forests. The trek is ideal from late June to September.<br/>
                
                <b>Sandakphu Trek, West Bengal:</b> Sandakphu offers panoramic views of four of the world's five highest peaks. The best time to trek here is from late September to early October.<br/>
            </>
            )
        },
        {
            id: 3,
            question: "What are some easy treks for beginners in India?",
            answer: (
        <>        
            For beginners, it's a good idea to start with relatively easy treks that offer beautiful landscapes and don't require extensive trekking experience or technical skills. Here are some easy treks in India for beginners:<br/>

            <b>Triund Trek, Himachal Pradesh:</b> This short trek near McLeod Ganj in Himachal Pradesh is known for its stunning views of the Dhauladhar Range. It's a relatively easy and well-marked trail, making it suitable for beginners.<br/>
            
            <b>Kheerganga Trek, Himachal Pradesh:</b> Located in the Parvati Valley, this trek takes you to a hot spring at Kheerganga. It's a moderate hike with a well-defined trail and is suitable for beginners.<br/>
            
            <b>Nag Tibba Trek, Uttarakhand:</b> Nag Tibba is often referred to as the "Trekker's Delight." It's a relatively easy trek with beautiful views of the Garhwal Himalayas, making it an excellent choice for beginners.<br/>
            
            <b>Prashar Lake Trek, Himachal Pradesh:</b> The trek to Prashar Lake is short and easy, with a well-marked trail. The highlight is the serene Prashar Lake, surrounded by mountains.<br/>
            
            <b>Chopta Chandrashila Trek, Uttarakhand:</b> This trek offers panoramic views of the Himalayan peaks, including Nanda Devi and Trishul. The trail is relatively easy and suitable for beginners.<br/>
            
            <b>Brahmatal Trek, Uttarakhand:</b> Brahmatal is a beautiful trek that takes you through forests and offers views of snow-capped peaks. It's considered a moderate trek but is doable for beginners with some prior fitness.<br/>
            
            <b>Pangarchulla Trek, Uttarakhand:</b> This trek provides an opportunity to summit a peak and enjoy breathtaking views. While it's a bit more challenging than the others on this list, it's still considered suitable for beginners with some preparation.<br/>
            
            <b>Dodital Trek, Uttarakhand:</b> This trek takes you to the pristine Dodital Lake, surrounded by lush forests. It's relatively easy and offers a tranquil trekking experience.<br/>
            
            <b>Tadiandamol Trek, Karnataka:</b> Located in the Western Ghats, Tadiandamol is the highest peak in Karnataka. The trek is beginner-friendly and provides beautiful views of the Coorg region.<br/>
            
            <b>Har Ki Dun Trek, Uttarakhand:</b> While slightly longer than some other beginner treks, Har Ki Dun offers a rewarding experience with lush meadows and views of the Swargarohini peaks.<br/><br/>
            
            Before embarking on any trek, especially as a beginner, it's important to consider factors like your fitness level, altitude acclimatization, and the difficulty of the trail. Always check the local weather conditions, carry essential gear, and, if needed, hire a local guide for added safety and guidance. Starting with easier treks is an excellent way to build your trekking skills and gradually progress to more challenging ones as you gain experience.
        </>
            )
        },
        {
            id: 4,
            question: "How can I work with HikeHaven?",
            answer: 
            (
        <>
            This is something many trekkers ask us.<br/><br/> If you’re interested in working with us, Fill out the <b><a href="https://forms.gle/cqmFawFp5728hpMU8" className="hover:underline">Google form</a></b> or Reach out to us on our Social Media Handles. Given that our organization is growing, we have lots of new roles opening up regularly.

            We are always looking for team players, who understand the trekking world and fit into the working culture of HikeHaven.<br/><br/>More than skills and experience, we pay attention to your behavior and values.
            
            Getting in and starting work here isn’t easy. There are several levels of interviews and tests. But once you get through, it is one of the most rewarding and meaningful journeys in your career.
        </>
            )
        },
        {
            id: 5,
            question: "Can I join your treks as a solo trekker?",
            answer: 
            (
            <>
            Yes, absolutely. Many solo trekkers join our teams and have wonderful experiences. They end up meeting like-minded people on the trek and don't feel like they have come along on the trek anymore.

            <br/><br/>Our pre-trek experienced team ensures that you know your entire team well much before you actually head out on the trek.
            
            Additionally, we have several women trekkers who join us solo as well because of the safety they get with the HikeHaven team. You're welcome to join us as a solo trekker too.
            </>
            )
        },
        {
            id: 6,
            question: "Can I rent trekking gear with HikeHaven If needed on trek?",
            answer: 
            (
                <>
            Definitely! At HikeHaven we believe renting is the way forward, to make trekking more efficient, and more economical, without compromising the quality of trekking gear. So we have a range of high-quality gear available for rent at very small costs. 

            Take a look at them here – (link to rent/buy gears)
            
            Your rental gear will be given to you at the base camp on the day you arrive.
            
            <br/>In case you have rented a trekking backpack, you may use the cloakroom facility to keep your extra luggage. We want you to travel as light as possible from your home. 
            
            Renting of items close 3 days before the start of the trek.
            </>
            )
        }
    ],[])

    return faq;
}

export default useFAQ;