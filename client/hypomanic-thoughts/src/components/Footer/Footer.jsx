import styles from "../Footer/footer.module.css"


const Footer = () => {
  
  return (
    <div className={styles.footerContainer}>
      <img src="/line.png" className={styles.footerLine} />
      <div className={styles.footer}>Created By Aaron Vazquez</div>
    </div>
  )
}

export default Footer

