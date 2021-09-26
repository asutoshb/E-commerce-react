import React from 'react'
import {useWindowScroll} from "react-use"
import {IoIosArrowUp} from "react-icons/io"
import styles from "./ToTop.module.css"

export const ToTop = () => {

    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisible] = React.useState(false)

    React.useEffect(() => {
        if(pageYOffset > 700) {
            setVisible(false)
        }
        else {
            setVisible(true)
        }
    }, [pageYOffset])

    const scrollToTop = () => window.scrollTo({top: 0, behavior: "smooth"})

    if(visible) {
        return false
    }

    return (
        <div className = {styles.toTop} onClick = {scrollToTop} >
          <IoIosArrowUp />
        </div>
    )
}