import "./competition.css"
import EHS from "./assets/EHS.png";
import Operations from "./assets/operations.png";
import Marketing from "./assets/marketing.png";
const Competition = () => {
    return(
        <div class="container-competition">
            <div class="container-base">
                <div class="container-title-competition">
                    Competition
                </div>
            </div>
            <div class="container-desc">
                <div class="container-title-desc">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                    ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
                    quo, nisi enim impedit perspiciatis exercitationem distinctio id
                    quia, suscipit asperiores vitae libero.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                    ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
                    quo, nisi enim impedit perspiciatis exercitationem distinctio id
                    quia, suscipit asperiores vitae libero.
                </div>
            </div>
            <div class="container-card">
                <div class="card">
                    <img src={Marketing} alt="decoration1" class="card-image" />
                    <div class="card-title">
                        Marketing
                    </div>
                    <div class="card-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                        ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
                        quo, nisi enim impedit perspiciatis exercitationem distinctio id
                        quia, suscipit asperiores vitae libero.
                    </div>
                </div>
                <div class="card">
                    <img src={Operations} alt="decoration1" class="card-image" />
                    <div class="card-title">
                        Operations
                    </div>
                    <div class="card-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                        ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
                        quo, nisi enim impedit perspiciatis exercitationem distinctio id
                        quia, suscipit asperiores vitae libero.
                    </div>
                </div>
                <div class="card">
                    <img src={EHS} alt="decoration1" class="card-image" />
                    <div class="card-title">
                        EHS
                    </div>
                    <div class="card-content">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
                        ducimus sapiente quas deserunt doloribus sint? Nostrum incidunt,
                        quo, nisi enim impedit perspiciatis exercitationem distinctio id
                        quia, suscipit asperiores vitae libero.
                    </div>
                </div>
            </div>
            <div class="bottom-link">
                learn more {'>'}
            </div>
        </div>
    )
}

export default Competition;
