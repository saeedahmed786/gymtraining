import React from 'react'
import PlansCard from '../components/PlansCard/PlansCard'
import styles from "../styles/Plans.module.css"
import Link from "next/link"

const Plans = () => {
    return (
        <div className={styles.Plans}>
            <h2 className={styles.title}>Training Plans</h2>
            <Link href="/plan/1">
                <PlansCard />
            </Link>
            <PlansCard />
            <PlansCard />
            <PlansCard />
        </div>
    )
}

export default Plans
