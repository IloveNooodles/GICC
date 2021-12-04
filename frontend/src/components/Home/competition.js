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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt, quo,
          nisi enim impedit perspiciatis exercitationem distinctio id quia,
          suscipit asperiores vitae libero. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Voluptate ducimus sapiente quas deserunt
          doloribus sint? Nostrum incidunt, quo, nisi enim impedit perspiciatis
          exercitationem distinctio id quia, suscipit asperiores vitae libero.
        </div>
      </div>
      <div class="containerCard">
        <div class="card">
          <img src={Marketing} alt="marketing" class="cardImage" />
          <div class="cardTitle">Marketing</div>
          <div class="cardContent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
            quo, nisi enim impedit perspiciatis exercitationem distinctio id
            quia, suscipit asperiores vitae libero.
          </div>
        </div>
        <div class="card">
          <img src={Operations} alt="operations" class="cardImage" />
          <div class="cardTitle">Operations</div>
          <div class="cardContent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
            quo, nisi enim impedit perspiciatis exercitationem distinctio id
            quia, suscipit asperiores vitae libero.
          </div>
        </div>
        <div class="card">
          <img src={EHS} alt="EHS" class="cardImage" />
          <div class="cardTitle">EHS</div>
          <div class="cardContent">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
            quo, nisi enim impedit perspiciatis exercitationem distinctio id
            quia, suscipit asperiores vitae libero.
          </div>
        </div>
      </div>
      <div class="bottomLink">learn more {">"}</div>
    </div>
  );
};

export default Competition;
