import React from 'react'
import styles from "./PlansCard.module.css"

const PlansCard = () => {
    return (
        <div className={styles.PlansCard}>
            <div className='flex items-center gap-2'>
                <button>18 <br /> <small>weeks</small></button>
                <button>5.1hrs <br /> <small>hrs/weeks</small></button>
                <button>5/6 <br /> <small>workouts/weeks</small></button>
            </div>
            <h2>80/20 Running: 2023 Edition Marathon Level 1 (4 to 7.75 Hours per Week)</h2>
            <div className='flex justify-between items-center'>
                <div>
                    <div className="flex items-center gap-2">
                        <div className='w-[14px] h-[15px] bg-[#005695]'></div>
                        <span>Intermediate</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><title></title><path d="M8 11.7333L12.9467 15.3333L11.0533 9.52L16 6H9.93333L8 0L6.06667 6H0L4.94667 9.52L3.05333 15.3333L8 11.7333Z" fill="#F6C644"></path></svg>
                        <span className='font-bold'>4.7 (97)</span>
                    </div>
                </div>
                <div>
                    <h3>50$</h3>
                </div>
            </div>
        </div>
    )
}

export default PlansCard
