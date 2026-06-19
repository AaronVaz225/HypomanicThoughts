import styles from '../BackButton/backButton.module.css'
import { useNavigate, useLocation } from 'react-router'



const BackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleBack = ({ fallbackUrl = "/"}) => {
        //If the location.key is default and the back btn can be clicked, that means the user got there from a link or by typing the URL himself, so need fallback
        if (location.key === "default") {
            navigate(fallbackUrl, {replace: true})
        } else {
            navigate(-1);
        }
    }




  return (
    <div className={styles.backBtnContainer}>
        <button onClick={handleBack} className={styles.button}>
        <img src="/backbtn.png" alt="back arrow" className={styles.arrow} />
        Back To Posts</button>
    </div>
  )
}

export default BackButton