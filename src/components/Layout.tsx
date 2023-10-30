import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import IReactNode from "@/lib/types"
import styles from './Layout.module.css';

export default function Layout({ children }: IReactNode) {
    return (
        <div className={styles.mainContainer}>
            <Header />
            <main>{children}</main>
            {/* <Footer /> */}
        </div>
    )
}