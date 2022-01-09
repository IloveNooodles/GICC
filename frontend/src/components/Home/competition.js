import "./competition.css";
import EHS from "../assets/EHS.png";
import Operations from "../assets/operations.png";
import Marketing from "../assets/marketing.png";

const Competition = () => {
  return (
    <div class="containerCompetition">
      <div class="containerBase">
        <div class="containerTitleCompetition">Competition</div>
      </div>
      <div class="containerDesc">
        <div class="containerTitleDesc">
        GICC 2022’s case competition will be distributed in three different sectors, namely marketing, operation, and EHS (Environment, Health, and Safety). We chose the sectors to appeal to a broader range of participants who may want to focus on new aspects of a business model that they have never ventured into.
        </div>
      </div>
      <div class="containerCard">
        <div class="card" data-aos="fade-down" data-aos-duration="1000">
          <img src={Marketing} alt="marketing" class="cardImage" />
          <div class="cardTitle">Marketing</div>
          <div class="cardContent">
          Refers to promoting the selling of a product or a service to consumers. Marketing involves all the actions a company makes to draw in customers and maintain relationships. In the marketing sector, participants must identify the issues faced by the case contributor, e.g. declining sales or low product engagement, and the participants must develop a strategy-based action to maximize income.
          </div>
        </div>
        <div
          class="card"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img src={Operations} alt="operations" class="cardImage" />
          <div class="cardTitle">Operations</div>
          <div class="cardContent">
          Refers to design and control the process of production. Operations management involves the responsibility of ensuring that business operations are efficient. In the Operation sector, participants must identify the issues faced by the case contributor, e.g. cost of production is too high or ineffective storage management, and the participants must develop a strategy-based action to create the most effective and efficient system.
          </div>
        </div>
        <div
          class="card"
          data-aos="fade-down"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img src={EHS} alt="EHS" class="cardImage" />
          <div class="cardTitle">EHS</div>
          <div class="cardContent">
          Refers to a method of using or producing products that do not disturb the ecological balance. EHS involves studies and implements practical aspects of protecting the environment and maintaining health and safety at the occupation. In the EHS sector, participants must develop a strategy-based action to create environmentally friendly products.
          </div>
        </div>
      </div>
      <div class="bottomLink">learn more {">"}</div>
    </div>
  );
};

export default Competition;
