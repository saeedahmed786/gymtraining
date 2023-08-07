import Image from 'next/image'
import React from 'react'
import styles from "./Offers.module.css"
import PlansImage from "../../../assets/tp-athlete-features.png"
import CoachesImage from "../../../assets/tp-people-message.svg"
import ToolsImage from "../../../assets/tp-tools.svg"

const Offers = () => {
    return (
        <div className={styles.Offers}>
            <h1>What Is TrainingPeaks?</h1>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
                <div>
                    <Image src={PlansImage} alt="Plans Image" />
                    <h2>Training Plans</h2>
                    <p>
                        We help you find the right plan from our library of proven training plans.
                    </p>
                    <button>Shop Training Plans</button>
                </div>
                <div>
                    <Image src={CoachesImage} alt="Plans Image" />
                    <h2>Accredited Coaches</h2>
                    <p>
                        We’ll match you with an accredited coach that will guide you every step of the way.
                    </p>
                    <button>
                        Find Your Coach
                    </button>
                </div>
                <div>
                    <Image src={ToolsImage} alt="Plans Image" />
                    <h2>Powerful Tools</h2>
                    <p>
                        Train smart and achieve your fitness goals with the world’s most powerful fitness app.
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Offers
