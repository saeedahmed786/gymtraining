import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import styles from "../../styles/Details.module.css"
import icon from "../../assets/icon-device-compatible.svg"
import checkmark from "../../assets/checkmark.png"
import planImage from "../../assets/header.jpg"
import { LeftOutlined } from "@ant-design/icons";
import OffComponent from '../../components/OffComponent/OffComponent';

const PlanDetails = () => {
    return (
        <div className={styles.PlanDetails}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-center'>
                <div>
                    <Link href="/plans" className='flex gap-1 items-center text-[#005695] font-[500]'>
                        <LeftOutlined />
                        <span>Browse More Plans</span>
                    </Link>
                    <h2 className={styles.title}>80/20 Running: 2023 Edition Marathon Level 1 (4 to 7.75 Hours per Week)</h2>
                    <div className='mt-4 flex gap-2 items-center'>
                        <Image src={icon} width={28} height={28} />
                        <span> Includes Structured Workouts</span>
                    </div>
                    <h3 className={styles.desc}>Plan Description</h3>
                    <Image src={planImage} />
                    <p className='mt-6' dangerouslySetInnerHTML={{ __html: "qsdhwdsh" }}></p>
                </div>
                <div>
                    <small className='font-bold'>Author</small>
                    <h4 className='mb-5'>80/20 Endurance – Over 100,000 Plans Sold</h4>
                    <small className=''>Length</small>
                    <p className='font-[15px]'>18 Weeks</p>
                    <h3>$49.95</h3>
                    <button className='mt-8'>Buy Now</button>
                    <div className='mt-6'>
                        <ul>
                            <li>This plan includes a Free Basic TrainingPeaks Account.</li>
                            <li> Access your training plan anywhere on the TrainingPeaks mobile and desktop apps.</li>
                            <li> Track your performance with robust data tracking and detailed graphs.</li>
                            <li> Plan for your event in the TrainingPeaks calendar.</li>
                            <li>Track your weight, sleep, hours, fatigue and stress while you train.</li>
                            <li>Completed workouts sync with popular apps like Garmin and Wahoo. Learn More</li>
                            <li>If plan includes Structured Workouts, then planned workouts sync to compatible devices and guide you through workouts in real time. Learn More</li>
                        </ul>
                    </div>
                    <hr />
                    <div>
                        <div className='flex items-center gap-4'>
                            <h4>REFUND POLICY</h4>
                            <Image src={checkmark} width={28} height={28} />
                        </div>
                        <p>This plan is protected by our Refund Policy and may, with the author's approval, be exchanged for a plan of equal value from the same author.
                            <br />  <Link href="/">Still have questions about this plan?</Link>
                        </p>
                    </div>
                    <OffComponent />
                </div>
            </div>
        </div>
    )
}

export default PlanDetails;
