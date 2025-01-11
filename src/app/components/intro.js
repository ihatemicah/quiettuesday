import Image from "next/image";
import styles from './intro.module.css';

const Intro = () => {
    return (
        <>
            <div className={styles.intro}>
                <Image
                    src="/img/quiet-tuesday-logo.svg"
                    alt="quiet tuesday logo"
                    width={300}
                    height={100}
                    className={styles.logo}
                />
                <h1>we help good businesses become unforgettable brands.</h1>
            </div>
            <hr className={styles.divider} />
            <div> 
                <h2 className={styles.header2}>about us</h2>
                <p className={styles.paragraph}> we learned that brand goes beyond how something looks. it’s about telling a story that’s worth keeping tabs on.  <br/> <br/>with over eight years of experience, we craft thoughtful and compelling narratives through design and content. our approach weaves together visual and verbal to create experiences that stick.</p>
            </div>
            <hr className={styles.divider} />
            <div>
                <h2 className={styles.header2}>services</h2>
                <div className={styles.services}>
                    <div className={styles.serviceBox} id="visual-identity">visual identity</div>
                    <div className={styles.serviceBox} id="3d-viz">3d visualization</div>
                    <div className={styles.serviceBox} id="visual-identity">social media </div>
                    <div className={styles.serviceBox} id="copywriting">copywriting</div>
                    <div className={styles.serviceBox} id="content-strategy">content strategy</div>
                    <div className={styles.serviceBox} id="art-direction">art direction</div>
                    <div className={styles.serviceBox} id="deck-design">motion design</div>
                </div>
            </div>
            <hr className={styles.divider} />
             {/*<div className={styles.packageRow}>
                <h2 className={styles.header2}>current packages</h2>
                <h2 className={styles.header2}>pricetag</h2>
            </div>
            <div className={styles.packageRow}>
                <p className={styles.package}>brand visualization</p>
                <a className={styles.package} href="mailto:work@quiettuesday.com">$4,000 / 4 week sprint</a>
            </div>
            <div className={styles.packageRow}>
                <p className={styles.package}>content strategy</p>
                <a className={styles.package} href="mailto:work@quiettuesday.com">$2,000 / 2 week sprint</a>
            </div> 
            <div className={styles.packageRow}>
                <p className={styles.package}> misc service requests</p>
                <a className={styles.package} href="mailto:work@quiettuesday.com"> $500+ / estimated time </a>
            </div>
            <hr className={styles.divider} />*/}
            <a href="https://fern-mint-efd.notion.site/13c802ea7235809e85b0dc1228eeb93d?pvs=105" target="_blank"> 
                <div className={styles.cta}>
                    request services
                </div>
            </a>
        </>
    );
};

export default Intro;