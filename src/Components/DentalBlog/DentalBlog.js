import React from 'react';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.webp'

const DentalBlog = () => {
    return (
        <div className='container w-75'>
            <h3>Dental Care Blog</h3>
            <article>
                <div>
                    <img src={image3} alt="" className='w-75' style={{height:'400px'}} />
                </div>
                <div>
                    <h2>THE FIRST TOOTHBRUSH AND TOOTHPASTE</h2>
                    <p>May 14th, 2014</p>
                    <p className=''>Humans have always tried to find new ways to clean our teeth - we didn't always have electric toothbrushes and air flossers. During the time of the Ancient Egyptians, evidence has been found that they were using primitive tools made from twigs to brush their teeth. Many countries still use twigs from trees with antibacterial properties, such as cinnamon and neem, and they have been found to be just as effective as modern toothbrushes. However, it was the Chinese that first invented a tool most similar to the modern toothbrush. It was made of bamboo and the bristles were made from boar hair. As for toothpaste, it first started out with weird mixtures of ash, eggshells, and crushed bones. A far cry from the minty fresh toothpaste in your bathroom today.</p>
                </div>
            </article>
            <article>
                <div>
                    <img src={image1} alt="" className='w-75' style={{height:'400px'}}/>
                </div>
                <div>
                    <h2>Why are Teeth Cleanings Important</h2>
                    <p>Your routine cleaning is about more than maintaining a beautiful smile. Each checkup has a significant impact on your oral health. Your general health and wellbeing are affected too. Dentists across Canada agree that getting your teeth professionally cleaned twice a year is enough to prevent most oral problems. But what is it that you and your dentist are fighting against? This article will explore why teeth cleanings are important.</p>
                    <h4>PREVENTING GUM DISEASE</h4>
                    <p>Skipping a cleaning allows for extra bacteria and tartar build-up in your mouth. Without intervention, it starts to destroy the bone supporting your teeth. That quickly leads to tooth loss. Thankfully, gum disease is often preventable; simply brushing and flossing every day and getting routine cleanings.</p>
                    <h4>CARDIOVASCULAR DISEASE</h4>
                    <p>The state of your gums is strongly connected to your heart health. Regular teeth cleaning can prevent periodontitis, which in turn reduces your risk of heart attack or stroke. <br /> There are areas of the tooth that are difficult to get to at home, in fact, one-third of your tooth’s surface is hidden under gums or between teeth. <br /> Plaque, an invisible film, is made up of bacteria and develops on your teeth over the course of the day. It’s the leading cause of gum disease.</p>
                    <h4>ORAL CANCER</h4>
                    <p>Specialists are anticipating about 5,400 Canadians being diagnosed with oral cavity cancer in 2021. Two-thirds are expected to survive. That percentage could be higher, because most oral cancers are curable. Early detection is key, that’s why scanning the mouth for signs of cancer has become a regular part of your semi-annual checkup.</p>
                </div>
            </article>
            <article>
                <div>
                    <img src={image2} alt="" className='w-75' style={{height:'400px'}} />
                </div>
                <div>
                    <h2>Oral Cancer: Fact or Fiction</h2>
                    <p>Oncology specialists expect about 5,400 Canadians to be diagnosed with oral cavity cancer by the end of this year. About two-thirds of those patients are expected to survive. Those numbers could be much higher though, as most oral cancers are curable if detected early. That’s why we’re hoping to raise awareness and help as many mouths as possible in the Niagara region and across Canada.
                        <br />
                        <br /> FACT OR FICTION: Oral cancer always begins on the lips. <br />
                        FICTION! <br />
                        Oral cancer can start anywhere in the mouth including the lips, gums, roof, and floor as well as the tongue.
                        <br />
                        <br />
                        FACT OR FICTION: Oral cancer lesions are usually pain-free. <br />
                        FACT! <br />
                        Most precancerous and cancerous lesions are asymptomatic, especially at the beginning. This is why many patients are unaware of lesions altogether. In later stages, the lesion/tumor involves neural structures, which starts to alert patients from the pain and discomfort.
                        <br />
                        <br /> FACT OR FICTION: Sun exposure can lead to cancers in the mouth. <br />
                        FACT! <br />
                        A history of significant sun exposure, or a previous skin cancer diagnosis does elevate your risk of oral cancers. UV exposure is A leading cause of cancer in the lip. Wearing Chapstick with an SPF, as well as a hat will help keep you protected.
                        <br />
                        Furthermore, regular screenings by your dentist drastically increases the likelihood of detecting oral cancer early, which can make a big difference.</p>
                </div>

            </article>

        </div>
    );
};

export default DentalBlog;