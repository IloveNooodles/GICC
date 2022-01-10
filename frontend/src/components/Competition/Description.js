import "./Description.css";

const Description = () => {
  return (
    <div class="description">
      <div class="descriptionBase">
        <div class="descriptionTitle">
          GICC 2022 <br /> Event Guidebook
        </div>
      </div>
      <div class="descriptionReal">
        <div class="descdesc">
          For further information about GICC 2022 competition, you can download
          GICC 2022 Guidebook below
        </div>
      </div>
      <div className="guide-button-container">
        <a href="https://bit.ly/GICC2022GB">
          <button className="guide-button" type="button" id="guides">
            Download Guide Book
          </button>
        </a>
      </div>
    </div>
  );
};

export default Description;
