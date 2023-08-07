import React from 'react'
import styles from "./AllInOne.module.css"
import Image from "next/image"
import TrainingChart from "../../../assets/training.png"

const AllInOne = () => {
    return (
        <div className={styles.AllInOne}>
            <h1>The All-in-One Training Platform</h1>
            <div className="grid grid-cols-6 md:grid-cols-2 mt-6">
                <div>
                    <Image src={TrainingChart} alt="Training chart" />
                </div>
                <div>
                    <h2>Your Centralized Workout Hub</h2>
                    <p>
                        TrainingPeaks offers the world’s most powerful training app, allowing you to plan, track, and analyze your training all in one place. Sync your account with your favorite apps and devices for real-time workout guidance and watch your fitness progress with powerful data tools. Plus, there are training plans and coaching services to guide you along the way.
                    </p>
                    <div className='flex gap-4'>
                        <button>Learn More</button>
                        <button className={styles.getPremiumBtn}>Get Premium</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllInOne
