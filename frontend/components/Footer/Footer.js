import React from 'react'
import Link from 'next/link'
import styles from "./Footer.module.css"

export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className='pt-5 text-dark'>
                <div className='grid grid-cols-6 gap-2 md:grid-cols-4 pt-5 px-5 mb-4'>
                    <div>
                        <h3>For Athletes</h3>
                        <div>
                            <Link href='/signup'>Signup</Link>
                            <Link href='/plans'>Find a Training Plan</Link>
                            <Link href='/pricing'>Pricing</Link>
                            <Link href='/blogs'>Training Articles</Link>
                            <Link href='/guides'>Training Guides</Link>
                        </div>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <div>
                            <Link href='/customer-support'>Help</Link>
                            <Link href='/contact-us'>Contact Us</Link>
                            <Link href='/kit'>Media Kit</Link>
                            <Link href='/terms'>Terms of Use</Link>
                            <Link href='/privacy'>Privacy Policy</Link>
                        </div>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <div>
                            <Link href='/about'>About</Link>
                            <Link href='/careers'>Careers</Link>
                            <Link href='/referral'>Invite a Friend</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.footerLast}>
                    <div>
                        <Link className="navbar-brand" href="/">
                            GymTraining, LLC
                        </Link>
                    </div>
                    <div>
                        <div className='icons'>
                            <Link href='www.facebook.com'>
                                <i className='fab fa-facebook fa-lg'></i>
                            </Link>
                            <Link href='www.facebook.com'>
                                <i className='fab fa-google fa-lg'></i>
                            </Link>
                            <Link href='www.facebook.com'>
                                <i className='fab fa-twitter fa-lg'></i>
                            </Link>
                            <Link href='www.facebook.com'>
                                <i className='fab fa-linkedin fa-lg'></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
