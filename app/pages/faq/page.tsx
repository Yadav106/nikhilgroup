'use client';

import React, { useState } from 'react';
import FAQ from "@/app/components/faq/FAQ";
import BottomForum from "../home/components/BottomForum";

const FAQs = () => {
    const [faqs, setFaqs] = useState([
        { 
        question: 'How do I Register for a Trek?', 
        answer: (
        <>
        <b style={{ fontFamily: 'Poppins, sans-serif' }}>Our registration process is entirely an online process. You'll be able to complete it in a few simple steps:</b><br></br>
        ● Head to the upcoming treks page and choose a trek.<br/>
        ● Click on View Dates/Register and select a date of your choice. Then click on register.<br/>
        ● Go through the eligibility criteria and terms and conditions. (Don’t ignore this step) <br/>
        ● Fill out the form that appears with all the details. <br/>
        ● Make the payment online.<br/>
        </>
        )
    },
    { 
        question: 'Can I Register for waitlists on Multiple Treks at once?', 
        answer: (
        <>
        <b style={{ fontFamily: 'Poppins, sans-serif' }}>
        You can register for waitlist slots on more than one trek or group. 
        However, the dates for which you are registering mustn't overlap. 
        Our system will not allow you to register if the dates overlap.</b><br></br>
        </>
        )
    },
    { 
        question: 'What all is Included is in trek fees?', 
        answer: (
            <>
            <b style={{ fontFamily: 'Poppins, sans-serif' }}>Each trek is unique and may include different things in the trek fee. You can find out exactly what's included in the "What's Included" section on the relevant trek page.<br/><br></br>
            Generally speaking, your trek fee includes all costs while on the trek, including:</b><br></br>
            ● Accommodation (e.g. tents and/or lodges) <br/>
            ● All meals (simple, nutritious and vegetarian)<br/>
            ● Expert trek leaders and support team<br/>
            ● Trekking and safety equipment<br/>
            ● All permits and camping charges<br/><br/>
            <b>Your fee usually does not include expenses incurred while getting to and from the base camp or your equipment, such as your backpack, shoes or clothing.</b>
            </>
            )
    },
    { 
        question: 'What all is not Included is in trek fees?', 
        answer: (
            <>
            <b style={{ fontFamily: 'Poppins, sans-serif' }}>
            Your fee usually does not include: </b><br/><br/>
            ● Expenses incurred while getting to and from the base camp like food, transport and accomodation.<br/>
            ● Your equipment, such as your backpack, shoes or clothing.<br/>
            </>
            )
    },
    {
        question: 'My Transaction Failed, What should I do?',
        answer: (
            <>
                <b style={{ fontFamily: 'Poppins, sans-serif' }}>
                    If your transaction has failed, please contact us by mailing us at{' '}
                    <a className="hover:text-red-500" href="mailto:hikehaven13@gmail.com" style={{ color: 'black', textDecoration: 'underline' }}>
                        hikehaven13@gmail.com
                    </a>.
                    We will review the transaction and guide you through the next steps in the next 24 hours.
                </b>
                <br/><br/>
            </>
        )
    },
    { 
        question: 'I am a solo woman trekker. Is it safe for me on the trek?', 
        answer: (
            <>
                <b style={{ fontFamily: 'Poppins, sans-serif' }}>
                    You're welcome to join us as a solo woman trekker. We take great pride in knowing that 35% of our trekkers are women, many of whom trek solo with us. This percentage means that there are usually at least 4-5 women in any trekking batch. So you can comfortably join us on a trek as a solo woman trekker.<br></br>
                    To make sure you know your trek mates before you meet them, we have a WhatsApp group and a pre-trek briefing where you can meet them virtually. That way, you'll not be trekking with strangers. <br></br>
                    When you're on the trek, our Trek Leaders are sensitized to handle all kinds of women's issues. So whether you're on your period or anything is making you uncomfortable, you can speak to our Trek Leader.<br></br>
                    Regarding your safety and privacy, you will stay with another woman in a tent. We also have separate toilet tents for men and women. If you have any further questions, don't hesitate to ask questions on our <a href="https://t.me/+Pj_lJgHGm5djMDI1" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}>Community forum.</a></b><br></br>
                </>
        )
    },
    { 
        question: 'Is smoking and drinking allowed while on trek?', 
        answer: (
            <>
                <b style={{ fontFamily: 'Poppins, sans-serif' }}>
                We strictly prohibit smoking and alcohol consumption. These can be fatal at high altitude. So even if you are a smoker, you are expected to keep away from it during the trek. You will be sent back to the basecamp if you are found smoking or drinking or even carrying alcohol.</b><br></br>
                </>
        )
    },
    ]);

    const [faqs2, setFaqs2] = useState([
        { 
        question: 'What is the upper age limit for booking a trek with HikeHaven?', 
        answer: (
        <>
        <b style={{ fontFamily: 'Poppins, sans-serif' }}>Although the upper age limit is mentioned as 58 years, it is not a strict upper age limit that we exercise. We have mentioned it on the website so that anyone above 58 can get in touch with us for better guidance. You are going on a high altitude trek after all, which requires certain fitness and medical health.<br></br>
        Having said that, we have had several 60+ and 70+ year olds trek with us and complete their treks comfortably and safely.<br/>
        All you need is a good level of preparation and fitness to do these treks. If you have doubts / questions, do contact us and we will guide you with trek suggestions.<br/></b>
        <br/>
        </>
        )
    },
    { 
        question: 'Do I need previous trekking experience to trek with HikeHaven?', 
        answer: (
        <>
        <b style={{ fontFamily: 'Poppins, sans-serif' }}>
        Many people are intimidated by the idea of a Himalayan trek. There are indeed significantly real risks and challenges.<br></br>
        However, almost everyone can participate in a Himalayan trek as long as they are physically fit and mentally prepared for their treks. Around 75% of our trekkers are beginners, and they trek comfortably.<br></br><br></br>
        What will help you is that after you register for your trek? <br></br>The HikeHaven Pre-Trek Experience Team will guide you on how to prepare for your trek. They will give you a fitness routine to follow and guidance on what to bring for the trek. They will also put you in touch with the rest of your trekking team so that you know your trek mates well in advance.</b>
        <br/><br/>
        </>
        )
    },
    { 
        question: 'Is fitness mandatory to go on the trek?', 
        answer: (
            <>
            <b style={{ fontFamily: 'Poppins, sans-serif' }}>Your level of fitness can make or break your trek. Four things happen when you are not fit:</b><br></br>
            ● You do not enjoy the trek<br/>
            ● You may also be sent down if you are highly unfit for your trek. <br/>
            ● You struggle to be a part of the team<br/>
            ● You miss out on a profoundly transformative experience that trekking can offer.<br/>
            <b>This is why it’s essential to be fit for a trek. The good part is it’s not difficult. All you need to do is start following a fitness routine 45-60 days before the trek begins.</b>
            <br/><br/>
            </>
            )
    },
    { 
        question: 'What is your Cancellation Policy?', 
        answer: (
            <>
                <b style={{ fontFamily: 'Poppins, sans-serif' }}>
                Please head over here to read our cancellation policy in detail -<a href="https://drive.google.com/file/d/1tW8S3zyie1tRCpjIPR5_tQdGHGaUKKhc/view" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline', fontWeight: 'bold' }}> Click here to view.</a></b>
                <br></br>
                </>
        )
    },
    {
        question: `If I don't show up for my trek, does the "Trek Again" policy apply?`,
        answer: (
            <>
                <b style={{ fontFamily: 'Poppins, sans-serif' }}>
                 If you do not show up for the trek, you cannot avail the 'Trek again' policy.
                </b>
                <br/><br/>
            </>
        )
    },
    {
        question: 'What are the toilets/washroom facilities like on the trek?',
        answer: (
            <>
                <b style={{ fontFamily: 'Poppins, sans-serif' }}>
                On Trek days, toilet tents will be set up along each campsite.
                A toilet tent will have a deep pit, where one can answer nature’s call.<br>
                </br> There will be a mound of soil and a shovel to cover it up. These are dry toilets, where you’ll have to use toilet paper. There will be a room freshener as well. It’s the most hygienic and convenient way to answer nature’s call in the wild.
                </b>
                <br/><br/>
            </>
        )
    },
    {
        question: 'What is the group size on an HikeHaven treks?',
        answer: (
            <>
                <b style={{ fontFamily: 'Poppins, sans-serif' }}>
                Most of our treks have a group size of 20 trekkers on average. <br></br>
                This can change, though, depending on the difficulty level of the particular trek. <br></br>
                For treks that are in the difficult or moderate-difficult category, there would be between 15-18 trekkers in every group, while treks that are relatively easier can have group sizes of between 20-24 trekkers.
                </b>
                <br/><br/>
            </>
        )
    }
    ]);

    return (
        <div className="mt-[150px]">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr', gap: '30px' }}>
                <div className='flex flex-col  mb-[20px]'>
                    <div>
                        <h2 style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '40px', color: 'black', fontWeight: 'bold' }}>
                            Joining for a Trek with HikeHaven?
                        </h2>
                        <h3 style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '24px', color: 'black', fontStyle: 'italic' }}>
                            If you have doubts or trouble registering for a trek, use this section to troubleshoot your problems.
                        </h3>
                        <hr style={{ border: '3px solid #ccc' }} />
                    </div>
                    {faqs.map((faq, index) => (
                        <FAQ key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
                <div className='flex flex-col'>
                    <div>
                        <h2 style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '40px', color: 'black', fontWeight: 'bold' }}>
                        Find information for your trek
                        </h2>
                        <h3 style={{ fontFamily: 'Times New Roman, Times, serif', fontSize: '24px', color: 'black', fontStyle: 'italic' }}>
                        One stop to find all the answers before going on your trek & start New Adventures.
                        </h3>
                        <hr style={{ border: '3px solid #ccc' }} />
                    </div>
                    {faqs2.map((faq, index) => (
                        <FAQ key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
            <BottomForum />
        </div>
    );
}

export default FAQs;
