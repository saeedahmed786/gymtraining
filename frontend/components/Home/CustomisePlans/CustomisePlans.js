import Image from 'next/image'
import React from 'react'
import styles from "./CustomisePlans.module.css"
import CustomisePlansImage from "../../../assets/customPlans.png"

const CustomisePlans = () => {
    return (
        <div className={styles.CustomPlans}>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <h1>Customize Your Training With a Coach</h1>
                    <p>
                        We’ll match you with an accredited coach who can fully customize your training around your schedule, event date, and performance goals. Try risk-free for 30 days.
                    </p>
                    <button>Learn More</button>
                </div>
                <div>
                    <Image src={CustomisePlansImage} alt="Custom Plans Image" />
                </div>
            </div>
        </div>
    )
}

export default CustomisePlans
