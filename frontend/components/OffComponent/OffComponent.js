import React from 'react'
import Image from 'next/image'
import Logo from '../../assets/logo'
import GroupedDevices from '../../assets/grouped_devices.png'
import styles from "./OffComponent.module.css"

const OffComponent = () => {
    return (
        <div className={styles.OffComponent}>
            <div className='flex items-center gap-3'>
                <Logo />
                <span>|</span>
                <span>Premium</span>
            </div>
            <div className='mt-5'>
                <h2>15% Off</h2>
                <p>Bundle your plan with TrainingPeaks Premium, and you'll unlock our progress-tracking tools, plus the freedom to move workouts to fit your schedule.</p>
                <Image src={GroupedDevices} width={300} alt = "Image" />
                <small>$106.24 USD for the first year, billed yearly.</small>
            </div>
        </div>
    )
}

export default OffComponent
