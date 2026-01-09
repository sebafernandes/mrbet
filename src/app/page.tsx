import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <img src={'/bg.png'} alt="background" /> */}
      <main className={styles.main}>
        <div className={styles.topRow}>
          <img src={'/logo.svg'} alt="logo" />
        </div>
        <div className={styles.title}>
          <h1>
            <b>Muy pronto</b> vas a poder disfrutar de <br/>
            un sistema de beneficios para usuarios <br/>
            de <b>Casinos Legales</b>
          </h1>
        </div>
        <div className={styles.boxes}>
           <div className={styles.box}>
            <img src={'/shield.svg'} alt="shield" />
            <p>Jugar de forma segura en plataformas autorizadas de todo el país</p>
          </div>
          <div className={styles.box}>
            <img src={'/stars.svg'} alt="star" />
            <p>Beneficios exclusivos en marcas adheridas</p>
          </div>
          <div className={styles.box}>
            <img src={'arrow.svg'} alt="arrow" />
            <p>Suma puntos por participar</p>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <p>Seguinos y enterate de todo!</p>
          <div className={styles.socials}>
            <img src={'/fb.svg'} alt="Facebook" />
            <img src={'/ig.svg'} alt="Instagram" />
            <img src={'/tiktok.svg'} alt="Tiktok" />
          </div>
        </div>

        <div className={styles.footer}>
          <img src={'/lotery.svg'} alt="Lotery" />
          <p>Jugar compulsivamente es perjudicial para la salud</p>
          <img src={'r.svg'} alt="Mayores de 18 años." />
        </div>

      </main>
    </div>
  );
}
