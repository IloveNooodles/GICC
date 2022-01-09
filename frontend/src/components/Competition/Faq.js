import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "./Faq.css";

const Faq = () => {
  return (
    <div className="Faq-container">
      <div className="Faq-title">Frequently Asked Questions</div>
      <Accordion className="Accordion" allowToggle>
        <AccordionItem className="Accordion-card">
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
                What is GICC 2022?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className="Accordion-after">
          Ganesha Integration Case Competition 2022 is a unique simulation for undergraduate students about the real “How Working in Industry'' that unfolds in the form of competition. The competition is about encouraging students to innovate and solve real industrial problems that exist from our Company Case Contributor and innovate an advancement that improves the key sectors of companies which are marketing, operation, and EHS (Environment, Health, and Safety). The Event would also make participants cooperate with people they have never met before, and push them to collaborate with colleagues from different backgrounds
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              How many sectors are there in GICC 2022?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          There are three main sectors i.e. Marketing, Operation, and EHS (Environment, Health, and Safety)
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              Do I need to pay to join the competition?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Yes, the registration fee i.e. Rp35.000 (Early Bird) and Rp45.000 (Late Bird)
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              When is the registration open?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Early Bird Registration: 13 January - 19 January <br/>
          Late Bird Registration: 20 January - 25 January <br/><br/>
          Entry fee payment is transferred to the following account: <br/>
          Bank XXX 123456789 on behalf of XXXXXXX.<br/>
          Please add the number 01 if you register in the marketing sector, 02 for operations, and 03 for EHS behind your nominal registration fee.<br/>
          For example: Rp40.001,00 (Marketing Sector)

          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              Will there be a prize for the winner?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Yes, the total prize for GICC 2022 is 8.1 million rupiah
          </AccordionPanel>
        </AccordionItem>
        
        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              Is GICC 2022 an Individual competition?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          At the preliminary phase, participants will compete as individuals. The top 6 of each sector will be formed as a group of three (one from each sector) and compete as teams.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              How to register GICC 2022 competition?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          1. Create an Account on GICC 2022’s website and click registration. <br/>
          2. Determine the sector to pursue in the preliminary phase. Applicants are not allowed to change the sector after submitting the registration form. <br/>
          3. Fill in the required information.<br/>
          4. Upload the required documents. <br/>
          5. Make sure all the information is filled in and the documents uploaded are correct.<br/>
          6. Submit the registration.<br/>
          7. Applicants will receive a confirmation email no longer than 3 days.<br/>
          8. The case will be released on the website after the first Technical Meeting. Login to your account and check the case.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              What should I do if I don’t receive a confirmation email?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          The confirmation email will be sent no longer than 3 days after the registration. If you haven’t receive any after 3 days, please contact GICC contact person.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              Can I change sector after registering?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Participants must choose only one sector and not be allowed to change the sector after submitting the registration form.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className="Accordion-button">
              <Box flex="1" textAlign="left">
              Who can join the competition?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Indonesia and overseas undergraduate student pursuing any majors 
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
