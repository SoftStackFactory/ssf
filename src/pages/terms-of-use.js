import React from 'react'
import './index.css' // Optional: For any custom styles
import Header from "../components/header";
import Footer from "../components/footer";
import Divider from '@mui/material/Divider';

const TermsPage = () => {
  return (
    <main style={{ paddingTop: '350vh' }}>
      <Header />
      <section style={{ textAlign: 'center', paddingBottom: '20px'}}>
        <h1>TERMS OF USE</h1>
      </section>

      <section style={{ padding: '20px' }}>
        <h5>ACCEPTANCE OF THE TERMS OF USE</h5>
        <p>These terms of use, together with any documents referred to herein (collectively, these “Terms of Use”), apply to your use of this website including any content, functionality, or services on or through www.SoftStackFactory.com or any SoftStack Factory, affiliated website (the “Website”), whether as a guest or a registered user.</p>
        <p>Please read these Terms of Use carefully before you start to use the Website. By using the Website, you accept and agree to be bound and abide by these Terms of Use. If you do not want to agree to these Terms of Use, you must not access or use the Website.</p>

        <h5>ABILITY TO ACCEPT TERMS OF USE</h5>
        <p>You affirm that you are at least 18 years of age and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms of Use, and to abide by and comply with these Terms of Use. If you are under 18 years of age, you should not use this Website unless supervised by an adult who agrees to be bound by these Terms of Use.</p>
        <p>In any case, you affirm that you are over the age of 13, as the Website is not intended for children under 13. We do not knowingly collect personal information from any child under the age of thirteen (13).</p>

        <h5>PRIVACY & SECURITY</h5>
        <p>All information we collect is subject to our Privacy Policy. Our Privacy Policy is available at Privacy Policy. By using the Website, you authorize and consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.</p>
        <p>To access some features of the Website, you may have to create an account. You may never use another’s account without permission. When creating your account, you agree to provide accurate, current, and complete information. You are solely responsible for the activity that occurs on your account and you must keep your account password secure. You must notify the Company immediately of any breach of security or unauthorized use of your account. Although the Company will not be liable for your losses caused by any unauthorized use of your account, you agree to defend and indemnify the Company or others for the losses due to such unauthorized use.</p>
        <p>By using this site you acknowledge that Internet transmissions are never completely private or secure. You understand that any message or information you send to the Website may be read or intercepted by others, notwithstanding the Company’s efforts to protect such transmissions. Further, the Company is not responsible for the privacy practices employed by other sites that may be linked to the Website.</p>
        <p>As a condition of your use of the Website, you agree that you will not take any action intended to: (i) access data that is not intended for you; (ii) invade the privacy of, obtain the identity of, or obtain any personal information about any customer or user of the Website; (iii) probe, scan, or test the vulnerability of the Website or the Company network or breach security or authentication measures without proper authorization; (iv) attempt to interfere with service to any user, host, or network or otherwise attempt to disrupt the Company’s business via means of, including but not limited to, submitting a virus to the Website, “overloading,” “flooding,” “spamming,” “mail bombing,” or “crashing;” (v) send unsolicited mail, including promotions and/or advertising of products and services. Violations of system or network security may result in civil or criminal liability.</p>

        <h5>INTELLECTUAL PROPERTY RIGHTS</h5>
        <p>The content on the Website, including without limitation, the text, software, scripts, html code, graphics, photos, sounds, music, videos, interactive features, and the like (“Content”) and the trademarks, service marks, domain names, and logos contained therein (“Marks”), are owned by or licensed to Us, subject to copyright and other intellectual property rights under United States law, foreign law, and international conventions. Content on the Website is provided to you AS IS for your information and personal use only and may not be used, copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or otherwise exploited for any other purposes whatsoever without the prior written consent of the Company. The Company reserves all rights not expressly granted in and to the Website, Content, and Marks.</p>

        <h5>ELECTRONIC COMMUNICATIONS</h5>
        <p>When you visit the Website or send emails to the Company, you are communicating with us electronically and consent to receiving communications from us electronically pursuant to our E-Consent policy. We will communicate with you by email or by posting notices on this Website. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing to the extent permissible by law. You agree that we may send emails to you for the purpose of advising you about changes or additions to the Website, any of our products or services, or for such other purposes as we deem appropriate and as permissible by law.</p>

        <h5>CORRECTION OF ERRORS; CHANGES TO THE WEBSITE</h5>
        <p>The information and material presented on or through the Website may contain inaccuracies, typographical errors, or be incomplete. We reserve the right to amend any inaccuracies, errors, or omissions in our sole discretion without notice to you. We may make material changes to the Website at any time, in our sole discretion without notice to you. Further, We reserve the right to suspend access to the Website or close it indefinitely.</p>

        <h5>LINKS FROM THE WEBSITE</h5>
        <p>If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any third party sites linked to the Website, you do so entirely at your own risk and subject to the terms and conditions of use for such sites.</p>

        <h5>GEOGRAPHIC RESTRICTIONS</h5>
        <p>We provide the Website for use only by persons located in the United States. We make no claims that the Website or any of its content is accessible or appropriate outside of the United States. Access to the Website may not be legal by certain persons or in certain countries. If you access the Website from outside of the United States, you do so on your own initiative and are responsible for compliance with local laws.</p>

        <h5>PRODUCTS AND SERVICES SUBJECT TO ACCEPTANCE BY COMPANY</h5>
        <p>Any product or service on the Website may have exclusions, limitations, or restrictions under which it may not be available to you. Your eligibility for particular products and services on the Website is subject to the final determination and acceptance by the Company. The Company makes no solicitation to any person in any jurisdiction where the information, products, or services provided through the Website are prohibited by law.</p>

        <h5>NO FIDUCIARY RELATIONSHIP</h5>
        <p>You agree that no client, advisory, professional, or fiduciary relationship is created, implied, or established between you and the Company by use of the Website. You agree and understand that in connection with the Website, the Company is not engaged in rendering auditing, accounting, financial, investment, tax, or legal advice and that you will consult an appropriate licensed professional for advice relating to the specific facts that may apply to you. This includes, but is not limited to, the use of any of our tools and any other materials in our library.</p>

        <h5>OFFERS & PROMOTIONS</h5>
        <p>Any and all offers or promotions advertised on the Website are void where prohibited and are subject to the posting of any official rules pertaining to such offers or promotions.</p>

        <h5>DISCLAIMER OF WARRANTIES</h5>
        <p>YOUR USE OF THE WEBSITE IS AT YOUR OWN RISK. THE WEBSITE IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</p>
        <p>NEITHER THE COMPANY, NOR ANY PERSON OR ENTITY ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR COMPLETENESS OF THE WEBSITE’S CONTENT OR THE CONTENT OF ANY SITES LINKED TO BY THE WEBSITE. THE COMPANY, NOR ANY PERSON OR ENTITY ASSOCIATED WITH THE COMPANY, ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (II) DAMAGES, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE WEBSITE; (III) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE WEBSITE; (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE WEBSITE BY ANY THIRD PARTY.</p>
        <p>THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND RELATING TO THE WEBSITE OR ANY OF OUR PRODUCTS OR SERVICES, WHETHER EXPRESS OR IMPLIED, STATUTORY OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE. WITHOUT LIMITING THE FOREGOING, THIS DISCLAIMER DOES NOT APPLY TO ANY PRODUCT WARRANTY OFFERED BY THE MANUFACTURER OF A PURCHASED ITEM.</p>
        <p>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</p>

        <h5>LIMITATION OF LIABILITY</h5>
        <p>IN NO EVENT WILL THE COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE THE WEBSITE, ANY SITES LINKED TO IT, OR ANY CONTENT, GOODS, OR SERVICES OBTAINED THROUGH THE WEBSITE OR ANY SITES LINKED TO IT INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES INCLUDING BUT NOT LIMITED TO PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, WHETHER CASUED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.</p>
        <p>THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW. IF ANY PART OF THIS LIMITATION ON LIABILITY IS FOUND TO BE INVALID OR UNENFORCEABLE FOR ANY REASON, THEN THE AGGREGATE LIABILITY OF COMPANY OR ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS UNDER SUCH CIRCUMSTANCES FOR LIABILITIES THAT OTHERWISE WOULD HAVE BEEN LIMITED SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100).</p>

        <h5>WAIVER AND SEVERABILITY</h5>
        <p>No waiver by the Company of any term or condition set forth in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition. Any failure of the Company to assert a right or provision under these Terms of Use shall not constitute a waiver of such right or provision.</p>
        <p>If any provision of these Terms of Use is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of these Terms of Use will continue in full force and effect.</p>

        <h5>CHANGES TO THE TERMS OF USE</h5>
        <p>The Company reserves the right to change these Terms of Use in its sole discretion, at any time without notice. All changes to these Terms of Use are effective immediately upon posting to the Website. Your use of the Website following any such change constitutes your agreement to be bound by the most recent Terms of Use. For this reason, you are expected to review these Terms of Use each time you use the Website.</p>

        <h5>ARBITRATION AND GOVERNING LAW</h5>
        <p>By accessing the Website, you agree that all disputes will be handled through arbitration as set forth in our Arbitration Provisions. Should there be a dispute between you and Company, the dispute will be resolved by a third party arbiter. You may opt-out of Our Arbitration Provisions by following the process set forth in the Arbitration Provisions.</p>
        <p>All matters relating to the Website and these Terms of Use and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of the State of Delaware without giving effect to any choice or conflict of law provision or rule, whether of the State of Delaware or any other jurisdiction.</p>

        <h5>LIMITATION ON TIME TO FILE CLAIMS</h5>
        <p>ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THE WEBSITE OR THESE TERMS OF USE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES, OTHERWISE SUCH CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.</p>

        <h5>ENFORCEMENT OF TERMS OF USE</h5>
        <p>BY ACCESSING AND USING THE WEBSITE, YOU AGREE THAT YOUR ACCESS TO AND USE OF THIS WEBSITE IS SUBJECT TO THESE TERMS OF USE, AS WELL AS ALL APPLICABLE LAWS, AS GOVERNED AND INTERPRETED PURSUANT TO THE LAWS OF THE STATE OF DELAWARE.</p>
      </section>

      <Divider />

      <Footer />
    </main>
  )
}

export default TermsPage;