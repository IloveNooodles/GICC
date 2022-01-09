import "./Description.css";

const Description = () => {
    return(
        <div class="description">
            <div class="descriptionBase">
                <div class="descriptionTitle">GICC 2022 <br/> Event Guidebook</div>
            </div>
            <div class="descriptionReal">
                <div class="descdesc">
                For further information about GICC 2022 competition,  you can download GICC 2022 Guidebook below
                </div>
            </div>
            <div className="guide-button-container">
              <button className="guide-button" onclick="location.href = 'https://www.google.co.id'" type="button">
                Download Guide Book
              </button>
            </div>
        </div>
    )
}

export default Description;